const slides = [
    {
        background: "url(./img/slider-img-2.jpg) top center/ cover no-repeat",
        content1: "Let's go now",
        content2: "Relax and enjoy",
        content3: "The 2022 list highlights places around the globe where travelers can be part of the solution"
    },
    {
        background: "url(./img/slider-img-1.jpg) top center/ cover no-repeat fixed",
        content1: "Come with us",
        content2: "Explore and Travel",
        content3: "Good Luck!!!"
    }
    ,
    {
        background: "url(./img/blog-img-4.jpg) top center/ cover no-repeat fixed",
        content1: "Come with us",
        content2: "Explore and Travel",
        content3: "Good Luck!!!"
    }
    ,
    {
        background: "url(./img/blog-img-3.jpg) top center/ cover no-repeat fixed",
        content1: "Come with us",
        content2: "Explore and Travel",
        content3: "Good Luck!!!"
    }
    
]

const leftBtn = document.querySelector('.slider-left')
const rightBtn = document.querySelector('.slider-right')
const slider = document.querySelector('.slider')
const sliderContent1 = document.querySelector('.content-1')
const sliderContent2 = document.querySelector('.content-2')
const sliderContent3 = document.querySelector('.content-3')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setActiveSlide()
})


function setActiveSlide() {
    slider.style.background = slides[activeSlide].background
    setTimeout( () => {
        sliderContent1.innerText = slides[activeSlide].content1
        sliderContent2.innerText = slides[activeSlide].content2
        sliderContent3.innerText = slides[activeSlide].content3
    },400)
}
function rightClick () {
    rightBtn.click()
}
setInterval(rightClick, 6000);








