const container = document.querySelector(".container");
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Guatemala City Guatemala Temple",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 15",
    area: 11610,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6407-thumb.jpg"
  },
  {
    templeName: "Quetzaltenango Guatemala Temple",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2011, December, 11",
    area: 21085,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-3957-thumb.jpg"
  },
  {
    templeName: "Cobán Guatemala Temple",
    location: "Alta Verapaz, Guatemala",
    dedicated: "2024, June, 9",
    area: 8772,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-47490-thumb.jpg"
  },
  
];

buildCards(temples);

function buildCards(templesArray){
	templesArray.forEach(temple => {
		const h3 = document.createElement('h3');
		h3.textContent = temple.templeName;

		const thLocation = document.createElement('th');
		thLocation.textContent = "Location:";
		const tdLocation = document.createElement('td');
		tdLocation.textContent = temple.location;
		const trLocation = document.createElement('tr');
		trLocation.append(thLocation,tdLocation);
		
		const thDedicated = document.createElement('th');
		thDedicated.textContent = "Dedicated:";
		const tdDedicated = document.createElement('td');
		tdDedicated.textContent = temple.dedicated;
		const trDedicated = document.createElement('tr');
		trDedicated.append(thDedicated,tdDedicated);
		
		const thArea = document.createElement('th');
		thArea.textContent = "Area:";
		const tdArea = document.createElement('td');
		tdArea.textContent = temple.area.toLocaleString('en-US')+" ft²";
		const trArea = document.createElement('tr');
		trArea.append(thArea,tdArea);

		const table = document.createElement('table');
		table.append(trLocation, trDedicated, trArea)

		const img = document.createElement('img');
		img.src = temple.imageUrl;
		img.alt = temple.templeName;
		img.loading = "lazy";
		
		const div = document.createElement('div');
		div.append(h3, table, img);

		container.appendChild(div);
	});
}
function deleteCards(){
	Array.from(container.children).forEach(child => child.remove());
}

const title = document.querySelector("#title");

const homeButton = document.querySelector("#home");
homeButton.addEventListener('click', () => {
	title.textContent = "Home";
	deleteCards();
	buildCards(temples);
});

const oldButton = document.querySelector("#old");
oldButton.addEventListener('click', () => {
	title.textContent = "Old";
	deleteCards();
	const sortedTemples = temples.slice().filter(temple => new Date(temple.dedicated) < new Date("1900"));
	sortedTemples.sort((a, b) => new Date(a.dedicated) - new Date(b.dedicated));
	buildCards(sortedTemples);
});

const newButton = document.querySelector("#new");
newButton.addEventListener('click', () => {
	title.textContent = "New";
	deleteCards();
	const sortedTemples = temples.slice().filter(temple => new Date(temple.dedicated) > new Date("2000"));
	sortedTemples.sort((a, b) => new Date(b.dedicated) - new Date(a.dedicated));
	buildCards(sortedTemples);
});

const largeButton = document.querySelector("#large");
largeButton.addEventListener('click', () => {
	title.textContent = "Large";
	deleteCards();
	const sortedTemples = temples.slice().filter(temple => temple.area > 90000);
	sortedTemples.sort((a, b) => b.area - a.area);
	buildCards(sortedTemples);
});

const smallButton = document.querySelector("#small");
smallButton.addEventListener('click', () => {
	title.textContent = "Small";
	deleteCards();
	const sortedTemples = temples.slice().filter(temple => temple.area < 10000);
	sortedTemples.sort((a, b) => a.area - b.area);
	buildCards(sortedTemples);
});


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last modification: ${new Date(document.lastModified).toLocaleString('en-US')}`;
