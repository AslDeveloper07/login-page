const users = [
    {
        email: "asilbek@gmail.com",
        password: "12345678",
        name: "Asilbek",
        username: "Suvonov",
        img: "./img/asilbekjon.png",
        story: "Hayotda muvaffaqiyatga erishish uchun uch narsa kerak; diqqat, intizom va harakat!"
    },
    {
        email: "Azizbek@gmail.com",
        password: "12345678",
        name: "Azizbek",
        username: 'Azizbek',
        img: "./img/image.png",
        story: "Hayotda muvaffaqiyatga erishish uchun uch narsa kerak; diqqat, intizom va harakat!"
    },
    {
        email: "umar@gmail.com",
        password: "12345678",
        name: "Umar",
        username: 'Umarali',
        img: "./img/developer.png",
        story: "Pul uchun barcha narsaga tayyor inson bilan hech qachon do‘stlashma rozi qilishsa seni ham sotadi."
    },
    {
        email: "Joniy@gmail.com",
        password: "Joniy123",
        name: "Joniy",
        username: 'Joniy',
        img: "./img/dev.png",
        story: "Irodang kuchli bo‘lmasa, kuching senga yordam berolmaydi."
    },
];


let getEmail = document.querySelector('#email');
let getPassword = document.querySelector('#password');
let getButton = document.querySelector('#btn');
let paragraph = document.querySelector('#paragraph');
let firstName = document.querySelector('.name');
let userName = document.querySelector('.username');
let avatar = document.querySelector('.avatar');
let text =document.querySelector('.bio')


let getUserInfo = JSON.parse(localStorage.getItem('user'));
console.log(getUserInfo);

if (getUserInfo) {
    if (firstName) firstName.textContent = getUserInfo.name;
    if (userName) userName.textContent = getUserInfo.username;
    if (avatar) avatar.src = getUserInfo.img || "./img/asilbekjon.png";
    if (avatar) avatar.src = getUserInfo.img || "./img/image.png";
    if (text) text.textContent = getUserInfo.story;
    if (avatar) avatar.src = getUserInfo.img || "./img/developer.png";
    if (avatar) avatar.src = getUserInfo.img || "./img/dev.png";



}

// Login tugmasi bosilganda
if (getButton) {
    getButton.addEventListener('click', () => {
        const user = users.find(u =>
            u.email.toLowerCase() === getEmail.value.toLowerCase() &&
            u.password === getPassword.value
        );
        console.log(user);

        if (user) {
            if (paragraph) paragraph.style.display = 'none';
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "./zindex.html";
        } else {
            if (paragraph) paragraph.style.display = 'block';
        }
    });
}
