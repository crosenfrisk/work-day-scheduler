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

// Use querySelector to find and define div elements of time, content, and buttons
var dynamicListEl = document.querySelector("#dynamic-list");

// var timeDivEl = document.querySelector(".hour");
// var contentDivEl = document.querySelector(".textarea");
// var buttonEl = document.querySelector(".button");

// Dynamically create HTML <div> elements and <button>s from schedData[] array.
var createTimeDivEl = document.createElement("li");
var createContentDivEl = document.createElement("div");
var createButtonEl = document.createElement("button");
var createSaveIconEl =document.createElement("i");

// Function to create time blocks dynamically
var createTimeBlocks = function() {

    // For() to go through schedData[] array.
    for (var i = 0; i < schedData.length; i++ ){
        createTimeDivEl.textContent = schedData[i].time;
        createTimeDivEl.id = "hour";
        // createTimeDivEl.className ="col-sm-2 col-md-2 text-right col-lg-2";

        createContentDivEl.textContent = schedData[i].content;
        createContentDivEl.id = "textarea";
        // createContentDivEl.className = "col-sm-8 col-md-8 col-lg-8 justify-content-center";

        createButtonEl.textContent = schedData[i].button;
        createButtonEl.id = "saveBtn";
        // createButtonEl.className = "col-sm-2 col-md-2 col-lg-1";
        createSaveIconEl.className = "fas fa-save";
    }
    dynamicListEl.appendChild(createTimeDivEl);
    dynamicListEl.appendChild(createContentDivEl);
    dynamicListEl.appendChild(createButtonEl);
};

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