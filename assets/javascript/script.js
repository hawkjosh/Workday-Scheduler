// Added current date display in 
let date = moment().format('dddd, MMMM Do');
$('#currentDay').text(date);

// Added timeblocks for standard business hours
let schedule = $('.container');
schedule.css('display', 'flex');
schedule.css('flex-direction', 'column')

// Created array of standard business hours
let hours = [
  '9AM  ',
  '10AM',
  '11AM',
  '12PM',
  '1PM ',
  '2PM ',
  '3PM ',
  '4PM ',
  '5PM ',
]

//Added <div> of labled row for each hour including input area for text and button to save
for (i = 0; i < hours.length; i++) {
  let hourLabel = $('<div>');
  let hourInfo = $('<input>');
  let saveBtn = $('<button>');
  hourLabel.text(hours[i]);
  hourLabel.addClass('hour row');
  hourLabel.css('flex-direction', 'row')
  hourLabel.css('justify-content', 'space-between');
  hourInfo.addClass('time-block row');
  hourInfo.css('text-align', 'left');
  hourInfo.css('padding-left', '10px');
  hourInfo.css('width', '80%')
  hourInfo.css('align-self', 'flex-start');
  saveBtn.text('Save');
  saveBtn.addClass('time-block saveBtn');
  saveBtn.css('align-self', 'stretch');
  saveBtn.css('width', '10%');
  schedule.append(hourLabel);
  hourLabel.append(hourInfo);
  hourLabel.append(saveBtn);
}