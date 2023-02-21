let popupLink = document.querySelector(".popup__link")
let body = document.querySelector("body")

let form = document.getElementById("form");
let inputEmail = document.querySelector(".js-input-email")
let formInput = document.querySelector(".js-input")
let btnEmail = document.querySelector(".input-btn")

let popup = document.querySelector(".popup")
let closeElem = document.querySelectorAll(".close-popup")
let popupTitle = document.querySelector(".popup__title")
let popupSubscribe = document.querySelector(".popup__text")

let unlock = true;

const timeout = 800;

document.addEventListener('DOMContentLoaded', function () {

  const deadline = new Date(2023, 03, 31);

  let timerId = null;

  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
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
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});


const validateEmail = (email) => {

  let re = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
  return re.test(String(email).toLowerCase());
}

const closePopup = () => {
  closeElem.forEach(item => item.addEventListener("click", () => {
    popup.classList.remove("open")
  }))
}

const showSuccessPopup = () => {
  popupTitle.innerText = "SUCCESS!"
  popupSubscribe.innerText = "You have successfully subscribed to the email newsletter"
  popup.classList.add("open");
  closePopup();
}

const showErrorPopup = () => {
  popupTitle.innerText = "ERROR!"
  popupSubscribe.innerText = "Something went wrong.."
  popup.classList.add("open");
  closePopup();
}

btnEmail.addEventListener("click", (e) => {
  e.preventDefault()
  let emailVal = inputEmail.value;

  const validate = (input) => {
    if (input.value === "") {
      input.classList.add("error");
      alert("email invalid")
      return false;
    } else {
      input.classList.remove("error")
    }

    if (!validateEmail(emailVal)) {
      alert("email invalid")
      input.classList.add("error");
      return false;
    } else {
      input.classList.remove("error")
      sendEmail(emailVal)
    }
  }
  validate(formInput)
})































// const popupName = popupLink.getAttribute("href").replace("#", "");
// const currentPopup = document.getElementById(popupName);



// const popupCloseIcon = document.querySelector(".close-popup");
// popupCloseIcon.addEventListener("click", (e) => {
//   popupClose(popupCloseIcon.closest(".popup"));
//   e.preventDefault();
// })


// const popupOpen = (currentPopup) => {
//   if (currentPopup && unlock) {
//     const popupActive = document.querySelector(".popup.open");
//     if (popupActive) {
//       popupClose(popupActive, false);
//     }
//     unlock = false;
//     setTimeout(() => {
//       unlock = true;
//     }, timeout)
//     currentPopup.classList.add("open");
//     currentPopup.addEventListener("click", (e) => {
//       if (!e.target.closest("popup__content")) {
//         popupClose(e.target.closest(".popup"))
//       }
//     })
//   }
// }


