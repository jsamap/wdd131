// FNAME AND DNAME IN MESSAGE
let fname = window.localStorage.getItem("fname-tt");
let dname = window.localStorage.getItem("dname-tt");

console.log(`review fname: ${fname} - ${dname}`);

const message = document.getElementById("message");
if (fname !== null){
    message.innerHTML = `We'll be getting in contact with you soon, <b>${fname}<b>.`;
}else {
    message.innerHTML = `We'll be getting in contact with you soon.`;
}

if (dname !== null && dname !== ""){
    message.innerHTML += ` We are looking forward to meet you and <b>${dname}<b>.`;
}else {
    message.innerHTML += ` We are looking forward to meet you and your furry friend.`;
}

// NAV / HAMBURGER
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// FOOTER
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last modification: ${new Date(document.lastModified).toLocaleString('en-US')}`;
