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

// 3) На основу дана у недељи (задат бројем од 1 до 7) написати да ли је викенд
// ● Ако се зада број 6 или 7 исписати true (субота,недеља)
// ● У супротном исписати false
{
    let danUNedelji = 6
    if(danUNedelji == 6 || danUNedelji == 7){
        console.log(true)
    }
    else if(danUNedelji > 0 && danUNedelji < 6){
        console.log(false)
    }
    else{
        console.log('Грешка - број не сме бити мањи од 1 и већи од 7')
    }
}

// 4) На основу количине и цене артикла, исписати укупну цену
// ● Количина је задата у грамима
// ● Цена је задата по килограму
// 5) Допунити 4. задатак количином новца, и исписати рачун 
// (ако нема довољно новца, исписати поруку)
{
    let kolicina = 250 // g
    let cenaPoKg = 1232.86 // cena/kg
    let novac = 200

    let ukupnaCena = (kolicina / 1000) * cenaPoKg
    console.log('Цена',ukupnaCena)

    if(ukupnaCena > novac){
        console.log('Немате довољно средстава')
    }
    else{
        console.log('Кусур је',novac - ukupnaCena)
    }
}




