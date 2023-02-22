
let inputEmail = document.querySelector(".js-input-email")
let formInput = document.querySelector(".js-input")
let btnEmail = document.querySelector(".input-btn")

let popup = document.querySelector(".popup")
let closeElem = document.querySelectorAll(".close-popup")
let popupTitle = document.querySelector(".popup__title")
let popupSubscribe = document.querySelector(".popup__text")

let prompt = document.querySelector(".isValidEmail")


document.addEventListener('DOMContentLoaded', function () {

  const deadline = new Date(2023, 03, 31);
  let timerId = null;
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});


const isValidEmail = (email) => {

  let re = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
  return re.test(String(email).toLowerCase());
}

$('.close-popup').on('click', () => {
  popup.classList.remove("open")
})

const showSuccessPopup = () => {
  popupTitle.innerText = "SUCCESS!"
  popupSubscribe.innerText = "You have successfully subscribed to the email newsletter"
  popup.classList.add("open");
}

const showErrorPopup = () => {
  popupTitle.innerText = "ERROR!"
  popupSubscribe.innerText = "Something went wrong.."
  popup.classList.add("open");
}

btnEmail.addEventListener("click", (e) => {
  e.preventDefault()
  let emailVal = inputEmail.value;

  const validate = (input) => {
    if (input.value === "") {
      input.classList.add("error");
      prompt.textContent = "Please enter your email..."
      return 
    } else {
      input.classList.remove("error")
    }

    if (!isValidEmail(emailVal)) {
      prompt.textContent = "Please enter a valid email..."
      input.classList.add("error");
    } else {
      input.classList.remove("error")
      prompt.textContent = ""
      sendEmail(emailVal)
      formInput.value = ""
    }
  }
  validate(formInput)
})































