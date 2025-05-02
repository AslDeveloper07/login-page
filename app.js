const users = [
    {
        email: "asilbek@gmail.com",
        password: "12345678",
        name: "Asilbek",
        username: "@Suvonov",
        img: "./img/asilbekjon.png",
        story: "Ota-onang sendan faxrlanmaguncha harakatdan tuxtama!",
        followers: "123",
        following: "230",
        fullName: "Asilbek Suvonov",
        phoneNumber: "+998 88 703 13 86",
        company: "Sfera Academy",
        website: "www.LoginPage",
        awards: "5",
        interested: "Design, Developer",
        linkedin:"Asilbekjon777",
        instagram:"@Asilch1k_ake",
        blog:"@manoli_izoxlar",
        document:"30",
        googleEmail:"Asilbek@gmail.com",
        location:"Uzbekistan",
        dateBirth:"Juny-06, 2008",
        occupation:"Junior",
        joined:"september 2024",
        twitter:"@Asilbek",
        facebook:"Asilbek.uz",
        gitHub:"@AslDeveloper07",
        project:"12",
        downloads:"100"
    },
    {
        email: "Azizbek@gmail.com",
        password: "12345678",
        name: "Azizbek",
        username: '@Azizbek',
        img: "./img/image.png",
        story: "Hayotda muvaffaqiyatga erishish uchun uch narsa kerak; diqqat, intizom va harakat!",
        followers: "300",
        following: "303",
        fullName: "Azizbek Suvonov",
        phoneNumber: "+998 88 137 20 09",
        company: "Sfera Academy",
        website: "www.Portfolio",
        awards: "6",
        interested: "Design, Developer",
        linkedin:"Azizbek1234",
        instagram:"@Azizbek.011",
        blog:"@developer_world",
        document:"43",
        googleEmail:"Azizbek@gmail.com",
        location:"Uzbekistan",
        dateBirth:"December - 06, 2008",
        occupation:"Beginner",
        joined:"octomber 2024",
        twitter:"@Azizbek",
        facebook:"Azizbek.uz",
        gitHub:"@Azizbek011",
        project:"12",
        downloads:"100"
    },
    {
        email: "umar@gmail.com",
        password: "12345678",
        name: "Umar",
        username: '@Umarali',
        img: "./img/developer.png",
        story: "Pul uchun barcha narsaga tayyor inson bilan hech qachon do‘stlashma rozi qilishsa seni ham sotadi."
    },
    {
        email: "Joniy@gmail.com",
        password: "Joniy123",
        name: "Joniy",
        username: '@Joniy',
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
let text = document.querySelector('.bio')
let fullNames = document.querySelector()


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
