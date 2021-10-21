// A hacker aktuális pozíciója
let hackerposition = "";
// A szerverterem bejárata
let bejarat = "";
// A legközelebbi érzékelő
let legkozelebbi = "";
let cellak = [];
// Az érzékelőhelyek
let erzekelokhelyek = [];
// Az érzékelő szenzorok mezői
let tiltottmezok = [];
// A játék véget ért-e
let GameOver = false;
// Elhasználtuk-e már a segítség kérést
let segitseg = false;
// A játék során megtett lépések száma
let lepesekszama = 0;
// A legközelebbi érzékelő X és Y koordinátája
let ErzekeloX = 0;
let ErzekeloY = 0;
// A hacker X és Y koordinátája
let HackerX = 0;
let HackerY = 0;
// A legközelebbi érzékelő távolsága lépésben
let tavolsag = 0;

let erzekelotxt = document.querySelector("#erzekelotxt");

let kezdooldal = document.querySelector("#menu");
let jatekoldal_menu = document.querySelector("#menu2");
let jatekoldal_mezo = document.querySelector("#mezo");

jatekoldal_menu.style.visibility = "hidden";
jatekoldal_mezo.style.visibility = "hidden";

// Játék elemeinek betöltése
function Palya_Elemek() {
    kezdooldal.style.visibility = "hidden";
    jatekoldal_menu.style.visibility = "visible";
    jatekoldal_mezo.style.visibility = "visible";
}

function Uj_jatek() {
    hackerposition = "";
    bejarat = "";
    legkozelebbi = "";
    cellak = [];
    erzekelokhelyek = [];
    tiltottmezok = [];
    GameOver = false;
    segitseg = false;
    lepesekszama = 0;
    messagebox.innerHTML = "";
    erzekelotxt.innerHTML="";
    kezdooldal.style.visibility = "visible";
    jatekoldal_menu.style.visibility = "hidden";
    jatekoldal_mezo.style.visibility = "hidden";
}


function AlapPalya() {
    Palya_Elemek();

    let jatekmezo = document.querySelector("#mezo");
    if (jatekmezo != null && jatekmezo != undefined) {
        jatekmezo.remove();
    }
    jatekmezo = document.createElement("table");
    jatekmezo.id = "mezo";
    document.body.appendChild(jatekmezo);
    jatekoldal_mezo = jatekmezo;

    for (let i = 0; i < 15; i++) {
        const sor = document.createElement("TR");
        for (let j = 0; j < 15; j++) {
            const cella = document.createElement("TD");
            sor.appendChild(cella);
        } 
        jatekmezo.appendChild(sor);
    }

    let tabletr = document.getElementsByTagName("TR");
    let tabletd = document.getElementsByTagName("TD");
    let n = 0;

    cellak = new Array(tabletr.length);
    for (let i = 0; i < cellak.length; i++) {
        cellak[i] = new Array(cellak.length);
        for (let j = 0; j < cellak[i].length; j++) {
            cellak[i][j] = tabletd[n];
            n++;
        }      
    } 
    
    hackerposition = cellak[7][0];
    hackerposition.style.backgroundColor = "red";
    hackerposition.id = "hackpose";
    bejarat = cellak[2][14];
    bejarat.style.backgroundColor = "#323232";
    bejarat.id = "cel";
    hackerposition.style.transition = "background-color .5s ease-in-out";

    cellak[0][14].classList.add("erzekelo");
    cellak[0][0].classList.add("erzekelo");
    cellak[14][0].classList.add("erzekelo");
    cellak[14][14].classList.add("erzekelo");
    cellak[7][7].classList.add("erzekelo");
    cellak[3][4].classList.add("erzekelo");
    cellak[3][10].classList.add("erzekelo");
    cellak[11][4].classList.add("erzekelo");
    cellak[11][10].classList.add("erzekelo");

    erzekelokhelyek = document.querySelectorAll(".erzekelo");
    
    Tilos_Mezok();

    for (let i = 0; i < cellak.length; i++) {
        for (let j = 0; j < cellak[i].length; j++) {
            cellak[i][j].onclick = function () {
                Vizsgalat(cellak[i][j]);
            }            
        }        
    }
}

