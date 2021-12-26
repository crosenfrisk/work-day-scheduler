// Display current date on header
var today = new Date();
var date =  moment().format('dddd, MMMM Do, YYYY');
var time =  moment().format('LT');
document.getElementById("currentDay").innerHTML= date;
document.getElementById("currentTime").innerHTML=time;

// Array to hold time block data, store to local storage, and update dynamically.
var schedData = [
    {
        time: '9:00 A.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '10:00 A.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '11:00 A.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '12:00 P.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '1:00 P.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '2:00 P.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '3:00 P.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '4:00 P.M.',
        content: ' ',
        button: 'saveBtn',
    },
    {
        time: '5:00 P.M.',
        content: ' ',
        button: 'saveBtn',
    },
];

var currentTime = function () {
        for (var i= 0; i < schedData.length; i++ ){
            
        if (schedData[i].time < time){
            
            schedData[i].time.className="past";
        } else if (schedData[i].time === time){
      
            schedData[i].time.className="present";
        } else { 
  
            schedData[i].time.className="future";
        }
    }
}

// var main = document.querySelector('main');

// var hour9El = document.querySelector('#hour9');
// hour9El.className += " past";
// hour9El.className += " present";
// hour9El.className += " future";

// var textarea1El = document.querySelector('#textarea1');
// textarea1El.className += " past";
// textarea1El.className += " present";
// textarea1El.className += " future";


// Do I need to use querySelector to find and define ids of time, content, and buttons?
// var dynamicListEl = document.querySelector('#dynamic-list');

// // Dynamically create HTML <div> elements and <button>s from schedData[i].
// var timeDivEl = document.createElement('div');
// var contentDivEl = document.createElement('div');
// var buttonEl = document.createElement('button');

// var createTimeBlocks = function() {
//     for (var i = 0; i < schedData.length; i++ ){
//         timeDivEl.textContent = schedData[i].time;
//         timeDivEl.id = "hour";

//         contentDivEl.textContent = schedData[i].content;
//         contentDivEl.id = "textarea";

//         buttonEl.textContent = schedData[i].button;
//         buttonEl.id = "saveBtn";
//     }
//     dynamicListEl.append(timeDivEl, contentDivEl, buttonEl);
// };

// createTimeBlocks();

// Get input from user for time block
//var userInputEl = document.getElementById('textarea');

// Add userInput to localStorage
// var savedItem = JSON.stringify(userInput);
// localStorage.setItem("userInput", savedItem);

// var savedItem = createElement('textarea');
// document.getElementById('textarea').addEventListener("click", modifyInput );
// function modifyInput(){};

// Display userInput (ongoing)
// var displayInput =  function() {
    //  var text = " ";

    //  Retrieves items from local storage
    //  var savedItem = localStorage.getItem("savedItem");

    //  Parse string into object
    // var savedItemsArray = JSON.parse(savedItem);
    //      for (var i=0; i < savedItem.length; i++) {

    // }


main.addEventListener('onload', currentTime());
//dynamicListEl.addEventListener('onload', createTimeBlocks());
// userInputEl.addEventListener("click", createTask);