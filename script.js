const clock = document.querySelector(".clock");
const dayy = document.querySelector(".day");
var a , b

function showtime() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var session = "AM";

  if (hr > 12) {
    hr = hr - 12;
    session = "PM";
  }
  if (hr == 0) {
    hr = 12;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  var time = hr + ":" + min + ":" + sec + " " + session;
  clock.innerText = time;
  
  console.log(a)
}



function showDate() {
  var date = new Date();
  var d = date.getDay();
  //   console.log(d);
  var day = "MON";
  if (d == 1) {
    day = "MON";
  }
  else if (d == 2) {
    day = "TUE";
  }
  else if (d == 3) {
    day = "WED";
  }
  else if (d == 4) {
    day = "THU";
  }
  else if (d == 5) {
    day = "FIR";
  }
  else if (d == 6) {
    day = "SAT";
  }
  else if (d == 7) {
    day = "SUN";
  }

  dayy.innerText = day;
  // clearInterval(b);
  // const b = setInterval(showDate, 1000);

}

function UpdateTime(){
  showDate();
  showtime();
  clearInterval(a)
  a = setInterval(UpdateTime,1000)
  // clearInterval(a)
  // clearInterval(b)
  // a = setInterval(showtime, 1000);
  // b = setInterval(showDate, 10000)
}

UpdateTime()