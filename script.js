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
 // const home = document.querySelector(".home");

// const homeOptions = {};

/* const homeObserver = new IntersectionObserver(function (entries, homeObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove(".scrolled");
    }
  });
}, homeOptions);
homeObserver.observe(home);  */

window.addEventListener("scroll", function(){
  nav.classList.add("scrolled");
})



/*-------------------------------QUOTES API SECTION ----------------*/
const quote = document.getElementById("quote-of-day");
const author = document.getElementById("author");
const urlQuote = "https://type.fit/api/quotes";
let randomIndex = null;

const inspirationalQuotes = ()=>{fetch(urlQuote)
                .then(function (response) {
                  return response.json();})
                  .then(function (data) {
  for (let i = 0; i < data.length; i++) {
    randomIndex = Math.floor(Math.random() * i);
  }
  quote.innerHTML = `"${data[randomIndex].text}"`;

  /*-----Checking for Anonymous quotes----*/
  if (data[randomIndex].author == null) {
    author.innerHTML = "Anonymous";
  } else {
    author.innerHTML =`... ${data[randomIndex].author}`;
  }
})}

setInterval(inspirationalQuotes, 10000);

;

 const thankYouMessage = document.querySelector("#thank-you-message");

  document.querySelector('#formdata').addEventListener('submit', event =>{  
    event.preventDefault();  
    const name = document.querySelector('#name').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    const url = 'https://7wcob29xb3.execute-api.us-east-1.amazonaws.com/dev/contact-us/';
    var  msg = {
       name : name,    
       subject : subject,
       message : message
  };  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(msg),
    })
    .then(response => response.json())
    .then(data=> {   
      thankYouMessage.classList.add('show');
      document.getElementById("formdata").reset();        
      })
    .catch((error) => {
      console.error('Error:', error);
    });
})


/* ---------------Date for Copyright ID------------------------------*/
 
const yearId = document.getElementById("yeardate");
const yearDate =  new Date();

yearId.innerHTML = yearDate.getFullYear();



/* ---------------Page Counter------------------------------*/
var counter = document.getElementById("counter");
count = 0;

window.addEventListener('load', function(){

  fetch('https://qb16pblecc.execute-api.us-east-1.amazonaws.com/dev/counter', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(),
    })
    .then(response => response.json())
    .then(data=> {   
      count= data.body.visitorsCount;  
      counter.innerHTML = count;      
      })
    .catch((error) => {
      console.error('Error:', error);
    });   
});



  
     
     
  

 
