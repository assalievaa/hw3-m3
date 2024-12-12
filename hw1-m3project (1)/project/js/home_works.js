// GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const redExp = /^[a-z0-9._-]+@gmail\.com$/i

gmailButton.onclick = () => {
    if (redExp.test(gmailInput.value)) {
        gmailResult.style.color = 'green'
        gmailResult.innerHTML = 'OK'
    }else {
        gmailResult.style.color = 'red'
        gmailResult.innerHTML = 'invalid gmail'
    }
}


//MOVE BLOCK

const child_block = document.querySelector('.child_block')
const parent_block = document.querySelector('.parent_block')

let num = 0;
const max = parent_block.offsetWidth - child_block.offsetWidth
const square = () => {
    if (num < max) {
        num++
        child_block.style.left = `${num}px`
        requestAnimationFrame(square)
    }
}
square()
