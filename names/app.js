var names = document.getElementsByClassName("catalog-card__title");



for(var i = 0; i < names.length; i++) {
  let arr = [] 
  console.log(names[i].outerText);
  arr.push(names[i].outerText);
  return arr
}

