// TRIPS
const container = document.querySelector(".container");
const trips = [
	{
		name: "Fuentes del Pacaya",
		description: "Visit this waterfall at the foothill of the volcano.",
		location: "San Vicente, Escuintla",
		date: "June 1, 2024",
		features: "Hike, waterfall, volcano",
		imageUrl:
			"images/t-pacaya.webp"
	},
	{
		name: "Laguna El Pino",
		description: "A quiet lagoon where you can rest and swim.",
		location: "Barberena, Santa Rosa",
		date: "August 7, 2025",
		features: "Swim, paddleboard, boat",
		imageUrl:
			"images/t-pino-boat.webp"
	},
	{
		name: "Parque La Cerra",
		description: "Become the king of the hill, wether you hike or bike.",
		location: "San Miguel, Guatemala",
		date: "September 14, 2024",
		features: "Hiking, biking, views",
		imageUrl:
			"images/t-cerra-bikes.webp"
	}
];

buildCards(trips);

function buildCards(tripsArray){
	tripsArray.forEach(trip => {
		const h3 = document.createElement('h3');
		h3.textContent = trip.name;

		const p = document.createElement('p');
		p.textContent = trip.description;
		p.classList.add("desc");

		const img = document.createElement('img');
		img.src = trip.imageUrl;
		img.alt = trip.name;
		img.loading = "lazy";
		const divImg = document.createElement('div');
		divImg.classList.add("card-child");
		divImg.appendChild(img);

		const btn = document.createElement('button');
		btn.textContent = "SEE MORE TRIPS";
		btn.classList.add("more-btn");
		const divBtn = document.createElement('div');
		divBtn.classList.add("card-child");
		divBtn.appendChild(btn);

		const div = document.createElement('div');
		div.classList.add("container-div")
		div.append(h3, p, divImg, divBtn);

		container.appendChild(div);
	});
}

// BUTTONS
document.getElementById("join").onclick = function () {
	location.href = "contact";
};

const btns = document.querySelectorAll('.more-btn');
btns.forEach(button => {
	button.addEventListener('click', () => {
		location.href = "trips";
  	});
});


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
