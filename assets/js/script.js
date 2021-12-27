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

// Create function for saved user input in textarea
var saveUserInput = function (event) {
  // entered event persists after navigating away from page click on icon save button.
  event.preventDefault();
  console.log('event target: ', event.target.id);

  var textareaId = "#hour" + event.target.id.replace("saveBtn", "");
  console.log("hour", textareaId);
  var savedContentEl = document.querySelector(textareaId);
  console.log('saved content:' , savedContentEl.value);


  //savedContentEl.textContent = "";
  //savedContentEl.appendChild(savedItemEl);

  // Add userInput to localStorage
var savedItemEl = JSON.stringify(savedContentEl.value);
  localStorage.setItem("userInput", savedItemEl);
}

// Display userInput (ongoing)
var displayInput =  function() {
  var text = "";

 // Retrieves items from local storage
 var savedItem = localStorage.getItem("userInput");
console.log('saved item: ',savedItem);
// Parse string into object
var savedItemsArray = JSON.parse(savedItem);
//      for (var i=0; i < savedItemEl.length; i++) {
// return savedItem;
// }
}

// on page load current day displays
main.addEventListener("onload", currentTime());
main.addEventListener("onload", displayInput());

var savedContentEl9 = document.querySelector("#saveBtn9");
var savedContentEl10 = document.querySelector("#saveBtn10");
var savedContentEl11 = document.querySelector("#saveBtn11");
var savedContentEl12 = document.querySelector("#saveBtn12");
var savedContentEl13 = document.querySelector("#saveBtn13");
var savedContentEl14 = document.querySelector("#saveBtn14");
var savedContentEl15 = document.querySelector("#saveBtn15");
var savedContentEl16 = document.querySelector("#saveBtn16");
var savedContentEl17 = document.querySelector("#saveBtn17");

// text content is saved in local storage by clicking save button directly.
savedContentEl9.addEventListener("click", saveUserInput);
savedContentEl10.addEventListener("click", saveUserInput);
savedContentEl11.addEventListener("click", saveUserInput);
savedContentEl12.addEventListener("click", saveUserInput);
savedContentEl13.addEventListener("click", saveUserInput);
savedContentEl14.addEventListener("click", saveUserInput);
savedContentEl15.addEventListener("click", saveUserInput);
savedContentEl16.addEventListener("click", saveUserInput);
savedContentEl17.addEventListener("click", saveUserInput);
