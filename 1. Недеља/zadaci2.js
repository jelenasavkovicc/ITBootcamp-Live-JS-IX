// 1) За унета 3 броја, исписати највећи / најмањи
{
    let a = 3
    let b = 5
    let c = -2

    let min, max
    if(a < b){
        min = a
    }
    else{
        min = b
    }
    if(c < min){
        min = c
    }

    console.log(min)
}
// 2) Написати програм који рачуна обиме курга, правоугаоника, троугла
//  ● Водити рачуна о исправности унетих података
//  ● Странице ни једне фигуре не смеју бити негативне
//  ● Збир сваке две странице троугла је већи од треће странице

{
    let a = 3
    let b = 4
    let c = -5

    let uslovTrougla = (a + b) > c && (a + c) > b && (b + c) > a

    if(a > 0 && b > 0 && c > 0 && uslovTrougla){
        let O = a + b + c
        console.log(O)
    }
    else{
        console.error('Грешка') // console.warn()
    }
    
}

