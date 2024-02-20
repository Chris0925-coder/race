
// const navBoton = document.querySelector(".navbar-toggler");
// const navLink = document.querySelector(".off");
const close = document.querySelector(".close");
const schedule = document.querySelector(".content-schedule");
const showScheduleF1 = document.querySelector(".view-scheduleF1");

// navBoton.addEventListener('click', () => {
//     navLink.classList.toggle("hidden-nav");
// });

showScheduleF1.addEventListener('click', () => {
    schedule.style.display = "grid";
});

close.addEventListener('click', () => {
    schedule.style.display = "none";
});