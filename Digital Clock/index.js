const date = new Date();
const dayName = document.querySelector(".item-day-name");
const month = document.querySelector(".item-month");
const day = document.querySelector(".item-day");
const year = document.querySelector(".item-year")
const time = document.querySelector(".time");
month.innerHTML = date.toLocaleString("en",{
    month:"long",
})
dayName.innerHTML = date.toLocaleDateString("en",{
    weekday:"long",
})
day.innerHTML = date.toLocaleString("en",{
    day:"2-digit",
})

year.innerHTML = date.getFullYear();
function updatetime(){
    let dateF = new Date();
    let hour = dateF.getHours();
    let minute = dateF.getMinutes();
    let second = dateF.getSeconds();
    let status = hour>12;
    let value = "AM";
    hour%=12;
    if(status == true){
        value = "PM";
    }
    time.innerHTML=`${format(hour)}:${format(minute)}:${format(second)} ${value}`
    setInterval(updatetime,1000);
}
function format(a){
    if(a<10){
        return "0"+a;
    }
    return a;
    
}
updatetime();