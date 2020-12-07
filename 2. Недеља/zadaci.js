// 2) За дату годину исписати да ли је преступна или није
// ● Година је преступна ако је дељива са 4 И ако је испуњен један од следећих услова:
// ● Година није дељива са 100
// ● Година је дељива са 400
{
    let godina = 2100

    if(godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)){
        console.log('Година је преступна')
    }
    else{
        console.log('Није преступна')
    }
}

// 3) За троцифрени број испитати да ли је Армстронгов
// ● Број је Армстронгов ако је збир кубова цифара тог броја једнака самом броју
// ● Нпр. 153 = 1³ + 5³ + 3³
{
    let num = 370
    if((num + '').length != 3){
        console.log('GRESKA')
    }
    let cifraJ = num % 10
    let cifraD = Math.floor(num / 10) % 10
    let cifraS = Math.floor(num / 100) % 10

    // let cifraS2 = (num + '')[0]
    // let cifraD2 = (num + '')[1]
    // let cifraJ2 = (num + '')[2]
    // console.log(Number(cifraS2),cifraJ2,cifraD2)
    // console.log(cifraS,cifraJ,cifraD)
    
    console.log(
        (cifraJ ** 3 + cifraD ** 3 + cifraS ** 3) == num ? 
                'Јесте Армстронгов' : 
                'Није Армстронгов'
                )
}

{
    let godina = 2020
    let mesec = 14
    let prestupna = godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)
    
    switch(mesec){
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:
            console.log(31)
            break
        case 2:
            console.log(prestupna ? 29 : 28)
            break
        case 4:case 6:case 9:case 11:
            console.log(30)
            break
        default:
            console.log('Месец није валидан')
    }
}