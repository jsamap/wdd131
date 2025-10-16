// CLICK EVENT
document.getElementById("send").onclick = function () {

    const fname = document.getElementById("fname");
    const dname = document.getElementById("dname");

    console.log(`review fname: ${fname} - ${dname}`);

    localStorage.setItem("fname-tt", fname.value);
    localStorage.setItem("dname-tt", dname.value);
};

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
