// Fix lỗi click vào Li ở header
const headerLis = document.querySelectorAll(".header__menu ul li")
headerLis.forEach(function(item,index) {
  let headerLiA = item.querySelector("a")
  item.addEventListener('click', () => {
    headerLiA.click()
  })
})

const logo = document.querySelector('.logo')
const headerMenuFirst = document.querySelector('.header__menu ul li')
logo.addEventListener('click', () => {
  headerMenuFirst.click()
})