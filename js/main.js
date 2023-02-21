let navSplide = new Splide(".splide", {
  arrows: false,
  pagination: false,
  drag: false,
}).mount();

let navItems = document.getElementsByClassName("nav-link");
let skillsHeading = document.getElementById("skills-heading");
let skill01 = document.getElementsByClassName("skill01");
let skill02 = document.getElementsByClassName("skill02");
let skill03 = document.getElementsByClassName("skill03");
let heading = document.getElementById("projectSplideHeading");
let accordion = document.getElementById("projects");
let homeHeading = document.getElementById("home-heading");
let homeText = document.getElementById("home-text");
let homeButtons = document.getElementById("home-buttons-row");
let homeIcons = document.getElementById("contact-list");
let contactHeading = document.getElementById("contact-heading");
let contact01 = document.getElementById("contact01");
let contact02 = document.getElementById("contact02");
let contact03 = document.getElementById("contact03");

homeHeading.classList.toggle("fade01");
homeIcons.classList.toggle("fade01");
homeText.classList.toggle("fade02");
homeButtons.classList.toggle("fade03");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    navSplide.go(parseInt(this.getAttribute("data-splide")));
    if (i == 0) {
      homeHeading.classList.toggle("fade01");
      homeIcons.classList.toggle("fade01");
      homeText.classList.toggle("fade02");
      homeButtons.classList.toggle("fade03");
    } else {
      if (homeHeading.classList.contains("fade01")) {
        homeHeading.classList.remove("fade01");
        homeIcons.classList.remove("fade01");
      }
      if (homeText.classList.contains("fade02")) {
        homeText.classList.remove("fade02");
      }
      if (homeButtons.classList.contains("fade03")) {
        homeButtons.classList.remove("fade03");
      }
    }
    if (i == 1) {
      heading.classList.toggle("fade01");
      accordion.classList.toggle("fade02");
    } else {
      if (heading.classList.contains("fade01")) {
        heading.classList.remove("fade01");
      }
      if (accordion.classList.contains("fade02")) {
        accordion.classList.remove("fade02");
      }
    }
    if (i == 2) {
      skillsHeading.classList.toggle("fade01");
      for (let j = 0; j < skill01.length; j++) {
        skill01[j].classList.toggle("fade02");
        skill02[j].classList.toggle("fade03");
        skill03[j].classList.toggle("fade04");
      }
    } else {
      if (skillsHeading.classList.contains("fade01")) {
        skillsHeading.classList.remove("fade01");
      }
      for (let j = 0; j < skill01.length; j++) {
        if (skill01[j].classList.contains("fade02")) {
          skill01[j].classList.remove("fade02");
        }
        if (skill02[j].classList.contains("fade03")) {
          skill02[j].classList.remove("fade03");
        }
        if (skill03[j].classList.contains("fade04")) {
          skill03[j].classList.remove("fade04");
        }
      }
    }
    if (i == 3) {
      contactHeading.classList.toggle("fade01");
      contact01.classList.toggle("fade02");
      contact02.classList.toggle("fade03");
      contact03.classList.toggle("fade04");
    } else {
      if (contactHeading.classList.contains("fade01")) {
        contactHeading.classList.remove("fade01");
      }
      if (contact01.classList.contains("fade02")) {
        contact01.classList.remove("fade02");
      }
      if (contact02.classList.contains("fade03")) {
        contact02.classList.remove("fade03");
      }
      if (contact03.classList.contains("fade04")) {
        contact03.classList.remove("fade04");
      }
    }
  });
}

let projectButton = document.getElementById("project-btn");
projectButton.addEventListener("click", function () {
  i = this.getAttribute("data-splide");
  navSplide.go(parseInt(this.getAttribute("data-splide")));
  if (i == 1) {
    heading.classList.toggle("fade01");
    accordion.classList.toggle("fade02");
  }
});

// let projects = document.getElementsByClassName("project-link");
// for (let i = 0; i < projects.length; i++) {
//   projects[i].addEventListener("click", function () {
//     projectSplide.go(parseInt(this.getAttribute("data-project")));
//   });
// }

// let bookSplide = new Splide(".splide-3", {
//   perPage: 2,
// }).mount();
