function MDay(month,year){
    if(month == 'Січень' || month == "Травень"|| month == "Березень" || month == "Липень" || month == "Серпень"|| month == "Жовтень"){
        return 31
    }else if(month == 'Квітень' || month == 'Червень'|| month == 'Вересень'|| month == 'Листопад'|| month == 'Грудень'){
        return 30
    }else if(month == "Лютий" && year % 4 == 0 ){
        return 29}
    else if(month == "Лютий"){
        return 28}
}
let days =  MDay("Лютий", 2024)
console.log(days, MDay('Квітень', 2001));
