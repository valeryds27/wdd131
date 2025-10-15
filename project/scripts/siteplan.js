document.addEventListener("DOMContentLoaded", function () {
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
})

const homeLink = document.querySelector("#Home");
homeLink.addEventListener("click", () => {
    window.location.href = "siteplan.html";
});

const areasLink = document.querySelector("#Areas");
areasLink.addEventListener("click", () => {
    window.location.href = "areas.html";
});

const galleryLink = document.querySelector("#Gallery");
galleryLink.addEventListener("click", () => {
    window.location.href = "gallery.html";
});

const shareLink = document.querySelector("#Share");
shareLink.addEventListener("click", () => {
    window.location.href = "share.html";
});

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const currentyear = document.querySelector('#currentyear');
const today = new Date();
currentyear.innerHTML = today.getFullYear();

const wardsContainer = document.querySelector(".wards");
if (wardsContainer) {
const ward = [
    {
      name: "Cayhuayna",
      city: "Huánuco, Pillcomarca",
      months: "6 months",
      companions: "Sister Azabache, Sister Arenas",
      imageUrl: "images/cayhuayna.webp"
    },
    {
      name: "La Florida",
      city: "Huancayo, Pio Pata",
      months: "1.5 months",
      companions: "Sister Paredes",
      imageUrl: "images/laflorida.webp"
    },
    {
      name: "Chupaca",
      city: "Huancayo, Chupaca",
      months: "3 months",
      companions: "Sister Vargas, Sister Sanchez",
      imageUrl: "images/chupaca.webp"
    },
    {
      name: "Columna Pasco",
      city: "Columna Pasco, Cerro de Pasco",
      months: "4.5 meses",
      companions: "Sister Malasquez, Sister Curinuqui",
      imageUrl: "images/pasco.webp"
    },
    {
      name: "Mariscal Castilla",
      city: "Huancayo, Huancayo",
      months: "1.5 months",
      companions: "Sister Baño",
      imageUrl: "images/castilla.webp"
    },
    {
      name: "Aucayacu",
      city: "Aucayacu, Aucayacu",
      months: "1.5 months",
      companions: "Sister Leyva",
      imageUrl: "images/aucayacu.webp"
    },
  ];

  WardCard(ward);
}

function WardCard(wards) {
    document.querySelector(".wards").innerHTML = "";
    wards.forEach((ward) => {
        let wardCard = document.createElement('section');
        let wardName = document.createElement('h3');        
        let wardCity = document.createElement('p');
        let wardMonths = document.createElement('p');
        let wardCompanions = document.createElement('p');
        let wardImage = document.createElement('img');

        wardName.textContent = ward.name;
        wardCity.innerHTML = `<span class="label">Location:</span> ${ward.city}`;
        wardMonths.innerHTML = `<span class="label">Months serving:</span> ${ward.months}`;
        wardCompanions.innerHTML = `<span class="label">Companions:</span> ${ward.companions}`;
        wardImage.setAttribute('src', ward.imageUrl);
        wardImage.setAttribute('alt', `Image of ${ward.name}`);
        wardImage.setAttribute('loading', 'lazy');


        wardCard.appendChild(wardName);
        wardCard.appendChild(wardCity);
        wardCard.appendChild(wardMonths);
        wardCard.appendChild(wardCompanions);
        wardCard.appendChild(wardImage);

        document.querySelector(".wards").appendChild(wardCard);
    });
}

const memoriesContainer = document.querySelector(".memories");
if (memoriesContainer) {

  const memorie = [
    {
      name: "memorie-1",
      imageUrl: "images/memorie-1.webp"
    },
    {
      name: "memorie-2",
      imageUrl: "images/memorie-2.webp"
    },
    {
      name: "memorie-3",
      imageUrl: "images/chupaca.webp"
    },
    {
      name: "memorie-4",
      imageUrl: "images/pasco.webp"
    },
    {
      name: "memorie-5",
      imageUrl: "images/castilla.webp"
    },
    {
      name: "memorie-6",
      imageUrl: "images/aucayacu.webp"
    },
  ];

  MemorieCard(memorie);
}

function MemorieCard(memorie) {
    document.querySelector(".memories").innerHTML = "";
  memorie.forEach((memorie) => {
        let memorieImage = document.createElement('img');

        memorieImage.setAttribute('src', memorie.imageUrl);
        memorieImage.setAttribute('alt', `Image of ${memorie.name}`);
        memorieImage.setAttribute('loading', 'lazy');


        document.querySelector(".memories").appendChild(memorieImage);
    });
}

function setLastVisited(pageName) {
  localStorage.setItem('lastVisitedPage', pageName);
}

function showLastVisited() {
  const lastVisited = localStorage.getItem('lastVisitedPage');
  if (lastVisited) {
    const lastVisitedElement = document.querySelector('#lastVisitedPage');
    if (lastVisitedElement) {
      lastVisitedElement.textContent = `Última página visitada: ${lastVisited}`;
    }
  }
}

homeLink.addEventListener("click", () => {
  setLastVisited('Home');
  window.location.href = "siteplan.html";
});

areasLink.addEventListener("click", () => {
  setLastVisited('Areas');
  window.location.href = "areas.html";
});

galleryLink.addEventListener("click", () => {
  setLastVisited('Gallery');
  window.location.href = "gallery.html";
});

shareLink.addEventListener("click", () => {
  setLastVisited('Share');
  window.location.href = "share.html";
});

document.addEventListener("DOMContentLoaded", showLastVisited);