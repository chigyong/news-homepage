const toggleButton = document.getElementsByClassName('menu')[0] 
const navbarLinks = document.getElementsByClassName('navbar-links')[0] 
const body = document.getElementsByClassName('body')[0] 

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('active')
    body.classList.toggle('active')
})