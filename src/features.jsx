import { defaultFloorPlan } from '../shared/floor-plan.mjs';

export function createFeatures(React, Modal) {
  const {useState, useRef} = React;
  const title = table => `${table.number === 18 ? 'Head table' : `Table ${String(table.number).padStart(2,'0')}`}${table.name && !/^Table \d+$/.test(table.name) && table.name !== 'Head table' ? ` · ${table.name}` : ''}`;

  function GuestTablePicker({guest, tables, guests, busy, error, onClose, onAssign, onMap}) {
    const [query,setQuery]=useState('');
    const [saving,setSaving]=useState(false);
    async function choose(id) {
      if(saving||busy)return;
      setSaving(true);
      try { if(await onAssign(guest.id,id))onClose(); } finally {setSaving(false);}
    }
    return <Modal title={`Seat ${guest.name}`} onClose={onClose} className="table-picker-modal">
      <p className="modal-intro">Choose a table. We’ll use its next open chair.</p>
      {guest.dietary && <p className="picker-dietary">Dietary restrictions: {guest.dietary}</p>}
      <label className="field-label">Find a table<input type="search" placeholder="Table number or name" value={query} onChange={e=>setQuery(e.target.value)} /></label>
      {error && <p className="feature-error" role="alert">{error}</p>}
      <div className="table-picker-list" aria-label="Choose a table" aria-busy={saving||busy}>
        {tables.filter(t=>title(t).toLowerCase().includes(query.toLowerCase())).map(table=>{
          const count=guests.filter(g=>g.tableId===table.id).length;
          const current=guest.tableId===table.id,full=count>=table.capacity;
          return <button key={table.id} className={`picker-table ${current?'current':''}`} disabled={saving||busy||(full&&!current)} onClick={()=>choose(table.id)} aria-label={`${title(table)}, ${current?'current table, ':''}${full?'full':`${table.capacity-count} chairs available`}`}>
            <span><strong>{title(table)}</strong><small>{current?'Current table · ':''}{count} of {table.capacity} seated</small></span>
            <span className="picker-availability">{full?'Full':`${table.capacity-count} open`}</span>
          </button>;
        })}
        {!tables.some(t=>title(t).toLowerCase().includes(query.toLowerCase()))&&<p className="muted">No matching tables. Try a number or another name.</p>}
      </div>
      <div className="modal-actions picker-actions">
        {guest.tableId&&<button className="button secondary" disabled={saving||busy} onClick={()=>choose(null)}>Unseat guest</button>}
        <button className="button secondary" disabled={saving||busy} onClick={onMap}>Choose on floor plan</button>
        <button className="button primary" disabled={saving||busy} onClick={onClose}>Cancel</button>
      </div>
    </Modal>;
  }

  function VenueLayer({floorPlan, selected, onSelect, onPointerDown, editing=false}) {
    const plan=floorPlan || defaultFloorPlan();
    const selectable=(id)=>editing?{role:'button',tabIndex:0,'aria-label':id==='image'?'Floor-plan image':`Select ${plan.elements.find(e=>e.id===id)?.label}`,
      onClick:e=>{e.stopPropagation();onSelect(id)},onKeyDown:e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();onSelect(id)}},onPointerDown:e=>onPointerDown(e,id,'move')}:{};
    const handles=(e,id)=>editing&&selected===id?<g className="resize-handle" onPointerDown={event=>onPointerDown(event,id,'resize')}>
      <rect x={e.x+e.width-9} y={e.y+e.height-9} width="18" height="18" rx="3" fill="#48604b" stroke="white" strokeWidth="2"/>
      <path d={`M${e.x+e.width-4} ${e.y+e.height+4}l8 -8`} stroke="white"/>
    </g>:null;
    return <g className={editing?'venue-layer editing':'venue-layer'}>
      {plan.image&&<g>
        <g {...selectable('image')} className={selected==='image'?'venue-selected':''}>
          <image href={plan.image.dataUrl} x={plan.image.x} y={plan.image.y} width={plan.image.width} height={plan.image.height} opacity={plan.image.opacity} preserveAspectRatio="none" pointerEvents={editing?'all':'none'}/>
          {editing&&<rect x={plan.image.x} y={plan.image.y} width={plan.image.width} height={plan.image.height} fill="transparent" stroke={selected==='image'?'#48604b':'#b8c1b7'} strokeDasharray="6 4"/>}
        </g>{handles(plan.image,'image')}
      </g>}
      {plan.elements.map(e=><g key={e.id}>
        <g {...selectable(e.id)} className={`venue-element venue-${e.kind} ${selected===e.id?'venue-selected':''}`}>
          {e.kind==='circle'?<ellipse cx={e.x+e.width/2} cy={e.y+e.height/2} rx={e.width/2} ry={e.height/2} />:<rect x={e.x} y={e.y} width={e.width} height={e.height} rx={e.kind==='lounge'?8:2} />}
          {e.kind==='dance'&&<rect x={e.x} y={e.y} width={e.width} height={e.height} fill="url(#dance-pattern)"/>}
          <text x={e.x+e.width/2} y={e.kind==='circle'?e.y+e.height+13:e.y+e.height/2+3} textAnchor="middle" className="plan-label" fontSize={e.kind==='circle'?7:Math.min(10,Math.max(6,e.width/(e.label.length*.7)))}>{e.label.toUpperCase()}</text>
        </g>{handles(e,e.id)}
      </g>)}
    </g>;
  }

  function FloorPlanEditor({floorPlan,tables,guests,busy,error,onClose,onSave}) {
    const [draft,setDraft]=useState(()=>structuredClone(floorPlan||defaultFloorPlan()));
    const [selected,setSelected]=useState(null);
    const [localError,setError]=useState('');
    const [uploading,setUploading]=useState(false);
    const [saving,setSaving]=useState(false);
    const svg=useRef(null),drag=useRef(null),file=useRef(null);
    const object=selected==='image'?draft.image:draft.elements.find(e=>e.id===selected);
    const disabled=busy||saving||uploading;
    function update(id,change) {
      setDraft(prev=>id==='image'?{...prev,image:{...prev.image,...change}}:{...prev,elements:prev.elements.map(e=>e.id===id?{...e,...change}:e)});
    }
    function constrain(value) {
      const next={...value};
      next.width=Math.max(20,Math.min(760,next.width));next.height=Math.max(20,Math.min(634,next.height));
      next.x=Math.max(20,Math.min(780-next.width,next.x));next.y=Math.max(36,Math.min(670-next.height,next.y));
      return next;
    }
    function point(e) {const matrix=svg.current?.getScreenCTM();return matrix?new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse()):null;}
    function start(e,id,mode) {
      if(disabled||e.button!==0||!e.isPrimary)return;
      const p=point(e);if(!p)return;
      e.preventDefault();e.stopPropagation();
      setSelected(id);const original=id==='image'?draft.image:draft.elements.find(item=>item.id===id);
      drag.current={id,mode,p,original:{...original},pointerId:e.pointerId};svg.current.setPointerCapture(e.pointerId);
    }
    function move(e) {
      const active=drag.current;if(!active||active.pointerId!==e.pointerId)return;
      const p=point(e);if(!p)return;
      const dx=p.x-active.p.x,dy=p.y-active.p.y,o=active.original;
      const next=active.mode==='move'?constrain({...o,x:o.x+dx,y:o.y+dy}):{...o,width:Math.max(20,Math.min(780-o.x,o.width+dx)),height:Math.max(20,Math.min(670-o.y,o.height+dy))};
      update(active.id,next);e.preventDefault();
    }
    function end(e) {if(drag.current?.pointerId===e.pointerId){drag.current=null;if(svg.current.hasPointerCapture(e.pointerId))svg.current.releasePointerCapture(e.pointerId);}}
    function editGeometry(key,value) {if(value===''||!Number.isFinite(Number(value)))return;update(selected,constrain({...object,[key]:Number(value)}));}
    function add(kind) {
      if(draft.elements.length>=60)return;
      const label={stage:'Stage',dance:'Dance floor',circle:'Cake table',bar:'Bar',lounge:'Lounge',rectangle:'Venue element'}[kind];
      const e={id:crypto.randomUUID(),kind,label,x:280,y:290,width:kind==='circle'?45:120,height:kind==='circle'?45:70};
      setDraft(p=>({...p,elements:[...p.elements,e]}));setSelected(e.id);
    }
    async function upload(e) {
      const input=e.target.files?.[0];e.target.value='';if(!input)return;
      setError('');if(!['image/png','image/jpeg','image/webp'].includes(input.type)){setError('Choose a PNG, JPEG, or WebP image.');return;}
      if(input.size>15*1024*1024){setError('Choose an image smaller than 15 MB.');return;}
      setUploading(true);const url=URL.createObjectURL(input);
      try {
        const image=new Image();image.src=url;await image.decode();
        if(!image.width||!image.height||image.width*image.height>50000000)throw new Error('This image is too large. Choose one under 50 megapixels.');
        const scale=Math.min(1,1800/Math.max(image.width,image.height));
        const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.width*scale));canvas.height=Math.max(1,Math.round(image.height*scale));
        const ctx=canvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0,canvas.width,canvas.height);
        const fit=Math.min(760/canvas.width,634/canvas.height),width=canvas.width*fit,height=canvas.height*fit;
        setDraft(p=>({...p,image:{dataUrl:canvas.toDataURL('image/jpeg',.88),name:input.name.slice(0,180),x:20+(760-width)/2,y:36+(634-height)/2,width,height,opacity:.55}}));setSelected('image');
      }catch(err){setError(err.message||'This image could not be opened. Try another file.');}
      finally{URL.revokeObjectURL(url);setUploading(false);}
    }
    async function save() {if(disabled)return;setSaving(true);try{if(await onSave({elements:draft.elements,image:draft.image,expectedRevision:draft.revision}))onClose();}finally{setSaving(false);}}
    return <Modal title="Customize floor plan" onClose={()=>{if(!saving)onClose()}} wide className="floor-editor-modal">
      <p className="modal-intro">Move venue elements and resize them with the corner handle. Save when your layout is ready.</p>
      {(localError||error)&&<p className="feature-error" role="alert">{localError||error}</p>}
      <div className="floor-editor-layout">
        <div className="editor-canvas-wrap">
          <svg ref={svg} viewBox="0 0 800 705" className="editor-canvas" aria-label="Editable venue floor plan" onPointerMove={move} onPointerUp={end} onPointerCancel={end} onLostPointerCapture={()=>{drag.current=null}}>
            <defs><pattern id="editor-dance-pattern" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V18" stroke="#ddd5c3" strokeWidth=".7"/></pattern></defs>
            <rect x="20" y="36" width="760" height="634" fill="#fffdfa" stroke="#c9c9bd" strokeWidth="2" onClick={()=>setSelected(null)}/>
            <VenueLayer floorPlan={draft} editing selected={selected} onSelect={setSelected} onPointerDown={start}/>
            <g className="editor-seating-reference" pointerEvents="none" aria-label="Existing table positions">
              {tables.map(t=>{
                const count=guests.filter(g=>g.tableId===t.id).length;
                return <g key={t.id}>{t.number===18?<rect x={t.x-145} y={t.y-15} width="290" height="30" rx="7"/>:<circle cx={t.x} cy={t.y} r="29"/>}<text x={t.x} y={t.y-1} textAnchor="middle">{t.number===18?'Head table':t.number}</text><text x={t.x} y={t.y+11} textAnchor="middle" fontSize="7">{count}/{t.capacity}</text></g>;
              })}
            </g>
          </svg>
          <p className="fine-print">Tables are shown as a reference. Move tables from the seating plan.</p>
        </div>
        <div className="editor-controls">
          <label className="field-label">Add venue element<select value="" disabled={disabled||draft.elements.length>=60} onChange={e=>add(e.target.value)}><option value="">Choose an element…</option>{[['stage','Stage'],['dance','Dance floor'],['circle','Cake / small table'],['bar','Bar'],['lounge','Lounge'],['rectangle','Other element']].map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>
          <input ref={file} type="file" accept="image/png,image/jpeg,image/webp" onChange={upload} hidden />
          <button className="button secondary" disabled={disabled} onClick={()=>file.current.click()}>{uploading?'Preparing image…':draft.image?'Replace floor-plan image':'Upload floor-plan image'}</button>
          <p className="fine-print">PNG, JPEG, or WebP · up to 15 MB. Images are resized for the plan.</p>
          <label className="field-label">Select to edit<select value={selected||''} disabled={disabled} onChange={e=>setSelected(e.target.value||null)}><option value="">Select an element…</option>{draft.image&&<option value="image">Floor-plan image</option>}{draft.elements.map(e=><option key={e.id} value={e.id}>{e.label}</option>)}</select></label>
          {object?<fieldset disabled={disabled} className="element-fields"><legend>{selected==='image'?'Floor-plan image':'Selected element'}</legend>
            {selected!=='image'&&<label className="field-label">Label<input value={object.label} maxLength="120" onChange={e=>update(selected,{label:e.target.value})}/></label>}
            <div className="geometry-fields">{[['x','Left'],['y','Top'],['width','Width'],['height','Height']].map(([key,label])=><label key={key} className="field-label">{label}<input type="number" aria-label={label} min={key==='y'?36:20} max={key==='height'?634:key==='y'?650:760} step="1" value={Math.round(object[key])} onChange={e=>editGeometry(key,e.target.value)}/></label>)}</div>
            {selected==='image'&&<><p className="fine-print uploaded-image-name">{object.name}</p><label className="field-label">Image opacity<input type="range" min="0.1" max="1" step="0.05" value={object.opacity} onChange={e=>update('image',{opacity:Number(e.target.value)})}/></label></>}
            <button className="button danger" onClick={()=>{setDraft(p=>selected==='image'?{...p,image:null}:{...p,elements:p.elements.filter(e=>e.id!==selected)});setSelected(null)}}>Remove {selected==='image'?'image':'element'}</button>
          </fieldset>:<p className="fine-print">Select an element on the plan or from the list to change its position and size.</p>}
        </div>
      </div>
      <div className="modal-actions editor-actions"><button className="button secondary" disabled={saving} onClick={onClose}>Cancel</button><button className="button primary" disabled={disabled||draft.elements.some(e=>!e.label.trim())} onClick={save}>{saving?'Saving…':'Save floor plan'}</button></div>
    </Modal>;
  }
  return {GuestTablePicker,VenueLayer,FloorPlanEditor};
}
