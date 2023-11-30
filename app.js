import { people } from "./data.js";

const randomButton = document.getElementById("random");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const imageElement = document.getElementById("review-image");
const nameElement = document.getElementById("username");
const jobElement = document.getElementById("job-title");
const descriptionElement = document.getElementById("review");

let id = 0;
const peopleLength = people.length;

const setReviewInfo = (id) => {
  imageElement.src = people[id].img;
  nameElement.innerText = people[id].name;
  jobElement.innerText = people[id].job;
  descriptionElement.innerText = people[id].description;
};

// Setting up default values on the DOM
setReviewInfo(4);

// Random Button Functionality
randomButton.addEventListener("click", () => {
  id = Math.floor(Math.random() * peopleLength);

  setReviewInfo(id);
});

// Prev Button Functionality
prevButton.addEventListener("click", () => {
  id = id === 0 ? peopleLength - 1 : id - 1;

  setReviewInfo(id);
});

// Next Button Functionality
nextButton.addEventListener("click", () => {
  id = id === peopleLength - 1 ? 0 : id + 1;

  setReviewInfo(id);
});
