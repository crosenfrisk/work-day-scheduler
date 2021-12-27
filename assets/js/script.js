// Display current date on header
var today = new Date();
var date = moment().format("dddd, MMMM Do, YYYY");
document.getElementById("currentDay").innerHTML = date;

// Var created to establish page load for currentTime() below
var main = document.querySelector("main");

// Array to hold time block data, store to local storage, and update color-coding dynamically.
var schedData = [
  {
    time: "9:00 A.M.",
    timeClock: 9,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "10:00 A.M.",
    timeClock: 10,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "11:00 A.M.",
    timeClock: 11,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "12:00 P.M.",
    timeClock: 12,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "1:00 P.M.",
    timeClock: 13,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "2:00 P.M.",
    timeClock: 14,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "3:00 P.M.",
    timeClock: 15,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "4:00 P.M.",
    timeClock: 16,
    content: " ",
    button: "saveBtn",
  },
  {
    time: "5:00 P.M.",
    timeClock: 17,
    content: " ",
    button: "saveBtn",
  },
];

var currentTime = function () {
  // Set current time for reference
  var timeNow = today.getHours(24);
 // console.log("time now: ", timeNow);

  for (var i = 0; i < schedData.length; i++) {
    // Set var currentId to schedData time items
    var currentId = "#hour" + schedData[i].timeClock;
   // console.log(currentId)

    // Set currentEl to currentId in html, that way each div will update within for() loop below.
    var currentEl = document.querySelector(currentId);

    // Cycle through each time block when page loads to check currentTime against time present in schedData item object.
    // console.log('i: ', i)
    // console.log('time clock: ', schedData[i].timeClock)
    // console.log('time now: ', timeNow)

    if (schedData[i].timeClock < timeNow) {
       // console.log('past')
      // Time block div and related content div next to it will be grey if in the past.
      currentEl.className += " past";
    } else if (schedData[i].timeClock === timeNow) {
      // Time block div and related content div next to it will be red if in the current hour.
      // console.log('present')
      currentEl.className += " present";
    } else {
       // console.log('future')
      // Time block div and related content div next to it will be green if it has yet to pass.
      currentEl.className += " future";
    }
  }
};

// TODO: WHEN I click into a time block, then I can enter an event

// TODO: WHEN I click save button for that time block
// THEN the text for that event is saved in local storage.

// TODO: WHEN I refresh the page
// THEN the saved event persists.

// Create function for saved user input in textarea
var saveUserInput = function (event) {
  event.preventDefault();

  // var savedItemEl = document.querySelector('textarea').value;
  var savedContentEl = document.querySelector("textarea").value;

  savedItemEl.className = "textarea";
  savedItemEl.textContent = "";
  savedContentEl.appendChild(savedItemEl);

  // Get input from user for time block
  var userInputEl = document.getElementById("textarea");

  // Add userInput to localStorage
  var savedItemEl = JSON.stringify(userInputEl);
  localStorage.setItem("userInput", savedItemEl);

  // if (userInputEl === null) {
  //     return
  // }
};

// Display userInput (ongoing)
// var displayInput =  function() {
//  var text = " ";

//  Retrieves items from local storage
//  var savedItem = localStorage.getItem("savedItem");

//  Parse string into object
// var savedItemsArray = JSON.parse(savedItem);
//      for (var i=0; i < savedItem.length; i++) {

// }

main.addEventListener("onload", currentTime());
//userInputEl.addEventListener("submit", saveUserInput);



