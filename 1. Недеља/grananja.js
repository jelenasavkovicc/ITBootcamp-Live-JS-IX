// let number = 5

// if(number > 3){
//     console.log('Број је већи од 3')
// }
// else{
//     if(number == 3){
//         console.log('Број је 3')
//     }
//     else{
//         console.log('Број је мањи од 3')
//     }
// }

// if(number > 3){
//     console.log('>3')
//     var x = 5
// }
// else if(number == 3){
//     console.log('==3')
// }
// else if(number < 3){
//     console.log('<3')
// }

// console.log(x)


// Исписати мањи од два броја и сместити га у променљиву
{
    let a = 5
    let b = -3
    let min

    if(a < b){
        min = a
    }
    else{
        min = b
    }

    console.log(min)
}

// Одредити површину круга (водити рачуна о валидности података)
{
    let r = 2
    if(r <= 0){
        console.log('Грешка, r не сме бити мање од 0 или једнако 0')
    }
    else{
        let P = r ** 2 * Math.PI
        console.log(P)
    }
}

