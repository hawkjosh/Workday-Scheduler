// Added current date display in 
let date = moment().format('dddd, MMMM Do');
$('#currentDay').text(date);

// Created variables for time in moment.js format and assigned to corresponding time-block in HTML
let hour9A = moment('09:00:00', 'hh:mm:ss').format('hA');
$('#hour-9am').text(hour9A);
let hour10A = moment('10:00:00', 'hh:mm:ss').format('hA');
$('#hour-10am').text(hour10A);
let hour11A = moment('11:00:00', 'hh:mm:ss').format('hA');
$('#hour-11am').text(hour11A);
let hour12P = moment('12:00:00', 'hh:mm:ss').format('hA');
$('#hour-12pm').text(hour12P);
let hour1P = moment('13:00:00', 'hh:mm:ss').format('hA');
$('#hour-1pm').text(hour1P);
let hour2P = moment('14:00:00', 'hh:mm:ss').format('hA');
$('#hour-2pm').text(hour2P);
let hour3P = moment('15:00:00', 'hh:mm:ss').format('hA');
$('#hour-3pm').text(hour3P);
let hour4P = moment('16:00:00', 'hh:mm:ss').format('hA');
$('#hour-4pm').text(hour4P);
let hour5P = moment('17:00:00', 'hh:mm:ss').format('hA');
$('#hour-5pm').text(hour5P);
