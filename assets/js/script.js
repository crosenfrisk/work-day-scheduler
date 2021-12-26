var today = new Date();
// // current date
var date =  moment().format('dddd, MMMM Do, YYYY');
document.getElementById("currentDay").innerHTML= date;

// Create main section with hour blocks dynamically

// Get input from user for time block
var userInputEl = document.getElementById('textarea');

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





// userInputEl.addEventListener("click", createTask);