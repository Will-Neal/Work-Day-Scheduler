//Moment based time that keeps current time
$(document).ready(function(){
    updateTime()
    loadSaved()
    changeBoxColor()
})

function updateTime() {
    $("#currTime").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
};

var timer = setInterval(updateTime, 1000);




//function to write the data saved in local storage to the input areas
function loadSaved() {
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



//Add event listener to each button 
//Save text to local storage with each click - get value from textarea, then add key and save to local storage
//writing a function for each save button
$(".saveBtn9").click(function(){
    var textValue = $("#nine").val();
    localStorage.setItem("9", textValue)
})

$(".saveBtn10").click(function(){
    var textValue = $("#ten").val();
    localStorage.setItem("10", textValue)
})

$(".saveBtn11").click(function(){
    var textValue = $("#eleven").val();
    localStorage.setItem("11", textValue)
})

$(".saveBtn12").click(function(){
    var textValue = $("#twelve").val();
    localStorage.setItem("12", textValue)
})

$(".saveBtn13").click(function(){
    var textValue = $("#thirteen").val();
    localStorage.setItem("13", textValue)
})

$(".saveBtn14").click(function(){
    var textValue = $("#fourteen").val();
    localStorage.setItem("14", textValue)
})

$(".saveBtn15").click(function(){
    var textValue = $("#fifteen").val();
    localStorage.setItem("15", textValue)
})

$(".saveBtn16").click(function(){
    var textValue = $("#sixteen").val();
    localStorage.setItem("16", textValue)
})

$(".saveBtn17").click(function(){
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
    $("textarea").each(function () {
        var hourStr = (moment().format("H")) // use add function to test different times, 0 is the present
        var hour = Number(hourStr)
        calendarHourStr = this.dataset.timeslot;
        calendarHour = Number(calendarHourStr)
        console.log("calendarHour "+ typeof(calendarHour))
        if (calendarHour < hour) {
            $(this).addClass("past")
            $(this).css("text-decoration", "line-through")
            $(this).removeClass("future")
        }   else if (calendarHour === hour) {
            $(this).addClass("present");
        }   else {
           $(this).addClass("future")
        }
    })
}
