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


$(function () {
    let appId = '985895733055530';
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
            // callback(data);
        });
    });
          
      };


function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }


  function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '985895733055530',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v19.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };
 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

});