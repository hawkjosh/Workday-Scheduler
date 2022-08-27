// Added current date display in
let date = moment().format('dddd, MMMM Do');
$('#currentDay').text(date);

let hour = document.querySelectorAll('.hour');
let timeBlock = document.querySelectorAll('.time-block');
let saveBtn = document.querySelectorAll('.save-btn');

// Set number value to each hour in schedule, and display on HTML
for (i=0; i<hour.length; i++) {
  hour[i].value = moment(i+9, 'h').hour();
  hour[i].innerHTML = moment(i+9, 'h').format('h A');
}

let currentTime = moment('13:23', 'hh:mm');

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

// Function to save text input for 9am timeBlock to local storage
function storeInput1() {
  localStorage.setItem('hr9Input', JSON.stringify(timeBlock[0].value));
  document.getElementById('hr9btn').textContent = "✅";
}

// Function to save text input for 10am timeBlock to local storage
function storeInput2() {
  localStorage.setItem('hr10Input', JSON.stringify(timeBlock[1].value));
  document.getElementById('hr10btn').textContent = "✅";
}

// Function to save text input for 11am timeBlock to local storage
function storeInput3() {
  localStorage.setItem('hr11Input', JSON.stringify(timeBlock[2].value));
  document.getElementById('hr11btn').textContent = "✅";
}

// Function to save text input for 12pm timeBlock to local storage
function storeInput4() {
  localStorage.setItem('hr12Input', JSON.stringify(timeBlock[3].value));
  document.getElementById('hr12btn').textContent = "✅";
}

// Function to save text input for 1pm timeBlock to local storage
function storeInput5() {
  localStorage.setItem('hr1Input', JSON.stringify(timeBlock[4].value));
  document.getElementById('hr1btn').textContent = "✅";
}

// Function to save text input for 2pm timeBlock to local storage
function storeInput6() {
  localStorage.setItem('hr2Input', JSON.stringify(timeBlock[5].value));
  document.getElementById('hr2btn').textContent = "✅";
}

// Function to save text input for 3pm timeBlock to local storage
function storeInput7() {
  localStorage.setItem('hr3Input', JSON.stringify(timeBlock[6].value));
  document.getElementById('hr3btn').textContent = "✅";
}

// Function to save text input for 4pm timeBlock to local storage
function storeInput8() {
  localStorage.setItem('hr4Input', JSON.stringify(timeBlock[7].value));
  document.getElementById('hr4btn').textContent = "✅";
}

// Function to save text input for 5pm timeBlock to local storage
function storeInput9() {
  localStorage.setItem('hr5Input', JSON.stringify(timeBlock[8].value));
  document.getElementById('hr5btn').textContent = "✅";
}

// Function to display text input for 9am timeBlock from local storage
function writeInput1() {
  let hr9Display = JSON.parse(localStorage.getItem('hr9Input'));
  if (hr9Display !== null) {
    timeBlock[0].value = hr9Display;
  }
}

// Function to display text input for 10am timeBlock from local storage
function writeInput2() {
  let hr10Display = JSON.parse(localStorage.getItem('hr10Input'));
  if (hr10Display !== null) {
    timeBlock[1].value = hr10Display;
  }
}

// Function to display text input for 11am timeBlock from local storage
function writeInput3() {
  let hr11Display = JSON.parse(localStorage.getItem('hr11Input'));
  if (hr11Display !== null) {
    timeBlock[2].value = hr11Display;
  }
}

// Function to display text input for 12pm timeBlock from local storage
function writeInput4() {
  let hr12Display = JSON.parse(localStorage.getItem('hr12Input'));
  if (hr12Display !== null) {
    timeBlock[3].value = hr12Display;
  }
}

// Function to display text input for 1pm timeBlock from local storage
function writeInput5() {
  let hr1Display = JSON.parse(localStorage.getItem('hr1Input'));
  if (hr1Display !== null) {
    timeBlock[4].value = hr1Display;
  }
}

// Function to display text input for 2pm timeBlock from local storage
function writeInput6() {
  let hr2Display = JSON.parse(localStorage.getItem('hr2Input'));
  if (hr2Display !== null) {
    timeBlock[5].value = hr2Display;
  }
}

// Function to display text input for 3pm timeBlock from local storage
function writeInput7() {
  let hr3Display = JSON.parse(localStorage.getItem('hr3Input'));
  if (hr3Display !== null) {
    timeBlock[6].value = hr3Display;
  }
}

// Function to display text input for 4pm timeBlock from local storage
function writeInput8() {
  let hr4Display = JSON.parse(localStorage.getItem('hr4Input'));
  if (hr4Display !== null) {
    timeBlock[7].value = hr4Display;
  }
}

// Function to display text input for 5pm timeBlock from local storage
function writeInput9() {
  let hr5Display = JSON.parse(localStorage.getItem('hr5Input'));
  if (hr5Display !== null) {
    timeBlock[8].value = hr5Display;
  }
}

writeInput1();
writeInput2();
writeInput3();
writeInput4();
writeInput5();
writeInput6();
writeInput7();
writeInput8();
writeInput9();