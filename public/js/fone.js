const navBoton = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".navbar-collapse");
const res = document.querySelector(".res-one");
const resTwo = document.querySelector(".res-two");
const resThree = document.querySelector(".res-three");
const resultA = document.querySelector(".result-one");
const resultB = document.querySelector(".result-two");
const resultC = document.querySelector(".result-three");
const closeB = document.querySelectorAll(".closeB");
const closeA = document.querySelector(".closeA");
const resulBah = document.querySelector(".news__content--bahrain");
const resul = document.querySelector(".news__content");
const resulA = document.querySelector(".news__content--australia");
const resulS = document.querySelector(".news__content--susuka");
const imagesBah = document.querySelector(".bahrain-img");
const images = document.querySelector(".saudi-img");
const imagesAus = document.querySelector(".australia-img");
const imagesSu = document.querySelector(".susuka-img");

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

// closeA.addEventListener('click', () => {
//     navLink.classList.toggle("navbar-nav_visible");
// });

function showRes(a,b) {
    a.addEventListener('click', () => {
        b.style.display = "grid";
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
showRes(resulBah, imagesBah);
showRes(resul, images);
showRes(resulA, imagesAus);
showRes(resulS, imagesSu);




close(closeB[0], res);
close(closeB[1], resTwo);
close(closeB[2], resThree);
close(closeB[3], imagesBah);
close(closeB[4], images);
close(closeB[5], imagesAus);
close(closeB[6], imagesSu);