// console.log("Linked")


//Moment based time that keeps current time
$(document).ready(function(){
    updateTime()
    loadSaved()
    changeBoxColor()
    // console.log("the ready function is running")
})

function updateTime() {
    $("#currTime").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    // console.log("the updatetime function is running")
};

var timer = setInterval(updateTime, 1000);




//function to write the data saved in local storage to the input areas
function loadSaved() {
    // $("#nine").text(localStorage.getItem("9"))
    // document.querySelector("#ten").textContent = "TEST"
    $("#nine").text(localStorage.getItem("9"))
    $("#ten").text(localStorage.getItem("10"))
    $("#eleven").text(localStorage.getItem("11"))
    $("#twelve").text(localStorage.getItem("12"))
    $("#thirteen").text(localStorage.getItem("13"))
    $("#fourteen").text(localStorage.getItem("14"))
    $("#fifteen").text(localStorage.getItem("15"))
    $("#sixteen").text(localStorage.getItem("16"))
    $("#seventeen").text(localStorage.getItem("17"))
}

// loadSaved()


//Add event listener to each button 
//Save text to local storage with each click - get value from textarea, then add key and save to local storage
//writing a function for each save button
$(".saveBtn9").click(function(){
    // alert("you clicked the 9am save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#nine").val();
    localStorage.setItem("9", textValue)
})

$(".saveBtn10").click(function(){
    // alert("you clicked the 10am save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#ten").val();
    localStorage.setItem("10", textValue)
})

$(".saveBtn11").click(function(){
    // alert("you clicked the 11am save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#eleven").val();
    localStorage.setItem("11", textValue)
})

$(".saveBtn12").click(function(){
    // alert("you clicked the 12pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#twelve").val();
    localStorage.setItem("12", textValue)
})

$(".saveBtn13").click(function(){
    // alert("you clicked the 1pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#thirteen").val();
    localStorage.setItem("13", textValue)
})

$(".saveBtn14").click(function(){
    // alert("you clicked the 2pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#fourteen").val();
    localStorage.setItem("14", textValue)
})

$(".saveBtn15").click(function(){
    // alert("you clicked the 3pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#fifteen").val();
    localStorage.setItem("15", textValue)
})

$(".saveBtn16").click(function(){
    // alert("you clicked the 4pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#sixteen").val();
    localStorage.setItem("16", textValue)
})

$(".saveBtn17").click(function(){
    // alert("you clicked the 5pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#seventeen").val();
    localStorage.setItem("17", textValue)
})

//Button to clear localStorage
$("#clearBtn").click(function(){
    localStorage.clear()
    location.reload()
})


//Change box color

function changeBoxColor() {
// var hour = (moment().format("H"));
// var hour = 9    
// console.log(hour)    
    $("textarea").each(function () {
        // console.log(this)
        // console.log(this.dataset.timeslot)
        var hourStr = (moment().add(0, "hours").format("H")) // use add function to test different times, 0 is the present
        var hour = Number(hourStr)
        // console.log(hour)
        // var hour = 12
        console.log("hour " + typeof(hour))
        calendarHourStr = this.dataset.timeslot;
        calendarHour = Number(calendarHourStr)
        // calenderHourString = calendarHour.toString()
        console.log("calendarHour "+ typeof(calendarHour))
        if (calendarHour < hour) {
            // console.log(calendarHour)
            // console.log(hour)
            $(this).addClass("past")
            $(this).removeClass("future")
        }   else if (calendarHour === hour) {
            // console.log(calendarHour)
            // console.log(hour)
            $(this).addClass("present");
        }   else {
           $(this).addClass("future")
        }
    })
}

// changeBoxColor()