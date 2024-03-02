const navBoton = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".navbar-collapse");
const close = document.querySelector(".close");
const closeA = document.querySelector(".closeA");
const closeB = document.querySelector(".closeB");
const schedule = document.querySelector(".content-schedule");
const res = document.querySelector(".res-one");
const resultA = document.querySelector(".result-one");
const showScheduleF1 = document.querySelector(".view-scheduleF1");

navBoton.addEventListener('click', () => {
    navLink.classList.toggle("navbar-nav_visible");
});

showScheduleF1.addEventListener('click', () => {
    schedule.style.display = "grid";
});

function showRes(a) {
    resultA.addEventListener('click', () => {
        a.style.display = "flex";
    });
};

showRes(res);

close.addEventListener('click', () => {
    schedule.style.display = "none";
    // res.style.display = "none";
    // schedule.classList.toggle("navbar-nav_visible");
    // navLink.style.display = "none";
    // navLink.classList.toggle("navbar-nav_visible");
});

closeA.addEventListener('click', () => {
    navLink.classList.toggle("navbar-nav_visible");
    // navLink.style.transform = "translateX(10px)";
    // navLink.style.transition = "all .3s ease-in-out";
});

closeB.addEventListener('click', () => {
    // navLink.classList.toggle("navbar-nav_visible");
    res.style.display = "none";
    // navLink.style.transform = "translateX(10px)";
    // navLink.style.transition = "all .3s ease-in-out";
});


