document.addEventListener('DOMContentLoaded', function () {
  class CustomElement extends HTMLElement {
    constructor() {
      super()
      this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    connectedCallback() {
      this.createObserver()
      this.querySelector('.section__button').addEventListener('click', this.toggleVisibility)
    }

    toggleVisibility(event) {
      const sectionText = this.querySelector('.section__text__hidden')
      const buttonText = this.querySelector('.section__button')

      if (sectionText.classList.contains('show')) {
        sectionText.classList.remove('show')
        buttonText.textContent = 'Learn more'
      } else {
        sectionText.classList.add('show')
        buttonText.textContent = 'Shrink text'
      }
    }

    createObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const sectionContent = this.querySelector('.section__content')
          if (entry.isIntersecting) {
            sectionContent.style.display = 'flex'
          } else {
            sectionContent.style.display = 'none'
          }
        })
      })

      observer.observe(this)
    }
  }

  customElements.define('custom-element', CustomElement)
})
