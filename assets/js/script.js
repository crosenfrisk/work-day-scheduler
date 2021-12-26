// Display current date on header
var today = new Date();
var date =  moment().format('dddd, MMMM Do, YYYY');
var time =  moment().format('LT');
document.getElementById("currentDay").innerHTML= date;
document.getElementById("currentTime").innerHTML=time;

// Var created to establish page load for currentTime() below
var main = document.querySelector('main');

// Array to hold time block data, store to local storage, and update color-coding dynamically.
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
    // Set var currentId to schedData time items
    var currentId = "#" + schedData[i].time;
    // Set currentEl to currentId in html, that way each div will update within for() loop below.
    var currentEl = document.querySelector(currentId);

        for (var i= 0; i < schedData.length; i++ ){
        // Cycle through each time block when page loads to check currentTime against time present in schedData item object.
        if (schedData[i].time < time){
        
        // Time block div and related content div next to it will be grey if in the past.
            currentEl.className += " past";        
        
        } else if (schedData[i].time === time){
        // Time block div and related content div next to it will be red if in the current hour.
            currentEl.className += " present";

        } else { 
        // Time block div and related content div next to it will be green if it has yet to pass.
            currentEl.className += " future";
        }
    }
}

// Get input from user for time block
var userInputEl = document.getElementById('textarea');

// Add userInput to localStorage
var savedItemEl = JSON.stringify(userInputEl);
localStorage.setItem("userInput", savedItemEl);

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