function RandomPalya() {
    Palya_Elemek();
    
    let jatekmezo = document.querySelector("#mezo");
    if (jatekmezo != null && jatekmezo != undefined) {
        jatekmezo.remove();
    }
    jatekmezo = document.createElement("table");
    jatekmezo.id = "mezo";
    document.body.appendChild(jatekmezo);
    jatekoldal_mezo = jatekmezo;

    // 5 és 15 közötti számok generálása amik a sorok és oszlopok számát fogják meghatározni
    let maxsor = Math.floor(Math.random()*(15-5+1))+5;
    let maxoszlop = Math.floor(Math.random()*(15-5+1))+5;

    for (let i = 0; i < maxsor; i++) {
        let sor = document.createElement("TR");
        for (let j = 0; j < maxoszlop; j++) {
            let cella = document.createElement("TD");
            sor.appendChild(cella);
        }
        jatekmezo.appendChild(sor);
    }

    let tabletr = document.getElementsByTagName("TR");
    let tabletd = document.getElementsByTagName("TD");
    let n = 0;

    cellak = new Array(tabletr.length);
    for (let i = 0; i < tabletr.length; i++) {
        cellak[i] = new Array(maxoszlop);
        for (let j = 0; j < cellak[i].length; j++) {
            cellak[i][j] = tabletd[n];
            n++;
        }        
    }

    // Bejárat random pozíció
    let rndoszloppose = Math.floor(Math.random()*(maxoszlop));
    let rndsorpose = Math.floor(Math.random()*(maxsor));

    // Hacker random pozíció
    let rndoszloppose2 = Math.floor(Math.random()*(maxoszlop));
    let rndsorpose2 = Math.floor(Math.random()*(maxsor));

    // Szélső oldalt meghatározó random
    let rndbejarat = Math.floor(Math.random()*4)+1;
    if (rndbejarat == 1) {
        bejarat = cellak[0][rndoszloppose];
        hackerposition = cellak[maxsor-1][rndoszloppose2];
        hackerposition.style.backgroundColor = "red";
        hackerposition.id = "hackpose";
        hackerposition.style.transition = "background-color .3s ease-in-out";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
    } else if (rndbejarat == 2) {
        bejarat = cellak[maxsor-1][rndoszloppose];
        hackerposition = cellak[0][rndoszloppose2];
        hackerposition.style.backgroundColor = "red";
        hackerposition.style.transition = "background-color .3s ease-in-out";
        hackerposition.id = "hackpose";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
    } else if (rndbejarat == 3){
        bejarat = cellak[rndsorpose][0];
        hackerposition = cellak[rndsorpose2][maxoszlop-1];
        hackerposition.style.backgroundColor = "red";
        hackerposition.style.transition = "background-color .3s ease-in-out";
        hackerposition.id = "hackpose";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
    } else if (rndbejarat == 4){
        bejarat = cellak[rndsorpose][maxoszlop-1];
        hackerposition = cellak[rndsorpose2][0];
        hackerposition.style.backgroundColor = "red";
        hackerposition.style.transition = "background-color .3s ease-in-out";
        hackerposition.id = "hackpose";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
    }

    Tilos_Mezok();

    for (let i = 0; i < cellak.length; i++) {
        for (let j = 0; j < cellak[i].length; j++) {
            cellak[i][j].onclick = function () {
                Vizsgalat(cellak[i][j]);
            }            
        }        
    }

    Legkozelebbi();
}

