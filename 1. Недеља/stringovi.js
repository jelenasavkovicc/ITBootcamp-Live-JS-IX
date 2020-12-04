let str = 'I\'m a\' b\'roken\`" string'

let ulica = 'Nesto'
let broj = 5

let adresa = `     Улица: ${ulica}, број: ${broj}    `
let adresa2 = '    Улица:' + ulica + ', број:' + broj

console.log(adresa.toUpperCase().trim())
console.log(adresa2.trim().toLowerCase())
let proveri = 'nesto'.toLowerCase()
console.log(adresa.toLowerCase().includes(proveri))

