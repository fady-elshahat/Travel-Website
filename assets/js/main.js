// Show Nav Menu
const navMenu = document.getElementById("nav-menu"),
     navToggle = document.getElementById("nav-toggle"),
     navClose = document.getElementById("nav-close"),
     navLink = document.querySelectorAll('.nav-link');

if (navToggle) {
     navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
     })
}

// Close Nav Menu 
if (navClose) {
     navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
     })
}

// Remove Nav Menu Mobile 

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
     navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND COLOR
function scrollNav() {
     const header = document.getElementById("header");
     if (this.scrollY >= 100) {
          header.classList.add("scroll-header")
     } else {
          header.classList.remove("scroll-header")
     }
}
window.addEventListener("scroll" , scrollNav)

// Swiper Discover
var swiper = new Swiper(".discover-content", {
     effect: "coverflow",
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: "auto",
     loop: true,
     spaceBetween:32,
     coverflowEffect: {
          rotate: 0,
     },
     autoplay: {
          delay: 3000,
          disableOnInteraction: false,
     },
     breakpoints: {
          640: {
               slidesPerView: 3,
               spaceBetween: 20,
          },
          768: {
               slidesPerView: 3,
               spaceBetween: 40,
          },
          1024: {
               slidesPerView: 3,
               spaceBetween: 40,
          }
     }
});
/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
     videoButton = document.getElementById('video-button'),
     videoIcon = document.getElementById('video-icon')

function playPause(){ 
     if (videoFile.paused){
        // Play video
          videoFile.play()
        // We change the icon
          videoIcon.classList.add('ri-pause-line')
          videoIcon.classList.remove('ri-play-line')
     }
     else {
        // Pause video
          videoFile.pause(); 
        // We change the icon
          videoIcon.classList.remove('ri-pause-line')
          videoIcon.classList.add('ri-play-line')

}
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
     videoIcon.classList.remove('ri-pause-line')
     videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


// Show Scroll Up

window.addEventListener("scroll" , ()=>{
     
     const scrollUp = document.getElementById("scroll-up");
     if (this.scrollY >= 200) {
          scrollUp.classList.add("show-scroll");
     }else{
          scrollUp.classList.remove("show-scroll");
     }
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
     const scrollY = window.pageYOffset

     sections.forEach(current =>{
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;

          const sectionId = current.getAttribute('id');
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
               document.querySelector(`.nav-menu a[href="#${sectionId}" ]`).classList.add('active-link')
          }else{
               document.querySelector(`.nav-menu a[href="#${sectionId}" ]`).classList.remove('active-link')
          }
     })
}
window.addEventListener('scroll', scrollActive)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
     // Add or remove the dark / icon theme
     document.body.classList.toggle(darkTheme)
     themeButton.classList.toggle(iconTheme)
     // We save the theme and the current icon that the user chose
     localStorage.setItem('selected-theme', getCurrentTheme())
     localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== Scroll Reveal ====================*/ 
const animation = ScrollReveal({
     distance: '60px',
     duration: 2500,
})


animation.reveal(`.home-data, .home-social, .home-info,
               .discover-content,
               .experience-data, .experience-overlay,
               .place-card,
               .sponsor__content,
               .footer__data, .footer__rights`,{
     origin: 'top',
     interval: 100,
})

animation.reveal(`.about-data, 
               .video-description,
               .subscribe__description`,{
          origin: 'left',
})

animation.reveal(`.about-overlay,.about-overlay,
               .video-content,
               .subscribe__form`,{
          origin: 'right',
          interval: 100,
})