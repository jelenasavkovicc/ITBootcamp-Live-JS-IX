let r = prompt('Унесите полупречник круга:')

// све провере и конверзије
if(r == null || r == ''){
    document.write('Нема вредности')
}
else{
    document.write(Number(r) ** 2 * Math.PI)
}
