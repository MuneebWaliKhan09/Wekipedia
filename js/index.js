
//  random quotes generator

let rand = (Math.floor(Math.random() * 6));

let arr = [

    "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",

    "When we have respect for ourselves and others, we gravitate towards connections that encourage that. ",

    "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful",

    "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.",

    "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",

    "No one would have crossed the ocean if he could have gotten off the ship in the storm.",

    "The true wealth of a nation lies not in it's gold or silver but in it's learning, wisdom and in the uprightness of its sons.",
][rand];

let authorName = ["Muneeb shah", "Simeon Lindstrom", "Michelle Obama", " Wayne Gretzky", " L. R. Ellert", " Charles Kettering", " Kahlil Gibran"][rand]


let gen = document.getElementById("gen");
let madeby = document.getElementById("madeby");
let quote = document.getElementById("quote");

gen.onclick = function () {
    let a = gen.textContent = "Generating..."
    setTimeout(() => {
        gen.textContent = "Generate Quote"
        quote.textContent = arr;
        madeby.textContent = authorName;
        gen.disabled = true;
        setTimeout(() => {
            location.reload();
        }, 15000);
    }, 2000);
}




// article likes counts


let likes = document.getElementById("likes");
let dislikes = document.getElementById("dislike");
let disthumb = document.getElementById("disthumb");
let likThum = document.getElementById("likThum");

function storeValues() {
  if (localStorage.likes && localStorage.dislikes) {
    likes.textContent = localStorage.likes;
    dislikes.textContent = localStorage.dislikes;
  } else {
    localStorage.likes = 0;
    localStorage.dislikes = 0;
  }
}

function updateLikes() {
  localStorage.likes = Number(localStorage.likes) + 1;
  likes.textContent = localStorage.likes;
}

function updateDislikes() {
  localStorage.dislikes = Number(localStorage.dislikes) + 1;
  dislikes.textContent = localStorage.dislikes;
}

storeValues();

disthumb.addEventListener('click', function () {
  updateDislikes();
});

likThum.addEventListener('click', function() {
  updateLikes();
});
























//  small screen side bar

let mySidenav = document.getElementById("mySidenav");
let openNav = document.getElementById("openNav");


openNav.onclick = function () {

    if (mySidenav.style.width <= '0px') {
        mySidenav.style.width = '250px';
    }
    else {
        mySidenav.style.width = '0px'
    }
}

let closeNav = () => {

    mySidenav.style.width = "0px"

}




//  question section modals generators

let addans = document.getElementById("addans");

addans.addEventListener('click', function () {

    var inputElements = document.getElementsByClassName('value');
    let modal = document.querySelector("#innermodal");
    let closebtn = document.getElementById("closebtn");


    for (var i in inputElements) {
        if (inputElements[i].checked) {
            let d = inputElements[i].nextElementSibling;
            let answer = "Muneeb wali";
            if (d.textContent.match(answer)) {
                modal.textContent = "Wohoo..🥳🥳 Correct answer ";
                modal.style.backgroundColor = "green"
                modal.style.color = "white"
                setTimeout(() => {
                    location.reload();
                }, 2000)


            }
            else {
                modal.textContent = "Wrong Answer 😌😌!!";
                modal.style.backgroundColor = "red"
                modal.style.color = "white"
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
            break;
        }
    }
})


// preloader

let preloader = document.getElementById("pr");

window.addEventListener('load', function () {
    preloader.style.display = "none";
});








// side bar items alert message 


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)

  alertPlaceholder.style.position = "absolute"
  alertPlaceholder.style.width = "76%"
  setInterval(() => {
    location.reload();
    alertPlaceholder.remove();    

  }, 1000);



}

const alertTrigger = document.querySelectorAll('#liveAlertBtn')

for(let i in alertTrigger){

        if (alertTrigger) {
            alertTrigger[i].addEventListener('click', () => {
              alert('This Content is Unavailable Comming Soon...', 'danger')
            })
          }
    }
