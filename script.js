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

console.log(moment().format("MMMM"))