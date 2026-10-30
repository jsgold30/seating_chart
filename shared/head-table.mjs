// Five joined table sections, with the wider center open on its upper side.
// Chair numbers remain the existing persistent seat indices.
export function headTableGeometry(capacity) {
  const sections=[58,58,80,58,58].map((width,index)=>({index,width,x:0}));
  let x=-160;
  for(const section of sections){section.x=x;x+=section.width+2;}
  const topCount=Math.floor(capacity*3/7),bottomCount=capacity-topCount;
  const allocate=(count,indices,priority)=>{
    const result=Array(5).fill(0),base=Math.floor(count/indices.length);
    for(const index of indices)result[index]=base;
    for(let i=0;i<count-base*indices.length;i++)result[priority[i]]++;
    return result;
  };
  const top=allocate(topCount,[0,1,3,4],[0,4,1,3]);
  const bottom=allocate(bottomCount,[0,1,2,3,4],[2,0,4,1,3]);
  const chairs=[];
  for(const [side,counts] of [['top',top],['bottom',bottom]]){
    for(const section of sections){
      const count=counts[section.index],spacing=(section.width-8)/Math.max(1,count);
      for(let position=0;position<count;position++){
        const width=Math.min(14,spacing-2);
        chairs.push({index:chairs.length,section:section.index,side,
          x:section.x+4+spacing*(position+.5)-width/2,y:side==='top'?-33:18,width,height:15});
      }
    }
  }
  return {sections,chairs,topCount};
}
