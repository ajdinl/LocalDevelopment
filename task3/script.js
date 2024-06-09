class CustomSwiper extends HTMLElement {
  constructor() {
    super()
    this.swiper = null
  }

  connectedCallback() {
    this.initSwiper()
  }

  initSwiper() {
    this.swiper = new Swiper(this, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        1440: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: () => {
          console.log(`Active slide index: ${this.swiper.realIndex}`)
        },
      },
    })
  }
}

customElements.define('custom-swiper', CustomSwiper)

document.addEventListener('DOMContentLoaded', () => {
  const swiperElement = document.createElement('custom-swiper')
  document.body.appendChild(swiperElement)
})
