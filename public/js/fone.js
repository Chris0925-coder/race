const navBoton = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".navbar-collapse");
const res = document.querySelector(".res-one");
const resTwo = document.querySelector(".res-two");
const resThree = document.querySelector(".res-three");
const resultA = document.querySelector(".result-one");
const resultB = document.querySelector(".result-two");
const resultC = document.querySelector(".result-three");
const closeB = document.querySelectorAll(".closeB");

navBoton.addEventListener('click', () => {
    navLink.classList.toggle("navbar-nav_visible");
});

function showRes(a,b) {
    a.addEventListener('click', () => {
        b.style.display = "flex";
    });
};

function close(a,b) {
    a.addEventListener('click', () => {
        b.style.display = "none";
    });
};

showRes(resultA, res);
showRes(resultB, resTwo);
showRes(resultC, resThree);

close(closeB[0], res);
close(closeB[1], resTwo);
close(closeB[2], resThree);