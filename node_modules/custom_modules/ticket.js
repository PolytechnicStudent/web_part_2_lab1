class Ticket{
    constructor(number, price){
        this.number = number;
        this.price = price;
    
    if (typeof number === 'undefined'){ this.number = "Невідомий номер"; }
   
    }
}
function buy_Ticket (number, train, price) {
    let ticket = find_Ticket(number,train,price);
    if(ticket !== -1){
        console.log("Неможливо придбати квиток, оскільки він вже був проданий");
        return -1;
    }else{
        ticket = new Ticket(number, price);
        train.tickets_list.push(ticket);
        return ticket;
    }
}
function find_Ticket (number, train, price) {
    for (let id = 0; id < train.tickets_list.length; id++) {

        let ticket = train.tickets_list[id];
        if (number === ticket.number && price === ticket.price) { return ticket; }

    }

      return -1;
}
function cancel_Ticket (number, train, price) {

    let ticket = find_Ticket(number, train, price);

    if (ticket === -1) { return -1; }

    let id = train.tickets_list.indexOf(ticket);
    train.tickets_list.splice(id, 1);

    return 1;

    }

    function change_Ticket  (number, train, new_train, price , new_price) {
        cancel_Ticket(number,train, price);

        buy_Ticket(number,new_train,new_price);

        return 1;
    
}

function get_Ticket_List (train) {

    console.log("\n" + `Список усіх придбаних квитків у потязі ${train.name}:`);

    for (let id = 0; id < train.tickets_list.length; id++) {

        let ticket = train.tickets_list[id];
        console.log(`\tНомер квитка: ${ticket.number}, ціна: ${ticket.price}`);

    }

    console.log();
    
    return train.ticket_list;

}

exports.buy_Ticket      = buy_Ticket;
exports.cancel_Ticket       = cancel_Ticket;
exports.change_Ticket    = change_Ticket;
exports.find_Ticket      = find_Ticket;
exports.get_Ticket_List = get_Ticket_List;

