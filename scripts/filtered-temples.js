const currentyear = document.querySelector('#currentyear');
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.querySelector('nav');
hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        hamburgerBtn.textContent = '✖';
    } else {
        hamburgerBtn.textContent = '☰';
    }
});

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
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    },
    {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
];

createTempleCard(temples);

const oldLink = document.querySelector("#Old");
oldLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0].trim()) < 1900));
});
const newLink = document.querySelector("#New");
newLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0].trim()) > 2000));
});
const largeLink = document.querySelector("#Large");
largeLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});
const smallLink = document.querySelector("#Small");
smallLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area <= 10000));
});

function createTempleCard(temples) {
    document.querySelector(".temples").innerHTML = "";
    temples.forEach((temple) => {
        let templeCard = document.createElement('section');
        let templeName = document.createElement('h3');        
        let templeLocation = document.createElement('p');
        let templeDedicated = document.createElement('p');
        let templeArea = document.createElement('p');
        let templeImage = document.createElement('img');

        templeName.textContent = temple.templeName;
        templeLocation.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        templeDedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        templeArea.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        templeImage.setAttribute('src', temple.imageUrl);
        templeImage.setAttribute('alt', `Image of ${temple.templeName}`);
        templeImage.setAttribute('loading', 'lazy');


        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedicated);
        templeCard.appendChild(templeArea);
        templeCard.appendChild(templeImage);

        document.querySelector(".temples").appendChild(templeCard);
    });
}
