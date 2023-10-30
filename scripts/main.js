const toggleFaqItem = (item)=>{

    const faqList = document.querySelectorAll('.faq-item')
    const answer = item.querySelector('.answer')
    for (const faq of faqList) {
        if (faq !== item) {
            faq.querySelector('.question').classList.remove('active')
            faq.querySelector('span').classList.remove('open')
            faq.querySelector('.answer').classList.remove('open')
        }
    }


    item.querySelector('.question').classList.toggle('active')
    answer.classList.toggle('open')
    const arrow = item.querySelector('span')

    arrow.classList.toggle('open')


}

const toggleMenu = (item) => {
    
}


const menuHamburger = document.querySelector('#menu-hamburger')
const closeMenu = document.querySelector('.close-menu')

menuHamburger.addEventListener('click', ()=>{
    const menu = document.querySelector('.menu-mobile')
    menu.classList.toggle('open')
    menuHamburger.classList.toggle('active')
    closeMenu.classList.toggle('open')

})

closeMenu.addEventListener('click', ()=>{
    const menu = document.querySelector('.menu-mobile')
    menu.classList.toggle('open')
    menuHamburger.classList.toggle('active')
    closeMenu.classList.toggle('open')
})