// Дате су странице правоугаоника – Исписати обим и површину
let a = 4.231
let b = 9

let P = a * b
console.log('Површина је:',P)

let O = a + a + b + b
console.log('Обим је:',O)

console.log('------------------------')

// Дате су цена производа и количина новца – Исписати кусур
let cena = 1416.13
let kolicinaNovca = 1243
let kusur = kolicinaNovca - cena
console.log('Кусур је',kusur)

console.log('------------------------')

// Извршити конверзију °C у °F - Формула - T(°F) = T(°C) × 1.8 + 32
let celsius = 32
let farenheit = 32 + celsius * 1.8

console.log('Темп у F: ',farenheit)
console.log('------------------------')

let farenheit2 = 89.6
let celsius2 = (farenheit2 - 32) / 1.8
console.log('Темп у C: ',celsius2)

console.log('------------------------')

// Дате су странице троугла – Исписати површину ( Math.sqrt() )
// s = O / 2
// sqrt(s * (s-x) * (s-y) * (s-z))
let x = 5
let y = 4
let z = 3

let s = (x + y + z) / 2

let Pt = Math.sqrt(s * (s - x) * (s - y) * (s - z))
console.log('Површина троугла је',Pt)
console.log('------------------------')

// Исписати насумичан број у интервалу од M до N (М и N су задате вредности)
let M = 5
let N = 10
console.log('Насумичан број',Math.random() * (N - M) +M)
