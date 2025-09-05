// select the DOM elements for output
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last modification: ${new Date(document.lastModified).toLocaleString('en-US')}`;