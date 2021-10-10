const kepek = document.querySelectorAll("IMG");

function Csapatrol() {
    window.location.href = "csapat.html";
}
function Filmrol() {
    window.location.href = "filmajanlo.html";
}
function CsapatBlurAdd() {
    kepek[0].classList.add("blur");
}
function FilmBlurAdd() {
    kepek[1].classList.add("blur");
}
function CsapatBlurRemove() {
    kepek[0].classList.remove("blur");
}
function FilmBlurRemove() {
    kepek[1].classList.remove("blur");
}
const oratxt = document.querySelector("#hour");
const perctxt = document.querySelector("#minute");
const masodperc = document.querySelector("#second");

let ido = new Date();
masodperc.innerHTML = ido.getSeconds();
perctxt.innerHTML = ido.getMinutes();
oratxt.innerHTML = ido.getHours();

setInterval(() => {
    let ido = new Date();
    masodperc.innerHTML = ido.getSeconds();
    perctxt.innerHTML = ido.getMinutes();
    oratxt.innerHTML = ido.getHours();
}, 1000);