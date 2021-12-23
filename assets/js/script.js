var today = new Date();
// // current date
var date =  moment().format('dddd, MMMM Do');
document.getElementById("currentDay").innerHTML= date;

var userInputEl = document.getElementsByClassName('time-block-content');

// var savedItem = createElement('#time-block-content');

var createTask = function () {
    console.log('hello!');
}




// moment().format('LL');
// console.log(moment.format);


// Which hours would you like your day to display? This will be your default setting!
// var hours = createItemEl('hour');

// USER STORY:
// As an employee with a busy schedule
// I want to add important events to a daily planner
// so that I can manage my time effectively.

// ACCEPTANCE CRITERIA:
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calender

// WHEN I scroll down
// THEN I am presented with time blocks for THAT day.

// THEN each time block is color-coded to indicate whether it is in the past, present, or future.

// WHEN I click into a time block, then I can enter an event

// WHEN I click save button for that time block
// THEN the text for that event is saved in local storage.

// WHEN I refresh the page
// THEN the saved event persists.

// userInputEl.addEventListener("click", createTask);