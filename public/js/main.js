const navBoton = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".navbar-collapse");
const close = document.querySelector(".close");
const closeA = document.querySelector(".closeA");
const closeB = document.querySelectorAll(".closeB");
const schedule = document.querySelector(".content-schedule");
const res = document.querySelector(".res-one");
// const images = document.querySelector(".saudi-img");
const resultA = document.querySelector(".result-one");
// const resultB = document.querySelector(".news__content");
const showScheduleF1 = document.querySelector(".view-scheduleF1");

function navButton(a) {
    a.addEventListener('click', () => {
        navLink.classList.toggle("navbar-nav_visible");
    });
}
navButton(navBoton);
navButton(closeA);
// navBoton.addEventListener('click', () => {
//     navLink.classList.toggle("navbar-nav_visible");
// });

showScheduleF1.addEventListener('click', () => {
    schedule.style.display = "grid";
});

function showRes(a,b) {
    a.addEventListener('click', () => {
        b.style.display = "flex";
    });
};

showRes(resultA, res);
// showRes(resultB, images);

close.addEventListener('click', () => {
    schedule.style.display = "none";
    // res.style.display = "none";
    // schedule.classList.toggle("navbar-nav_visible");
    // navLink.style.display = "none";
    // navLink.classList.toggle("navbar-nav_visible");
});

// closeA.addEventListener('click', () => {
//     navLink.classList.toggle("navbar-nav_visible");
    // navLink.style.transform = "translateX(10px)";
    // navLink.style.transition = "all .3s ease-in-out";
// });

function cc(a, b) {
    a.addEventListener('click', () => {
        // navLink.classList.toggle("navbar-nav_visible");
        b.style.display = "none";
        // images.style.display = "none";
        // navLink.style.transform = "translateX(10px)";
        // navLink.style.transition = "all .3s ease-in-out";
    });
};

cc(closeB[0], res);
// cc(closeB[1], images);



const date = document.querySelector('.date');

date.append(new Date ().getFullYear ());

// const gallery = document.querySelector('.gallery');
// const feed = document.querySelector('.gallery__container');
// const next = document.querySelector('#next');
// const prev = document.querySelector('#prev');

// const token = 'IGQWRNbHlNOGF0UHdsQ21hYXZAkbFg0eng5NjNxVGkyMjUtWVNURHl5ZAmxLZAGItRGd0ZADV5b05mVENfWE1vRDJkN1YxSHE2QUtNQ0szWFVXdHlmUUpaS0pLQ1hLeV9kRk05X19ValFjQUgzMWpZAdHlOcm1GTVdpR3MZD';
// const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=40&access_token=${token}`; 

// fetch(url)
// .then(res => res.json())
// .then(data => CrearHtml(data.data))

// function CrearHtml(data) {
//     for (const img of data) {
//         gallery.innerHTML += `<div class="image overflow">
//                             <img loading="lazy" src="${img.media_url}" alt="#">
//                             <div class="opacity__hover">
//                                 <a href="${img.permalink}" class="caption">
//                                     <p>${img.caption.slice(0,100)}</p>
//                                 </a>
//                             </div>
//                         </div>`;
//     }
// };

// next.addEventListener('click', moveGallery);

// prev.addEventListener('click', moveGallery);

// function moveGallery(e) {
//     if(e.terget.id === 'next' || e.target.parentElement.id === 'next') {
//         feed.scrollLeft += feed.offsetWidth;
//     } else {
//         feed.scrollLeft -= feed.offsetWidth;
//     }
// };


$(function () {
    let appId = '122134103930225454';
    let scopes = 'name, email, user_friends, user_online_presence';
    let btn_login = '<a href="#" id="login" class="fb_btn"><button type="submit"></button></a>';
    let divSession = '<div id="fb-session">'+
                    '<strong></strong>'+
                    '<img>'+
                    '<a href="#" id="logout" class="btn_logout">Cerrar sesión</a>'+
                    '</div>';

     window.fbAsyncInit = function() {
        FB.init({
          appId      : appId,
          status     : true,
          cookie     : true,
          xfbml      : true,
          version    : 'v19.0'
        });
          
        // FB.AppEvents.logPageView();

        FB.getLoginStatus(function(response) {
        statusChangeCallback(response, function() {
            callback(data);
        });
    });
          
      };


function statusChangeCallback(response) {  
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {  
      testAPI();  
    } else {                                 
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }

  function checkLoginState() {               
    FB.getLoginStatus(function(response) {   
      statusChangeCallback(response);
    });
  }

 
  function testAPI() {                      
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', 'GET', {"fields": "id,first_name,email"}, 'access_token=EAAOAqrz0UCoBO9Ueq1r9ehjZCy356YJKjm80IJT15yeehobSYrDuOHH9ETBWmg5ly4y2wx2tqbLrqYULIZC7QIAHAZAhI1rjArBbyQuiKBOdlBq8eGTb4iS6iQ7r6URKojtOqjhm3ybvix6OxdikPRlk5l0EA9GZAcdY70dnOr6LOYmfnW0WYEZC3PkuiVwkMWCx7oSntZAmgZBCSkHzieNqhYQcwZDZD', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

});