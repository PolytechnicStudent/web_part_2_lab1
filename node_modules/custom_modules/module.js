var passenger= require('./passenger');
const train   = require('./train');
const ticket  = require('./ticket');

exports.find_Train = train.find_Train;
exports.add_Train = train.add_Train ;
exports.remove_Train = train.remove_Train ;
exports.edit_Train  = train.edit_Train ;
exports.get_Train_List = train.get_Train_List;
exports.find_Train_with_the_most_tikets = train.find_Train_with_the_most_tikets;

exports.find_Passenger      = passenger.find_Passenger;
exports.add_Passenger       = passenger.add_Passenger;
exports.remove_Passenger    = passenger.remove_Passenger;
exports.edit_Passenger      = passenger.edit_Passenger;
exports.get_Passengers_List = passenger.get_Passengers_List;

exports.buy_Ticket      = ticket.buy_Ticket;
exports.cancel_Ticket       = ticket.cancel_Ticket;
exports.change_Ticket    = ticket.change_Ticket;
exports.find_Ticket      = ticket.find_Ticket;
exports.get_Ticket_List = ticket.get_Ticket_List;