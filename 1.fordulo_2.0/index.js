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