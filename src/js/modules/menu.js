const menu = () => {
    const menuBtn = document.querySelector('.menu__icon')
    const menuBody = document.querySelector('.menu__body')

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        menuBody.classList.toggle('active')
    })
}

export default menu