function Tilos_Mezok() {
    let n = 0;
    for (let i = 0; i < cellak.length; i++) {
        for (let j = 0; j < cellak[i].length; j++) {
            for (let k = 0; k < erzekelokhelyek.length; k++) {
                if (cellak[i][j] == erzekelokhelyek[k]) {
                    if (i-1 >= 0 && j-1 >= 0) {
                        tiltottmezok[n] = cellak[i-1][j];
                        n++;
                        tiltottmezok[n] = cellak[i][j-1];
                        n++;
                        tiltottmezok[n] = cellak[i-1][j-1];
                        n++;
                    }
                    if (i-1 >= 0 && j+1 <= cellak[i].length) {
                        tiltottmezok[n] = cellak[i-1][j];
                        n++;
                        tiltottmezok[n] = cellak[i][j+1];
                        n++;
                        tiltottmezok[n] = cellak[i-1][j+1];
                        n++;
                    }
                    if (i+1 <= cellak.length-1 && j+1 <= cellak[i].length) {
                        tiltottmezok[n] = cellak[i+1][j];
                        n++;
                        tiltottmezok[n] = cellak[i][j+1];
                        n++;
                        tiltottmezok[n] = cellak[i+1][j+1];
                        n++;
                    }
                    if (i+1 <= cellak.length-1 && j-1 >= 0) {
                        tiltottmezok[n] = cellak[i+1][j];
                        n++;
                        tiltottmezok[n] = cellak[i][j-1];
                        n++;
                        tiltottmezok[n] = cellak[i+1][j-1];
                        n++;
                    }
                }                
            }            
        }
    }
    let m = tiltottmezok.length-1;
    for (let i = 0; i < erzekelokhelyek.length; i++) {
        tiltottmezok[m] = erzekelokhelyek[i];
        m++;        
    }
}

// ------------------------------------------------------------------------------------------------------

function Vizsgalat(adottmezo){
    if (GameOver == false) {
        let ih = false;
        let ih2 = false;
        for (let i = 0; i < cellak.length; i++) {
            for (let j = 0; j < cellak[i].length; j++) {
                if (cellak[i][j] == adottmezo) {
                    if (i-1 >= 0 && j-1 >= 0) {
                        if (hackerposition == cellak[i][j-1] || hackerposition == cellak[i-1][j] || hackerposition == cellak[i-1][j-1]) {
                            ih = true;
                        }
                    }
                    if (i-1 >= 0 && j+1 <= cellak[i].length) {
                        if (hackerposition == cellak[i][j+1] || hackerposition == cellak[i-1][j] || hackerposition == cellak[i-1][j+1]) {
                            ih = true;
                        }
                    }
                    if (i+1 <= cellak.length-1 && j+1 <= cellak[i].length) {
                        if (hackerposition == cellak[i][j+1] || hackerposition == cellak[i+1][j] || hackerposition == cellak[i+1][j+1]) {
                            ih = true;
                        }
                    }
                    if (i+1 <= cellak.length-1 && j-1 >= 0) {
                        if (hackerposition == cellak[i][j-1] || hackerposition == cellak[i+1][j] || hackerposition == cellak[i+1][j-1]) {
                            ih = true;
                        }
                    }
    
                    for (let k = 0; k < tiltottmezok.length; k++) {
                        if (tiltottmezok[k] != null && tiltottmezok[k] != undefined) {
                            if (cellak[i][j] == tiltottmezok[k]) {
                                ih2 = true;
                            }
                        }
                    }
                    if (ih == true) {
                        hackerposition.style.backgroundColor = "gray";
                        hackerposition.removeAttribute("id");
                        hackerposition = adottmezo;
                        hackerposition.style.backgroundColor = "red";
                        hackerposition.style.transition = "background-color .5s ease-in-out";
                        hackerposition.id = "hackpose";
                        lepesekszama++;
                    }
                    if (ih2 == true && ih == true) {
                        messagebox.innerHTML = "<mark>Vesztettél!</mark> Megtett lépések száma: " + lepesekszama;
                        let element = document.getElementById("messagebox"); 
                        element.classList.remove("animate"); 
                        void element.offsetWidth; 
                        element.classList.add("animate");
                        GameOver = true;
                    }
                    if (hackerposition == bejarat) {
                        messagebox.innerHTML = "<mark>Nyertél!</mark> Megtett lépések száma: " + lepesekszama;
                        document.getElementsByTagName("mark")[0].style.color="green";
                        let element = document.getElementById("messagebox"); 
                        element.classList.remove("animate"); 
                        void element.offsetWidth; 
                        element.classList.add("animate");
                        GameOver = true;
                    }
                    Legkozelebbi();
                }
            }        
        }
    }
}

