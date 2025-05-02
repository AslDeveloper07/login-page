const users = [
    {
        email: "asilbek@gmail.com",
        password: "12345678",
        name: "Asilbek",
        username: "Suvonov",
        followers: 123,
    },
    {
        email: "Azizbek@gmail.com",
        password: "12345678",
        name: "Azizbek",
        username: 'Azizbek',
        following: 100,
    },
    {
        email: "umar@gmail.com",
        password: "12345678",
        name: "Umar",
        username: 'Umarali',

    },
    {
        email: "Joniy@gmail.com",
        password: "Joniy123",
        name: "Joniy",
        username: 'Joniy',

    },

];


let body = document.body
let getEmail = document.querySelector('#email')
let getPassword = document.querySelector('#password')
let getButton = document.querySelector('#btn')
let poragraph = document.querySelector('#poragraph')
let firstName = document.querySelector('.name')
let userName = document.querySelector('.username')


let getUserInfo = JSON.parse(localStorage.getItem('user'))
console.log(getUserInfo);

if (getUserInfo) {
    firstName.textContent = getUserInfo.name;
    userName.textContent = getUserInfo.username;


}


getButton.addEventListener('click', () => {
    const user = users.find(u =>
        u.email.toLowerCase() === getEmail.value.toLowerCase() &&
        u.password === getPassword.value
    );
    console.log(user);

    if (user) {
        poragraph.style.display = 'none';
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = "./zindex.html";
    } else {
        poragraph.style.display = 'block'

    }
});




