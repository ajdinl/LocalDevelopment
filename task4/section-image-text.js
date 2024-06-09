class ImageTextSection extends HTMLElement {
  constructor() {
    super()
    this.initObserver()
  }

  initObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
        } else {
          entry.target.style.opacity = 0
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observer.observe(this)
  }

  connectedCallback() {
    this.querySelector('.section-image-text__button').addEventListener('click', () => {
      const textElement = this.querySelector('.section-image-text__text')
      const isVisible = textElement.style.display === 'block'
      textElement.style.display = isVisible ? 'none' : 'block'
      textElement.style.transition = 'display 0.3s'
    })
  }
}

customElements.define('image-text-section', ImageTextSection)

document.addEventListener('DOMContentLoaded', () => {
  const section = document.createElement('image-text-section')
  document.body.appendChild(section)
})
