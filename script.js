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



//each to iterate and this to not use DOM again and again


//Add event listener to each button 
//Save text to local storage with each click - get value from textarea, then add key and save to local storage
// $(".saveBtn").click(function(){
//     alert("you clicked a save button")
//     console.log($(this))


// })
//writing a function for each save button
$(".saveBtn9").click(function(){
    alert("you clicked the 9am save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#nine").val();
    localStorage.setItem("9", textValue)
})

$(".saveBtn10").click(function(){
    alert("you clicked the 10am save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#ten").val();
    localStorage.setItem("10", textValue)
})

$(".saveBtn11").click(function(){
    alert("you clicked the 11am save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#eleven").val();
    localStorage.setItem("11", textValue)
})

$(".saveBtn12").click(function(){
    alert("you clicked the 12pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#twelve").val();
    localStorage.setItem("12", textValue)
})

$(".saveBtn13").click(function(){
    alert("you clicked the 1pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#thirteen").val();
    localStorage.setItem("13", textValue)
})

$(".saveBtn14").click(function(){
    alert("you clicked the 2pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#fourteen").val();
    localStorage.setItem("14", textValue)
})

$(".saveBtn15").click(function(){
    alert("you clicked the 3pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#fifteen").val();
    localStorage.setItem("15", textValue)
})

$(".saveBtn16").click(function(){
    alert("you clicked the 4pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#sixteen").val();
    localStorage.setItem("16", textValue)
})

$(".saveBtn17").click(function(){
    alert("you clicked the 5pm save button")
    // var hourKey = $(".hour9").val(); don't need because this is hardcoded to 9
    var textValue = $("#fifteen").val();
    localStorage.setItem("15", textValue)
})


//Change box color

function changeBoxColor() {
// var hour = (moment().format("H"));
// var hour = 9    
// console.log(hour)    
    $("textarea").each(function () {
        // console.log(this)
        // console.log(this.dataset.timeslot)
        var hour = (moment().format("H"))
        // var hour = 11
        console.log("hour " + hour)
        calendarHour = this.dataset.timeslot;
        console.log("calendarHour "+ calendarHour)
        if (calendarHour < hour) {
            // console.log(calendarHour)
            // console.log(hour)
            $(this).addClass("past")
            $(this).removeClass("future")
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