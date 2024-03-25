const buttonright = window.document.querySelector('.button-arrow.-d')
const buttonleaft = window.document.querySelector('.button-arrow.-e')
const elements = window.document.querySelector('.elements')
let count = 0

buttonright.addEventListener('click', function(){
    count += 50
    elements.style = `transform: translateX(${count}px)`
})

buttonleaft.addEventListener('click', function(){
    count -= 50
    elements.style = `transform: translateX(${count}px)`
})