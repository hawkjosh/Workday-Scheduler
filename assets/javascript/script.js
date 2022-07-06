// Added current date display in 
let date = moment().format('dddd, MMMM Do');
$('#currentDay').text(date);

let hour = document.querySelectorAll('.hour');
let timeBlock = document.querySelectorAll('.time-block');

console.log(hour[0].innerHTML);

for (i=0; i<hour.length; i++) {
  hour[i].textContent = moment(i+9, 'h').format('h A');
}

let currentTime = moment();

// TODO → Something is not right below...all time-block elements are showing up as future regardless of the set time in that block
for (i=0; i<hour.length; i++) {
  if (hour[i] < currentTime) {
    timeBlock[i].classList.add('past');
  } else if (hour[i] == currentTime) {
    timeBlock[i].classList.add('present');
  } else {
    timeBlock[i].classList.add('future');
  }
}