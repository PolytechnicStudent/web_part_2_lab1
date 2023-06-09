class Passenger { //7
    constructor (name, numberPassport) {
        this.name = name;
        this.numberPassport = numberPassport;
       
        if (typeof name === 'undefined') { this.name = "Невідомий пасажир"; }
        }


     }

   
    function find_Passenger (name, numberPassport, train) {
        for (let id = 0; id < train.passenger_list.length; id++) {

            let passenger = train.passenger_list[id];
            if (name === passenger.name && numberPassport === passenger.numberPassport) { return passenger; }

        }

          return -1;
    }

   
    function add_Passenger (name, numberPassport, train) {

        let passenger = new Passenger(name, numberPassport);
        train.passenger_list.push(passenger);

        return passenger;

    }

    function remove_Passenger (name, numberPassport, train) {

        let passenger = find_Passenger(name, numberPassport,train);

        if (passenger === -1) { return -1; }

        let id = train.passenger_list.indexOf(passenger);
        train.passenger_list.splice(id, 1);

        return 1;

        }



    function edit_Passenger (name, numberPassport,train, new_name, new_numberPassport) {

            let Passenger = find_Passenger(name, numberPassport, train);
        
            if (Passenger === -1) { return -1; }
        
            let id = train.passenger_list.indexOf(Passenger);
            
            train.passenger_list[id].name = new_name;
            train.passenger_list[id].numberPassport = new_numberPassport;
        
            return 1;
        
    }
    
    function get_Passengers_List (train) {

        console.log("\n" + `Список усіх пасажирів у потязі ${train.name}:`);
    
        for (let id = 0; id < train.passenger_list.length; id++) {
    
            let passenger = train.passenger_list[id];
            console.log(`\tІм'я пасажира: ${passenger.name}, номер паспорту: ${passenger.numberPassport}`);
    
        }
        
        console.log();
        
        return train.passenger_list;
    
    }

    exports.find_Passenger      = find_Passenger;
    exports.add_Passenger       = add_Passenger;
    exports.remove_Passenger    = remove_Passenger;
    exports.edit_Passenger      = edit_Passenger;
    exports.get_Passengers_List = get_Passengers_List;
