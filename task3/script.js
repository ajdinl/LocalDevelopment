class CustomSwiper extends HTMLElement {
  constructor() {
    super()
    this.swiper = null
  }

  connectedCallback() {
    this.initSwiper()
    document.getElementById('toggle-swiper').addEventListener('click', () => this.toggleSwiper())
  }

  initSwiper() {
    this.swiper = new Swiper(this, {
      loop: true,
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

  toggleSwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true)
      this.swiper = null
      console.log('Swiper destroyed')
    } else {
      this.initSwiper()
      console.log('Swiper initialized')
    }
  }
}

customElements.define('custom-swiper', CustomSwiper)
