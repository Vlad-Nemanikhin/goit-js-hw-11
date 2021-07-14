import Swal from 'sweetalert2/dist/sweetalert2.js';

const timeSelector = document.querySelector('#date-selector');
const startBtn = document.querySelector('.start');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

timeSelector.addEventListener('change', onChangeCathDate);
startBtn.addEventListener('click', startTimer);

let intervalId = null;
let getTime;

function timeRemaining() {
   const diff = Date.parse(timeSelector.value.toString()) - Date.parse(new Date());
   getTime = convertMs(diff);
   if (diff < 0) {
      getTime.days = 0;
      getTime.hours = 0;
      getTime.minutes = 0;
      getTime.seconds = 0;
   }
   //console.log(getTime);
   daysEl.innerHTML = getTime.days;
	hoursEl.innerHTML = getTime.hours;
	minutesEl.innerHTML = getTime.minutes;
   secondsEl.innerHTML = getTime.seconds;
   
}

function startTimer() {
   clearInterval(intervalId);
   Date.parse(timeSelector.value.toString()) - Date.parse(new Date());
   intervalId = setInterval(timeRemaining, 1000);
}

function onChangeCathDate() {
      clearInterval(intervalId);
   if (Date.parse(timeSelector.value.toString()) < Date.parse(new Date())) {
      startBtn.setAttribute('disabled', true);
      Swal.fire({
         title: 'Please choose a date in the future',
         icon: 'error',
         confirmButtonText: 'Oke!!',
      });
   }
   
   startBtn.removeAttribute('disabled');
   timeRemaining();
}

 function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
   }