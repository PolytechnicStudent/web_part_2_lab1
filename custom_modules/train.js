// Клас - потяг
class Train { //7
    constructor (name, destination, number) {
        this.name = name;
        this.destination = destination;
        this.number = number;
        this.passenger_list = [];
        this.tickets_list = [];
        if (typeof name === 'undefined')    { this.name = "Невідомий потяг"; }
        if (typeof address === 'undefined') { this.address = "Невідоме призначення"; }
    }
}
// Список усіх потягів
let global_trains_list = new Array();

function find_Train (name, destination, number) {

    for (let train of global_trains_list) {

        if (name === train.name &&
            destination === train.destination &&
            number === train.number) { return train; }

    }

    return -1;

}

function add_Train (name, destination, number) {

    let train = new Train(name, destination, number);
    global_trains_list.push(train);

    return train;

}
function remove_Train (name, destination,number) {

    for (let id = 0; id < global_trains_list.length; id++) {

        let train = global_trains_list[id];

        if (train.name === name &&
            train.destination === destination 
            && train.number === number
            ) { global_trains_list.splice(id, 1); return 1; }

    }

    return -1;

}
function edit_Train (name, destination, number, new_name, new_destination, new_number) {

    for (let id = 0; id < global_trains_list.length; id++) {

        let train = global_trains_list[id];

        if (train.name === name &&
            train.destination === destination, train.number === number) { global_trains_list[id].name = new_name;
                                            global_trains_list[id].destination = new_destination;
                                            global_trains_list[id].number = new_number;
                                            return 1; }

    }
    return -1;

}

function get_Train_List() {

    console.log("\n" + "Список усіх потягів:");

    for (let id = 0; id < global_trains_list.length; id++) {

        let train = global_trains_list[id];
        console.log(`Назва потягу: ${train.name}, призначення потягу: ${train.destination}, номер потяга: ${train.number}`);

    }

    console.log();
    
    return global_trains_list;

}

function find_Train_with_the_most_tikets(){

    let maxTicket = global_trains_list[0].tickets_list.length

    let maxTrain = global_trains_list[0];

    for (let id = 1; id < global_trains_list.length; id++) {

        let train = global_trains_list[id];

        if(train.tickets_list.length > maxTicket){

            maxTicket = train.tickets_list.length;

            maxTrain = train;
        }
    }
    return maxTrain;
}



exports.find_Train      = find_Train;
exports.add_Train        = add_Train ;
exports.remove_Train     = remove_Train ;
exports.edit_Train       = edit_Train ;
exports.get_Train_List = get_Train_List;
exports.find_Train_with_the_most_tikets = find_Train_with_the_most_tikets;

