const toggle = document.getElementById('toggle-icon');
const toggleMenu = document.getElementById('toggle-menu');
const removeMenu = document.getElementById('removeMenu')

toggle.addEventListener('click', () => {
    toggleMenu.classList.add('active')
})
removeMenu.addEventListener('click', () => {
    toggleMenu.classList.remove('active')
})
