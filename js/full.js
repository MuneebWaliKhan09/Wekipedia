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


let preloader = document.getElementById("pr");

window.addEventListener('load', function(){
    preloader.style.display = "none";
})


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
  }, 1000);
}

const alertTrigger = document.querySelectorAll('#liveAlertBtn')

for(let i in alertTrigger){

        if (alertTrigger) {
            alertTrigger[i].addEventListener('click', () => {
              alert('This Content is Unavailable Comming Soon...', 'primary')
            })
          }
    }

