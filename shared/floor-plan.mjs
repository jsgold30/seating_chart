export const defaultFloorPlan = () => ({
  revision: 0, image: null,
  elements: [
    {id:'stage',kind:'stage',label:'Stage',x:212,y:38,width:203,height:75},
    {id:'dance',kind:'dance',label:'Dance floor',x:210,y:113,width:206,height:265},
    {id:'challah',kind:'circle',label:'Challah table',x:434,y:184,width:22,height:22},
    {id:'cake',kind:'circle',label:'Cake table',x:504,y:555,width:22,height:22},
    {id:'bar',kind:'bar',label:'The bar',x:720,y:496,width:60,height:151},
    {id:'lounge-1',kind:'lounge',label:'Lounge',x:727,y:185,width:34,height:53},
    {id:'lounge-2',kind:'lounge',label:'Lounge',x:727,y:410,width:34,height:53},
  ],
});
