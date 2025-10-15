// REVIEWS SUBMITTED
const reviewsSumbitted = document.getElementById("submitted");

let numReviews = Number(window.localStorage.getItem("reviewsSubmitted-ls")) || 0;

numReviews++;
reviewsSumbitted.textContent = numReviews;

localStorage.setItem("reviewsSubmitted-ls", numReviews);


// FOOTER
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last modification: ${new Date(document.lastModified).toLocaleString('en-US')}`;
