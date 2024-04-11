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
          version    : '{v19.0}'
        });
          
        // FB.AppEvents.logPageView();

        FB.getLoginStatus(function(response) {
        statusChangeCallback(response, function() {
            // callback(data);
        });
    });
          
      };

      function statusChangeCallback(response, callback) {
        // console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
          // testAPI();
          getFbData();  
        } else {
            callback(false);                         
          // document.getElementById('status').innerHTML = 'Please log ' +
            // 'into this webpage.';
        }
      // }

    // FB.login(function(response) {
    //       if (response.authResponse) {
    //            console.log('Welcome!  Fetching your information.... ');
    //            FB.api('/me', function(response) {
    //             $('#login').after(divSession);
    //             $('#login').remove();
    //             $('#facebook-session strong').text("Bienvenido: "+ response.name);
    //             $('#facebook-session img').attr('src','http://graph.facebook.com/'+response.id+'/picture?type=large');
    //           console.log('Successful login for: ' + response.name);
    //           // document.getElementById('status').innerHTML =
                // 'Thanks for logging in, ' + response.name + '!';
            // })
               // FB.api('/me', {fields: 'name, email'}, function(response) {
               //     document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
               // });
    //       } else { 
    //            console.log('User cancelled login or did not fully authorize.'); 
           }
    // });

    function checkLoginState(response,callback) {             
        FB.getLoginStatus(function(response) {   
          statusChangeCallback(response, function(data) {
            callback(data);
          });

        });
    };

    function getFbData() {
        // if (response.authResponse) {
        // console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            $('#login').after(divSession);
            $('#login').remove();
            $('#facebook-session strong').text("Bienvenido: "+ response.name);
            $('#facebook-session img').attr('src','http://graph.facebook.com/'+response.id+'/picture?type=large');
          console.log('Successful login for: ' + response.name);
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        })
    } 
        // else {
        //     console.log('User cancelled login or did not fully authorize.');
        // }
    // }

    function fbLogin() {
        checkLoginState((response) => {
            if (!response){
                FB.login(function(response) {
                    if (response.status === 'connected')
                        getFbData();
                    }, {scopes: scopes});
            }
        });
    }

    $(document).on('click', '#login', function(e) {
        e.preventDefault();
        fbLogin();
    })
});


const date = document.querySelector('.date');

date.append(new Date ().getFullYear ());