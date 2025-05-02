const users = {
    email: "Asilbek@gmail.com",
    password: '12345678',

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
        poragraph.style.display = 'none'
        window.location.href="./"
    } else {
        poragraph.style.display = 'block'

    }
})