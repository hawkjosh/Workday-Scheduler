// Added current date display in 
let date = moment().format('dddd, MMMM Do');
$('#currentDay').text(date);

let hour = document.querySelectorAll('.hour');
let timeBlock = document.querySelectorAll('.time-block');

// Set number value to each hour in schedule, and display on HTML
for (i=0; i<hour.length; i++) {
  hour[i].value = moment(i+9, 'h').hour();
  hour[i].innerHTML = moment(i+9, 'h').format('h A');
}

let currentTime = moment();

// Conditional to color code time-blocks based on relationship to current time
for (i=0; i<hour.length; i++) {
  if (hour[i].value > currentTime.hour()) {
    timeBlock[i].classList.add('future');
  } else if (hour[i].value == currentTime.hour()) {
    timeBlock[i].classList.add('present');
  } else {
    timeBlock[i].classList.add('past');
  }
}

// TODO → Seems to be saving but info disappears when page is refreshed...need to fix!
// Function to store time-block text input when user hits save button
function saveInput() {
  for (i=0; i<hour.length; i++) {
    localStorage.setItem('schedText', timeBlock[i].value);
    timeBlock[i].innerHTML = localStorage.getItem('schedText');
  }
}