function getElementWidth(content, padding, border) 
 {  const cont = parseFloat(content);
  const pad = parseFloat(padding);  const bord = parseFloat(border);
  return (cont + (2 * pad) + (2 * bord));}
;
  

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
