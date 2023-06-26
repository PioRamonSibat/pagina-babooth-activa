const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option5 = document.getElementById('option5')
const option6 = document.getElementById('option6')

const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')
const content4 = document.getElementById('content4')
const content5 = document.getElementById('content5')
const content6 = document.getElementById('content6')


let choose = 1

const changeOption = () => {
    choose == 1 ? (
        option1.classList.value = 'option option-active',
        content1.classList.value = 'content content-active'
    )
    : (
        option1.classList.value = 'option',
        content1.classList.value = 'content '
    )

    choose == 2 ? (
        option2.classList.value = 'option option-active',
        content2.classList.value = 'content content-active'
    )
    : (
        option2.classList.value = 'option',
        content2.classList.value = 'content '
    )
    choose == 3 ? (
        option3.classList.value = 'option option-active',
        content3.classList.value = 'content content-active'
    )
    : (
        option3.classList.value = 'option',
        content3.classList.value = 'content '
    )
    choose == 4 ? (
        option4.classList.value = 'option option-active',
        content4.classList.value = 'content content-active'
    )
    : (
        option4.classList.value = 'option',
        content4.classList.value = 'content '
    )
    choose == 5 ? (
        option5.classList.value = 'option option-active',
        content5.classList.value = 'content content-active'
    )
    : (
        option5.classList.value = 'option',
        content5.classList.value = 'content '
    )
    choose == 6 ? (
        option6.classList.value = 'option option-active',
        content6.classList.value = 'content content-active'
    )
    : (
        option6.classList.value = 'option',
        content6.classList.value = 'content '
    )
    choose == 7 ? (
        option7.classList.value = 'option option-active',
        content7.classList.value = 'content content-active'
    )
    : (
        option7.classList.value = 'option',
        content7.classList.value = 'content '
    )
    choose == 8 ? (
        option8.classList.value = 'option option-active',
        content8.classList.value = 'content content-active'
    )
    : (
        option8.classList.value = 'option',
        content8.classList.value = 'content '
    )
    choose == 9 ? (
        option9.classList.value = 'option option-active',
        content9.classList.value = 'content content-active'
    )
    : (
        option9.classList.value = 'option',
        content9.classList.value = 'content '
    )
    choose == 10 ? (
        option10.classList.value = 'option option-active',
        content10.classList.value = 'content content-active'
    )
    : (
        option10.classList.value = 'option',
        content10.classList.value = 'content '
    )
}

option1.addEventListener('click', ()=> {
    choose = 1
    changeOption()
})

option2.addEventListener('click', ()=> {
    choose = 2
    changeOption()
})
option3.addEventListener('click', ()=> {
    choose = 3
    changeOption()
})
option4.addEventListener('click', ()=> {
    choose = 4
    changeOption()
})
option5.addEventListener('click', ()=> {
    choose = 5
    changeOption()
})
option6.addEventListener('click', ()=> {
    choose = 6
    changeOption()
})
option7.addEventListener('click', ()=> {
    choose = 7
    changeOption()
})
option8.addEventListener('click', ()=> {
    choose = 8
    changeOption()
})
option9.addEventListener('click', ()=> {
    choose = 9
    changeOption()
})
option10.addEventListener('click', ()=> {
    choose = 10
    changeOption()
})