// Display current date on header
var today = new Date();
var date =  moment().format('dddd, MMMM Do, YYYY');
document.getElementById("currentDay").innerHTML= date;

// Create main section with hour blocks dynamically
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

// Do I need to use querySelector to find and define ids of time, content, and buttons?
var dynamicListEl = document.querySelector('#dynamic-list');

// Dynamically create HTML <div> elements and <button>s from schedData[i].
var timeDivEl = document.createElement('div');
var contentDivEl = document.createElement('div');
var buttonEl = document.createElement('button');

var createTimeBlocks = function() {
    for (var i = 0; i < schedData.length; i++ ){
        // timeDivEl.textContent = schedData[i].time;
        // timeDivEl.id = "hour";

        contentDivEl.textContent = schedData[i].content;
        contentDivEl.id = "textarea";

        // buttonEl.textContent = schedData[i].button;
        // buttonEl.id = "saveBtn";
    }
    // dynamicListEl.appendChild(timeDivEl, contentDivEl, buttonEl);
};

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




dynamicListEl.addEventListener('onload', createTimeBlocks());
// userInputEl.addEventListener("click", createTask);