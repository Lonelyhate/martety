import Swiper, {Navigation, Autoplay} from "swiper";


const sliders = () => {
    new Swiper('.inner-slider', {
        modules: [Navigation, Autoplay],
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 20,
        // loop: true,
        autoplay: {
            delay: 2500,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.inner-slider__next',
            prevEl: '.inner-slider__prev',
          },
        breakpoints: {
            850: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        }
    })
    
    new Swiper('.novelties-slider', {
        speed: 500,
        slidesPerView: 'auto',
        spaceBetween: 30
    })
}

export default sliders;