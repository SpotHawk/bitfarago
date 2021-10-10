function Keres() {
    let show = document.querySelectorAll(".show:checked");
    let hide = document.querySelectorAll(".hide:checked");
    let lista = document.querySelector("#filmek");
    let elemek = document.querySelectorAll("LI");

    if (elemek.length != 0) {
        for (let i = 0; i < elemek.length; i++) {
            elemek[i].remove();        
        }
    }

    if (show.length != 0) {
        for (let j = 0; j < Filmek.length; j++) {
            if (EllenorzesPozitiv(Filmek[j].mufajok, show) == true && EllenorzesNegativ(Filmek[j].mufajok, hide) == false) {
                let adatok = document.createElement("LI");
                adatok.innerHTML = Filmek[j].nev + " - " + Filmek[j].megjelenes + ";";
                lista.appendChild(adatok);
            }                           
        }
    }
}

function EllenorzesPozitiv(film, show) {
    let vane = false;
    let ih = false;
    for (let i = 0; i < show.length; i++) {
        if (!film.includes(show[i].value)) {
            vane = true;   
        }    
    }
    if (vane == false) {
        ih = true;
    }
    return ih;
}

function EllenorzesNegativ(kedveltmufajok, nemkedveltmufajok) {
    let ih = false;
    for (let i = 0; i < kedveltmufajok.length; i++) {
        for (let j = 0; j < nemkedveltmufajok.length; j++) {
            if (kedveltmufajok[i] == nemkedveltmufajok[j].value) {
                ih = true;
            }            
        }        
    }
    return ih;
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
