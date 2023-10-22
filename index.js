const navToggleBtn = document.getElementById("nav-toggle-btn")
const navList = document.querySelector('.nav__list')

document.getElementById("year").innerHTML = new Date().getFullYear();

const hamburgerIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1em" height="1em" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Menu</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Menu">
            <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24">
            </rect>
            <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round">

            </line>
            <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="currentColor" stroke-width="2"
                stroke-linecap="round">

            </line>
            <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="currentColor" stroke-width="2"
                stroke-linecap="round">

            </line>
        </g>
    </g>
</svg>`

const closeIcon = `<?xml version="1.0" encoding="utf-8"?>
<svg
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
    fill="currentColor"
  />
</svg>
`
let navToggleBtnState = false

const  onNavToggleBtnClicked = (event) => {
    navList.classList.toggle('nav__list--mobile')
    navToggleBtnState = !navToggleBtnState
    navToggleBtn.innerHTML = navToggleBtnState ? closeIcon : hamburgerIcon
}

navToggleBtn.addEventListener('click', onNavToggleBtnClicked)