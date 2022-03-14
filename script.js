const form = document.querySelector('#form')
const input = document.querySelector('#form input')
const p = document.querySelector('p')


function onlogin (event) {
    event.preventDefault()
    const username = input.value
    localStorage.setItem('username', username)
    p.textContent = `Hello~ ${username}`
    form.classList.add('hidden')
    p.classList.remove('hidden')
}



const savedUsername = localStorage.getItem('username')

if (savedUsername === null) {
    form.classList.remove('hidden')
    form.addEventListener('submit', onlogin)
} else {
        p.classList.remove('hidden')
        p.textContent = `Hello~ ${savedUsername}`
}