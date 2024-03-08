const navBoton = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".navbar-collapse");
const close = document.querySelector(".close");
const closeA = document.querySelector(".closeA");
const closeB = document.querySelectorAll(".closeB");
const schedule = document.querySelector(".content-schedule");
const res = document.querySelector(".res-one");
const images = document.querySelector(".saudi-img");
const resultA = document.querySelector(".result-one");
const resultB = document.querySelector(".news__content");
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
showRes(resultB, images);

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
cc(closeB[1], images);