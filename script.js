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
var hours = document.querySelectorAll("#hr-9", "#hr-10", "#hr-11", "#hr-12", "#hr-13", "#hr-14", "#hr-15", "#hr-16", "#hr-17");
var timeBlock = $(".time-block");
var inputEl = document.querySelector(".description");
var textContent = $(".row textarea");
//look into .each

timeBlock.each(function () {

    //pull the ID and get just the number
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(timeBlockHour);

    if (timeBlockHour < compareTime) {
        $(this).removeClass('future', "present");
        $(this).addClass('past')
        console.log("past");

        //inputEl.classList.remove("present", "future");
    }
    else if (timeBlockHour > compareTime) {
        //inputEl.classList.remove("present", "past");
        //inputEl.classList.add("future");
        $(this).removeClass('past');
        $(this).addClass('future')
        console.log('future')
    } else {
        $(this).removeClass('past', "future");
        $(this).addClass('present')
        console.log('present')
    }

})

// function compareFunction(hours) {
//     //look for hour
//     //compare hour with compareTime
//     //depending on result, depends on class being set
//     console.log(hours);

//     }


// }
$(".saveBtn").on("click", function () {


    let hourBlock = $(this).parent().attr("id");
    let value = $(this).siblings('.description').val();




    console.log(hourBlock);
    console.log(value);
    localStorage.setItem(hourBlock, value);

});



// display event after refresh on page 


$(textContent).each(function () {

    var hour = $(this).parent().attr("id");

    var description = localStorage.getItem(hour);
    $(this).val(description);


})

