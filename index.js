

const swiper = new Swiper(".mySwiper", {
    slidesPerView: window.innerWidth < 1024 ? 1 : window.innerWidth === 1024 ? 2 : 3,
    spaceBetween: 30,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: '.swiper-pagination',
  },
  autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Allow manual interaction to stop autoplay
  }
});



const navToggleBtn = document.getElementById("nav-toggle-btn")
const navList = document.querySelector('.nav__list')
const navIcon = document.querySelector('.nav-icon')

document.getElementById("year").innerHTML = new Date().getFullYear();

const hamburgerIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1em" height="1em" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" class="nav-icon">
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
  aria-hidden="true" focusable="false"
  class="nav-icon"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
    fill="currentColor"
  />
</svg>
`
// Function to close the navigation bar
const closeNavBar = () => {
    navList.classList.remove('nav__list--mobile');
    navToggleBtnState = false;
    navToggleBtn.innerHTML = hamburgerIcon;
    document.body.style.overflow = 'auto'
};

// Function to handle the button click
const onNavToggleBtnClicked = (event) => {
    event.stopPropagation(); // Stops the click event from propagating to the document

    if (navList.classList.contains('nav__list--mobile')) {
        closeNavBar();
    } else {
        navList.classList.add('nav__list--mobile');
        navToggleBtn.innerHTML = closeIcon;
        document.body.style.overflow = 'hidden'
    }
}

// Add a click event listener to the button
navToggleBtn.addEventListener('click', onNavToggleBtnClicked);

// Add a click event listener to each nav__link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        closeNavBar(); // Close the navigation bar when a nav__link is clicked
    });
});

// Add a click event listener to the document to close the navigation bar when clicking outside
document.addEventListener('click', (event) => {
    if (navList.classList.contains('nav__list--mobile') && !navList.contains(event.target) && event.target !== navToggleBtn) {
        closeNavBar();
    }
});
