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
	},
	{
		name: "Finca El Zapote",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab! Harum nobis, ducimus illo laborum assumenda esse quisquam facere illum.",
		location: "Rodeo, Escuintla",
		date: "December 28, 2024",
		features: "Bike, swim, row",
		imageUrl:
			"images/t-zapote.webp"
	},
	{
		name: "Río Sachichá",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab! Harum nobis, ducimus illo laborum assumenda esse quisquam facere illum.",
		location: "Cobán, Alta Verapaz",
		date: "November 1, 2024",
		features: "Bike, swim, row",
		imageUrl:
			"images/t-sachicha-camping.webp"
	},
	{
		name: "Río Sachichá",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab! Harum nobis, ducimus illo laborum assumenda esse quisquam facere illum.",
		location: "Cobán, Alta Verapaz",
		date: "November 1, 2024",
		features: "Bike, swim, row",
		imageUrl:
			"images/t-sachicha.webp"
	},
	{
		name: "Parque Naciones Unidas",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab! Harum nobis, ducimus illo laborum assumenda esse quisquam facere illum.",
		location: "Villa Nueva, Guatemala",
		date: "September 18, 2025",
		features: "Hike, bike, landscapes",
		imageUrl:
			"images/t-naciones-bikes.webp"
	},
	{
		name: "Finca Laguacate",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab! Harum nobis, ducimus illo laborum assumenda esse quisquam facere illum.",
		location: "San Vicente, Escuintla",
		date: "October 22, 2024",
		features: "Swim, row, grill",
		imageUrl:
			"images/t-laguacate.webp"
	},
	{
		name: "Parque La Cerra",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab! Harum nobis, ducimus illo laborum assumenda esse quisquam facere illum.",
		location: "San Miguel, Guatemala",
		date: "July 14, 2025",
		features: "Hiking, biking, views",
		imageUrl:
			"images/t-cerra-2-sky.webp"
	}
];

buildCards(trips);

function buildCards(tripsArray){
	tripsArray.forEach(trip => {
		const h3 = document.createElement('h3');
		h3.textContent = trip.name;

		const thLocation = document.createElement('th');
		thLocation.textContent = "Location:";
		const tdLocation = document.createElement('td');
		tdLocation.textContent = trip.location;
		const trLocation = document.createElement('tr');
		trLocation.append(thLocation,tdLocation);
		
		const thDate = document.createElement('th');
		thDate.textContent = "Date:";
		const tdDate = document.createElement('td');
		tdDate.textContent = trip.date;
		const trDate = document.createElement('tr');
		trDate.append(thDate,tdDate);
		
		const thFeatures = document.createElement('th');
		thFeatures.textContent = "Features:";
		const tdFeatures = document.createElement('td');
		tdFeatures.textContent = trip.features;
		const trFeatures = document.createElement('tr');
		trFeatures.append(thFeatures,tdFeatures);

		const table = document.createElement('table');
		table.append(trLocation, trDate, trFeatures)

		const img = document.createElement('img');
		img.src = trip.imageUrl;
		img.alt = trip.name;
		img.loading = "lazy";
		
		const div = document.createElement('div');
		div.append(h3, table, img);

		container.appendChild(div);
	});
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
