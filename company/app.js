$('div .catalog-card__details').each(function(){
  // let checker = '[data-virtuosotest~="advisorAffiliation"] '    
  // let test = $( "div span:first-child" ).innerHTML;
  let str = this.outerText.slice(0, -30);
  let arr = this.outerText.split(",");
  // console.log(arr[3])
  
  console.log(arr[0], arr[1]) 
  });
  