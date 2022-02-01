// People objects
const people = [
  {
    name: "Awinita Eirwen",
    job: "Marriage & Family Therapist",
    description:
      "Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.",
    img: "./imgs/1.jpg",
  },
  {
    name: "Juliana Bongani",
    job: "Central Markets Analyst",
    description:
      "Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows.",
    img: "./imgs/2.jpg",
  },
  {
    name: "Lana Nikolaj",
    job: "Dynamic Web Engineer",
    description:
      "New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may off our regular country towards adapted cheered.",
    img: "./imgs/3.jpg",
  },
  {
    name: "Elžbieta Jožica",
    job: "Corporate Resonance Strategist",
    description:
      "Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected its mrs literature. Behaviour new set existence dashwoods. It satisfied to mr commanded consisted disposing engrossed. Tall snug do of till on easy. Form not calm new fail.",
    img: "./imgs/4.jpg",
  },
  {
    name: "Nereus Jeannie",
    job: "Human Configuration Developer",
    description:
      "Sex reached suppose our whether. Oh really by an manner sister so. One sportsman tolerably him extensive put she immediate. He abroad of cannot looked in. Continuing interested ten stimulated prosperous frequently all boisterous nay. Of oh really he extent horses wicket.",
    img: "./imgs/5.jpg",
  },
  {
    name: "Arn Rashmi",
    job: "National Quality Director",
    description:
      "Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only head busy it. Afford son she had lively living. Tastes lovers myself too formal season our valley boy. Lived it their their walls might to by young.",
    img: "./imgs/6.jpg",
  },
];

// Buttons list
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Image,Name,Job,Description Elements

const imageElement = document.querySelector("img");
// console.log(imageElement);
const nameElement = document.querySelector("h5");
console.log(nameElement);
const jobElement = document.querySelector("h6");
// console.log(jobElement);
const descriptionElement = document.querySelector("p");
// console.log(descriptionElement);

// Id
let id = 12;

// Main App
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("left")) {
      id--;
      if (id <= 0 || id > 6) {
        id = 6;
      }
      if (id == 1) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
        // id--;
      }
      if (id == 2) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
        // id--;
      }
      if (id == 3) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
        // id--;
      }
      if (id == 4) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
        // id--;
      }
      if (id == 5) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
        // id--;
      }
      if (id == 6) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
        // id--;
      }
    } else if (e.currentTarget.classList.contains("right")) {
      id++;
      if (id <= 0 || id > 6) {
        id = 1;
      }
      if (id == 1) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
      }
      if (id == 2) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
      }
      if (id == 3) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
      }
      if (id == 4) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
      }
      if (id == 5) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
      }
      if (id == 6) {
        console.log(id);
        imageElement.setAttribute("src", people[id - 1].img);
        nameElement.innerText = people[id - 1].name;
        jobElement.innerText = people[id - 1].job;
        descriptionElement.innerText = people[id - 1].description;
      }
    }
    if (e.currentTarget.classList.contains("random")) {
      function randomNumber() {
        number = Math.floor(Math.random() * 6 + 1);
        console.log(number);
        imageElement.setAttribute("src", people[number - 1].img);
        nameElement.innerText = people[number - 1].name;
        jobElement.innerText = people[number - 1].job;
        descriptionElement.innerText = people[number - 1].description;
      }
      randomNumber();
    }
  });
});
