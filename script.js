let date = new Date();

let calendar = document.getElementById("calendar");

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

let today = year + "-" + month + "-" + day;
calendar.value = today;
calendar.onchange = changeCalendar;

let mainDate = new Date(0*86400000);
changeCalendar();


function changeCalendar(){
    let curDate = new Date(calendar.value);
    
    document.getElementById("diff").innerHTML = (curDate-mainDate)/86400000%16;
    console.log("onchange");
}

