const calender = document.querySelector(".calender"),
date = document =querySelector(".date"),
daysContainer = document.querySelector(".days"),
prev = document.querySelector(".prev");
next = document.querySelector(".next");


let today = new Date();
let activeDay;
let month = today.getFullMonth();
let year = today.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function initCalendar() {

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month +1,0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const ladDate = lastDay.getDate();
    const day = firstDay.getDate();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " " + year;

    let days = " ";

    for (let x = day; x > 0; x--) {
        days += <div class="day prev-date" >${prevDays - x + 1}</div>;
    }
    for (let i = 1 ; i< lastDate; i++){
        if ( 
            i === new Date(). getDate() && 
            year === new Date.getFullYear() && 
            month === new Date.getmonth()
            ) {
                days += '<div class="day today" >${i}</div>';
            }

        else {
            days += '<div class= "day " >${i}</div>';
        }
    }
    
    for (let j = 1 ; j < nextDays; i++) {
        days += '<div class = "day nextdate " >${i}</div>';
    }
    
    daysContainer.innerHTML = days;

}
initCalendar();

function prevMonth() {
    month --;
    if (month < 0) {
        month = 11;
        year --;
    }
    initCalendar()
}

function nextMonth() {
    month ++;
    if(month > 11) {
      month = 0;
      year ++;  
    }
    innitCalendar();
}

prev.addEventListener("click", prevMonth);
prev.addEventListener("click", prevMonth);

