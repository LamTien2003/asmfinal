var isLogin = true;
var isRegister = false;
const btnLogin = document.querySelector('.btn-login')
const btnRegister = document.querySelector('.btn-register') 
const btnRegisters = document.querySelectorAll('.btn-register') 
const formLogin = document.querySelector('.form-login')
const formRegister = document.querySelector('.form-register')

Array.from(btnRegisters).forEach(function(btnRegister) {
    btnRegister.addEventListener('click', function(e) {
        e.preventDefault()
        if(isRegister) {
            alert("Đăng ký thành công")
            isLogin = true;
            isRegister = false;
            formLogin.classList.toggle("none")
            formRegister.classList.toggle("none")
        }else {
            isRegister = true;
            formLogin.classList.toggle("none")
            formRegister.classList.toggle("none")
        }
    })
})
btnLogin.addEventListener('click',function(e) {
    e.preventDefault()
    console.log("asdasd")
})
const overlay = document.querySelector('.overlay')
overlay.addEventListener ('click', () => {
    overlay.classList.toggle("none")
})

const icon = document.querySelector('.header__icon li:nth-child(3)')
const aIcon = document.querySelector('.header__icon li:nth-child(3) >a')

icon.addEventListener('click', () => {
    isLogin = true;
    isRegister = false;
    overlay.classList.toggle("none")
    formLogin.classList.remove("none")
    formRegister.classList.add("none")
})

const forms = document.querySelectorAll('.form__content')
forms.forEach(function(form,index) {
    form.addEventListener('click', function(event) {
        event.stopPropagation()
    })
})

btnLogin.addEventListener('click', function(e)  {
    e.preventDefault()  
    if(isLogin) {
        alert("Đăng nhập thành công")
        overlay.classList.toggle("none")
        aIcon.classList.add("islogin")
    }else {
        formLogin.classList.toggle("none")
        formRegister.classList.toggle("none")
    }
    console.log("1321312")
})


