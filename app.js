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
        number: "+998 88 703 13 86",
        company: "Sfera Academy",
        website: "www.LoginPage",
        awards: "5",
        interested: "Design",
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
        number: "+998 88 137 20 09",
        workCompany: "zzz Academy",
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
        story: "Pul uchun barcha narsaga tayyor inson bilan hech qachon do‘stlashma rozi qilishsa seni ham sotadi.",
        followers: "689",
        following: "909",
        fullName: "Umar alijonov",
        number: "+998 88 909 23 89",
        workCompany: "zzz Academy",
        website: "www.WebDew",
        awards: "20",
        interested: "Design, Figma",
        linkedin:"Umar6789",
        instagram:"@Umar.987",
        blog:"@Umar_dev",
        document:"90",
        googleEmail:"Umar@gmail.com",
        location:"Uzbekistan, Karshi",
        dateBirth:"November - 06, 2008",
        occupation:"Middle",
        joined:"MArch 2024",
        twitter:"@Umar",
        facebook:"Umar.uz",
        gitHub:"@Umarshax678",
        project:"90",
        downloads:"1029"
    },
    {
        email: "Joniy@gmail.com",
        password: "Joniy123",
        name: "Joniy",
        username: '@Joniy',
        img: "./img/dev.png",
        story: "Irodang kuchli bo‘lmasa, kuching senga yordam berolmaydi.",
        followers: "654",
        following: "6782",
        fullName: "Joniy",
        number: "+998 88 098 77 77",
        workCompany: "Sfera Academy",
        website: "www.AnonimHack",
        awards: "67",
        interested: "Hack, Linux",
        linkedin:"Joniy",
        instagram:"@Joniy.171",
        blog:"@Joniy_anonim",
        document:"789",
        googleEmail:"Joniy@gmail.com",
        location:"Uzbekistan, Karshi",
        dateBirth:"May - 06, 2000",
        occupation:"Senior",
        joined:"January 2024",
        twitter:"@Joniy",
        facebook:"Joniy.uz",
        gitHub:"@JoniyHackHead",
        project:"789",
        downloads:"3456789"
    },
];


let getEmail = document.querySelector('#email');
let getPassword = document.querySelector('#password');
let getButton = document.querySelector('#btn');
let paragraph = document.querySelector('#paragraph');
let firstName = document.querySelector('.name');
let userName = document.querySelector('.username');
let avatar = document.querySelector('.avatar');
let text = document.querySelector('.bio');
let profFollower=document.querySelector('.followerz')
let profFollowing=document.querySelector('.follow')
let fullNames = document.querySelector('.infoValue');
let emailAdress=document.querySelector('.infoEmail');
let numberPhone=document.querySelector('infoNumber')
let mapLocation= document.querySelector('.infoLocation')
let company= document.querySelector('.infoCompany')
let birthDate= document.querySelector('.infoBirthDate')
let webSite= document.querySelector('.infoWebSite')
let jobOccuption= document.querySelector('.infoOccuption')
let award= document.querySelector('.infoAward')
let joined= document.querySelector('.infoJoin')
let devLiked= document.querySelector('.infoLiked')
let devTwitter= document.querySelector('.infoTwitter')
let divLinkedIn= document.querySelector('.infoLinkedIn')
let divFacebook= document.querySelector('.infoFacebook')
let divInsta= document.querySelector('.infoInsta')
let divGitHub= document.querySelector('.infoGitHub')
let divBlog= document.querySelector('.infoBlog')
let divProject= document.querySelector('.infoProject')
let divDocument= document.querySelector('.infoDocument')
let divDownload= document.querySelector('.infoDownload')

// console.log(emailAdress,fullNames,mapLocation,Company,birthDate,birthDate,webSite,jobOccuption,award,divDownload,divDocument,divProject,divBlog,divGitHub,divInsta,divFacebook,divLinkedIn,devTwitter,devLiked,Joined,);



let getUserInfo = JSON.parse(localStorage.getItem('user'));
console.log(getUserInfo);

if (getUserInfo) {
    if (firstName) firstName.textContent = getUserInfo.name;
    if (userName) userName.textContent = getUserInfo.username;
    if (text) text.textContent = getUserInfo.story;
    if (avatar) avatar.src = getUserInfo.img || "./img/asilbekjon.png";
    if (avatar) avatar.src = getUserInfo.img || "./img/image.png";
    if (avatar) avatar.src = getUserInfo.img || "./img/developer.png";
    if (avatar) avatar.src = getUserInfo.img || "./img/dev.png";
    if (profFollower) profFollower.textContent=getUserInfo.followers
    if (profFollowing) profFollowing.textContent=getUserInfo.following
    if(fullNames) fullNames.textContent=getUserInfo.fullName;
    if(emailAdress) emailAdress.textContent=getUserInfo.googleEmail;
    if(numberPhone) numberPhone.textContent=getUserInfo.number; // bunda xatolik bor
    if(company) company.textContent=getUserInfo.workCompany // bunda xatolik bor
    if (webSite) webSite.textContent=getUserInfo.website
    if (award) award.textContent=getUserInfo.awards
    if (devLiked) devLiked.textContent=getUserInfo.interested
    if (divLinkedIn) divLinkedIn.textContent=getUserInfo.linkedin
    if (divInsta) divInsta.textContent=getUserInfo.instagram
    if (divBlog) divBlog.textContent=getUserInfo.blog
    if (divDocument) divDocument.textContent=getUserInfo.document
    if (mapLocation) mapLocation.textContent=getUserInfo.location
    if (birthDate) birthDate.textContent=getUserInfo.dateBirth
    if (jobOccuption) jobOccuption.textContent=getUserInfo.occupation
    if (joined) joined.textContent=getUserInfo.joined
    if (devTwitter) devTwitter.textContent=getUserInfo.twitter
    if (divFacebook) divFacebook.textContent=getUserInfo.facebook
    if (divProject) divProject.textContent=getUserInfo.project
    if(divDownload) divDownload.textContent=getUserInfo.downloads
    if (divGitHub) divGitHub.textContent=getUserInfo.gitHub
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
