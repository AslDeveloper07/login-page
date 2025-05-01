const users = {
    email: "Asilbek@gmail.com",
    password: '12345678'
}
let body = document.body
let getEmail = document.querySelector('#email')
let getPassword = document.querySelector('#password')
let getButton = document.querySelector('#btn')
let poragraph = document.querySelector('#poragraph')

console.log(body);

getButton.addEventListener('click', () => {
    if (getEmail.value === users.email && getPassword.value === users.password) {
        alert("successfull💖")
        // document.body.style.background = ' linear-gradient(196deg,rgba(37, 255, 33, 1) 0%, rgba(0, 128, 11, 1) 100%);'
        poragraph.style.display = 'none'
    } else {
        poragraph.style.display = 'block'
        // document.body.style.background = ' linear-gradient(196deg,rgba(255, 170, 33, 1) 0%, rgba(255, 0, 0, 1) 100%);'
    }
})