// ------------------------------------------------------------------------------------------------------


// Meghatározzuk minden egyes lépésnél, hogy milyen messze van a legközelebbi érzékelő
function Legkozelebbi() {
    Tavolsag();

    tavolsag = 0;

    let x = HackerX;
    let y = HackerY;
    if (HackerY > ErzekeloY && HackerX < ErzekeloX) {
        while (x < ErzekeloX && y > ErzekeloY) {            
            x++;
            y--;
            tavolsag++;
        }
    } else if (HackerY > ErzekeloY && HackerX > ErzekeloX) {
        while (x > ErzekeloX && y > ErzekeloY) {            
            x--;
            y--;
            tavolsag++;
        }
    } else if (HackerY < ErzekeloY && HackerX < ErzekeloX) {
        while (x < ErzekeloX && y < ErzekeloY) {            
            x++;
            y++;
            tavolsag++;
        }
    } else if (HackerY < ErzekeloY && HackerX > ErzekeloX) {
        while (x > ErzekeloX && y < ErzekeloY) {            
            x--;
            y++;
            tavolsag++;
        }
    }
    if (y == ErzekeloY) {
        if (x - ErzekeloX < 0) {
            tavolsag += ErzekeloX - x;
        } else {
            tavolsag += x - ErzekeloX;
        }
    } if (x == ErzekeloX) {
        if (HackerY - ErzekeloY < 0) {
            tavolsag += ErzekeloY - y;
        } else {
            tavolsag += y - ErzekeloY;                                                                                                                                                                                                                       
        }
    } 

    erzekelotxt.innerHTML = "A legközelebbi érzékelő " + tavolsag + " lépésre található"
}

// ------------------------------------------------------------------------------------------------------

function Segitseg() {
    Tavolsag();
    if (segitseg == false) {
        let n = 0;
        let timer = setInterval(() => {
            if (n % 2 == 0) {
                legkozelebbi.style.backgroundColor = "white";
            } else if (n % 2 != 0) {
                legkozelebbi.style.backgroundColor = "gray";
            }
            if (n == 5) {
                clearInterval(timer);
            }
            n++;
        }, 200);
        segitseg = true;
    }
}

// ------------------------------------------------------------------------------------------------------

// Meghatározzuk a legközelebbi érzékelő pontos helyét
function Tavolsag() {
    let erzekelokX = [];
    let erzekelokY = [];
    let n = 0;

    for (let i = 0; i < cellak.length; i++) {
        for (let j = 0; j < cellak[i].length; j++) {
            if (cellak[i][j] == hackerposition) {
                HackerX = j;
                HackerY = i;
            }
            for (let k = 0; k < erzekelokhelyek.length; k++) {
                if (cellak[i][j] == erzekelokhelyek[k]) {
                    erzekelokX[n] = j;
                    erzekelokY[n] = i;
                    n++;
                }                    
            }              
        }            
    }

    let min = 100000;
    let sorszam = 0;

    for (let i = 0; i < erzekelokX.length; i++) {
        let aktualis = Math.sqrt(Math.pow(HackerX-erzekelokX[i],2) + Math.pow(HackerY-erzekelokY[i],2));
        if (aktualis < min) {
            min = aktualis;
            sorszam = i;
            ErzekeloX = erzekelokX[i];
            ErzekeloY = erzekelokY[i];;
        }
    }

    //console.log(min);
    legkozelebbi = erzekelokhelyek[sorszam];
}