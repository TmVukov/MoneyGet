//handle menu toggle
const navbar = document.querySelector(".navigation")
const toggleBtn = document.querySelector(".btn__toggle")

toggleBtn.addEventListener("click", _=>navbar.classList.toggle("show-nav"))



//handle current date (in Exchange page)
const date = document.querySelector(".date")

const year = new Date().getFullYear()
const month = new Date().getMonth()
const day = new Date().getDate()

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

if(date) date.textContent = `${months[month]} ${day}, ${year}`

