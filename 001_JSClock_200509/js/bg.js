const UNSPLASH_API_KEY = "lmEUOT0pZfzT1_6op2jfPocFbaLRnfm3L_jnGat0F-g";
  
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const body = document.querySelector("body"),
  locationContainer = document.querySelector(".js-location span");

function loadBackground() {
  const savedImage = localStorage.getItem("bg");
  if (savedImage === null) {
    getBackground();
  } else {
    const parsedImage = JSON.parse(savedImage);
    const today = new Date();
    if (today > parsedImage.expiresOn) {
      getBackground();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${
        parsedImage.url
      })`;
      locationContainer.innerHTML = `${parsedImage.name}`;
    }
  }
}

function saveBackground(imageUrl, name) {
  const savedImage = localStorage.getItem("bg");
  if (savedImage !== null) {
    localStorage.removeItem("bg");
  }
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const imageObject = {
    url: imageUrl,
    expiresOn: expirationDate,
    name:name
  };
  localStorage.setItem("bg", JSON.stringify(imageObject));
  loadBackground();
}

function getBackground() {
  fetch(UNSPLASH_URL)
    .then(response => response.json())
    .then(json => {
      if (json.location.name != null && json.urls.full != null) {
        const fullUrl = json.urls.full;
        const location = json.location;
        const name = location.name;
        console.log(name);
        saveBackground(fullUrl, name);
      } else {
        getBackground();
      }
    });
}

function init() {
  loadBackground();
}

init();
