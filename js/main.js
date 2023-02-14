let navSplide = new Splide(".splide", {
  arrows: false,
  pagination: false,
}).mount();

let navItems = document.getElementsByClassName("nav-link");
let skill01 = document.getElementsByClassName("skill01");
let skill02 = document.getElementsByClassName("skill02");
let skill03 = document.getElementsByClassName("skill03");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    navSplide.go(parseInt(this.getAttribute("data-splide")));
    if (i == 2) {
      for (let j = 0; j < skill01.length; j++) {
        skill01[j].classList.toggle("fade01");
        skill02[j].classList.toggle("fade02");
        skill03[j].classList.toggle("fade03");
      }
    } else {
      for (let j = 0; j < skill01.length; j++) {
        if (skill01[j].classList.contains("fade01")) {
          skill01[j].classList.remove("fade01");
        }
        if (skill02[j].classList.contains("fade02")) {
          skill02[j].classList.remove("fade02");
        }
        if (skill03[j].classList.contains("fade03")) {
          skill03[j].classList.remove("fade03");
        }
      }
    }
  });
}

let mantaSplide = new Splide(".manta-splide", {
  pagination: false,
  // height: "50%",
  // width: "70%",
}).mount();

let projectButton = document.getElementById("project-btn");
projectButton.addEventListener("click", function () {
  navSplide.go(parseInt(this.getAttribute("data-splide")));
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
