window.addEventListener('scroll', function () {
  header = document.querySelector('#header-top');
  header.classList.toggle("fixed-head", window.scrollY > 110)
  header.classList.toggle("fixed-top", window.scrollY > 220)
});

window.addEventListener('scroll', function () {
  header = document.querySelector('#header-top');
  header.classList.toggle("fixed-head", window.scrollY > 110)
  header.classList.toggle("fixed-top", window.scrollY > 220)
  
  scrollTop = document.querySelector('.scrollTop');
  scrollTop.classList.toggle("show", window.scrollY > 220)
});


// Set the date we're counting down to
var countDownDate = new Date("Jan 7, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and second
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

$(document).ready(function () {
  setTimeout(function () {
    $('#preloader').fadeToggle();

  }, 2500);
});



// let preloader = document.getElementById('preloader');
// setTimeout(function(){
//   preloader.style.opacity="0";
// },3000)