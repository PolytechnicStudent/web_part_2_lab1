const mod = require('custom_modules');

let T1 = mod.add_Train("A1042","Lviv",23);
let T2 = mod.add_Train("B1441","Dnipro",43);
let T3 =  mod.add_Train("A3241","Kyiv",53);

mod.get_Train_List();

console.log("Видалення поїзду за рейсом: B1441");
mod.remove_Train("B1441","Dnipro", 43);

mod.get_Train_List();

console.log("Зміна поїзда за рейсом: A3241");
mod.edit_Train("A3241","Kyiv", 53, "New Race", "New Destination", 65);

mod.get_Train_List();

let tra1 = mod.find_Train("A1042","Lviv",23);
console.log(`Пошук поїзда A1042: ${tra1 !== -1 ? "знайдено" : "не знайдено"}`);
let tra2 = mod.find_Train("A3241","Kyiv",53);
console.log(`Пошук поїзда A3241: ${tra2 !== -1 ? "знайдено" : "не знайдено"}`);

mod.add_Passenger("Богдан Козак", 18, T1);
mod.add_Passenger("Ярослав Луцик", 18, T1);
mod.add_Passenger("Воютицький Тарас", 25, T1);

mod.get_Passengers_List(T1);

console.log("Видалення пасажира: Воютицький Тарас");
mod.remove_Passenger("Воютицький Тарас", 25, T1);

mod.get_Passengers_List(T1);

console.log("Редагування пасажирів: Ярослав Луцик");
mod.edit_Passenger("Ярослав Луцик", 18, T1, "Володимир Дудка", 26);

mod.get_Passengers_List(T1);

let pass1 = mod.find_Passenger("Богдан Козак", 18, T1);
console.log(`Пошук пасажира - Богдан Козак: ${pass1 !== -1 ? "знайдено" : "не знайдено"}`);
let pass2 = mod.find_Passenger("Ярослав Луцик", 18, T1);
console.log(`Пошук пасажира - Ярослав Луцик: ${pass2 !== -1 ? "знайдено" : "не знайдено"}`);

console.log("Придбання квитків на поїзд");
mod.buy_Ticket("4325",T1,1200);
mod.buy_Ticket("4325",T1,1200);

mod.buy_Ticket("45325",T1,4500);
mod.buy_Ticket("436325",T1,2334);

mod.get_Ticket_List(T1);

console.log("Скасування покупки квитка під номером: 45325");
mod.cancel_Ticket("45325",T1,4500);

mod.get_Ticket_List(T1);

let tra3 =  mod.add_Train("A3241","Kyiv",63);

console.log(" Зміна квитка із одного потяга на інший");

mod.change_Ticket("4325",T1,    tra3,1200,2500);

mod.get_Ticket_List(T1);

mod.get_Ticket_List(tra3);

mod.buy_Ticket("4fh65",tra3,2990);
mod.buy_Ticket("7336325",tra3,6904);


let tic1 = mod.find_Ticket("7336325",tra3,6904);
console.log(`Пошук квитка - 7336325 у потязі ${tra3.name}: ${tic1 !== -1 ? "знайдено" : "не знайдено"}`);
let tic2 = mod.find_Ticket("4325",tra1,2500);
console.log(`Пошук квитка - 4325 у потязі ${tra1.name}: ${tic2 !== -1 ? "знайдено" : "не знайдено"}`);

console.log("Пошук потяга на який продали найбільше/найменше квитків");
let maxTicTrain = mod.find_Train_with_the_most_tikets();
mod.get_Ticket_List(maxTicTrain);