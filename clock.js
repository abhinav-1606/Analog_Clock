function clock(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    console.log("Hour:"+hr,"Minute:"+min,"Second:"+sec)

    let hourhand = hr*360/12 + ((min * 360/60)/12) ;
    let minutehand = (min * 360/60) + (sec* 360/60)/60;
    let secondhand = sec * 360/60;
    
    hour.style.transform = "rotate(" + hourhand + "deg)";
    minute.style.transform = "rotate(" + minutehand + "deg)";
    second.style.transform = "rotate(" + secondhand + "deg)";
}
var interval = setInterval(clock, 1000);