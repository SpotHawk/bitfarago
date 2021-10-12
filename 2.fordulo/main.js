let hackerposition = "";
let bejarat = "";
let legkozelebbi = "";
let cellak = [];
let erzekelokhelyek = [];
let tiltottmezok = [];
let GameOver = false;
let segitseg = false;
let lepesekszama = 0;
const messagebox = document.querySelector("#messagebox");

function Alapertelmezett() {
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
}

// ------------------------------------------------------------------------------------------------------

function AlapPalya() { 
    Alapertelmezett();

    let jatekmezo = document.querySelector("#mezo");
    let tabla=document.querySelector("#tabla");
    if (jatekmezo != null && jatekmezo != undefined) {
        jatekmezo.remove();
    }

    jatekmezo = document.createElement("table");
    jatekmezo.id = "mezo";

    tabla.appendChild(jatekmezo);

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

    Legkozelebbi();
}

function RandomPalya() {
    Alapertelmezett();

    let jatekmezo = document.querySelector("#mezo");
    if (jatekmezo != null && jatekmezo != undefined) {
        jatekmezo.remove();
    }

    let rndi = Math.floor(Math.random()*2)+1;
    let rndj = Math.floor(Math.random()*2)+1;
    console.log(rndi);
    console.log(rndj);

    if (rndi == 1) {
        if (rndj == 1) {
            
        } else if (rndj == 2) {

        }
    } else if (rndi == 2) {
        if (rndj == 1) {
            
        } else if (rndj == 2) {
        }
    }
}

// ------------------------------------------------------------------------------------------------------

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
                        hackerposition.id = "hackpose";
                        lepesekszama++;
                    }
                    if (ih2 == true && ih == true) {
                        messagebox.innerHTML = "Vesztettél! Megtett lépések száma: " + lepesekszama;
                        GameOver = true;
                    }
                    if (hackerposition == bejarat) {
                        messagebox.innerHTML = "Nyertél! Megtett lépések száma: " + lepesekszama;
                        GameOver = true;
                    }
                }
            }        
        }
    }
}

// ------------------------------------------------------------------------------------------------------



function Legkozelebbi() {
    Tavolsag();
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

function Tavolsag() {
    let hackX = 0;
    let hackY = 0;
    let erzekelokX = [];
    let erzekelokY = [];
    let n = 0;

    for (let i = 0; i < cellak.length; i++) {
        for (let j = 0; j < cellak[i].length; j++) {
            if (cellak[i][j] == hackerposition) {
                hackX = j;
                hackY = i;
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
        let aktualis = Math.sqrt(Math.pow(hackX-erzekelokX[i],2) + Math.pow(hackY-erzekelokY[i],2));
        if (aktualis < min) {
            min = aktualis;
            sorszam = i;
        }
    }

    legkozelebbi = erzekelokhelyek[sorszam];
}