const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  hamburger.classList.toggle("toggle");
});

const nav = document.querySelector("nav");
const home = document.querySelector(".home");

const homeOptions = {};

const homeObserver = new IntersectionObserver(function (entries, homeObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove(".scrolled");
    }
  });
}, homeOptions);

homeObserver.observe(home);

/*-------------------------------QUOTES API SECTION ----------------*/
const quote = document.getElementById("quote-of-day");
const author = document.getElementById("author");
let randomIndex = null;
fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; ++i) {
      randomIndex = Math.floor(Math.random() * i);
    }
    quote.innerHTML = data[randomIndex].text;

    /*-----Checking for Anonymous quotes----*/
    if (data[randomIndex].author == null) {
      author.innerHTML = "Anonymous";
    } else {
      author.innerHTML = data[randomIndex].author;
    }
  });
