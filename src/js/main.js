import menu from "./modules/menu.js"
import isMobile from "./templates/isMobile.js"
import webp from "./templates/webp.js"

window.addEventListener('DOMContentLoaded', () => {
    isMobile()
    webp()
    menu()
})