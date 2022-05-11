//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//Use moments to have time display at top of page
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);
console.log(currentDay);

//make business hour time blocks

//timeblack is color coded to indicate past,present, future

var compareTime = moment().hour();
console.log(compareTime);
//look into .each
function forEach() {
    //look for hour

    //compare hour with compareTime
    //depending on result, depends on class being set
}
