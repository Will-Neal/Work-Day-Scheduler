// console.log("Linked")


//Moment based time that keeps current time
$(document).ready(function(){
    updateTime()
    // console.log("the ready function is running")
})

function updateTime() {
    $("#currTime").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    // console.log("the updatetime function is running")
};

var timer = setInterval(updateTime, 1000);



//each to iterate and this to not use DOM againS

//Save text to local storage

//Change box color

function changeBoxColor() {
// var hour = (moment().format("H"));
// var hour = 9    
// console.log(hour)    
    $("input").each(function () {
        // console.log(this)
        // console.log(this.dataset.timeslot)
        var hour = (moment().format("H"))
        // console.log(hour)
        calendarHour = this.dataset.timeslot;
        // console.log(calendarHour)
        if (calendarHour < hour) {
            // console.log(calendarHour)
            // console.log(hour)
            $(this).addClass("past")
        }   else if (calendarHour == hour) {
            console.log(calendarHour)
            console.log(hour)
            $(this).addClass("present");
        }   else {
           $(this).addClass("future")
        }
    })
}

changeBoxColor()