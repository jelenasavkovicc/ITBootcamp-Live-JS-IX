// administrator,moderator,premium,vip,regular 

let user = 'regular'

// if(user == 'administrator'){
//     console.log('administrator')
// }
// else if(user == 'moderator'){
//     console.log('moderator')
// }
// else if(user == 'premium'){
//     console.log('premium')
// }


switch(user){
    case 'administrator': // user === 'administrator'
        console.log('administrator')
    case 'moderator':
        console.log('moderator')
    case 'premium':
        console.log('premium')
    case 'vip':
        console.log('vip')
    case 'regular':
        console.log('regular')
        break
    case 'nova_grupa':
        console.log('Нова')
        break
    default:
        console.log('нека грешка')
        break
}

let danUNedelji = 4

switch(danUNedelji){
    case 1:case 2:case 3:case 4:case 5: 
        console.log(false)
        break
    case 6:case 7:
        console.log(true)
        break
    default:
        console.log('мора између 1 и 7')
    
}
