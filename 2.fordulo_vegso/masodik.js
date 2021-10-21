let hackerposition = ""; // A hacker aktuális pozíciója
let bejarat = ""; // A szerverterem bejárata
let legkozelebbi = ""; // A legközelebbi érzékelő
let cellak = []; // A játékmező egyes cellái
let erzekelokhelyek = []; // Az érzékelőhelyek
let tiltottmezok = []; // Az érzékelő szenzorok mezői
let GameOver = false; // A játék véget ért-e
let segitseg = false; // Elhasználtuk-e már a segítség kérést
let lepesekszama = 0; // A játék során megtett lépések száma
let ErzekeloX = 0; // A legközelebbi érzékelő X és Y koordinátája
let ErzekeloY = 0;
let HackerX = 0; // A hacker X és Y koordinátája
let HackerY = 0; 
let erzekelo_tavolsag = 0; // A legközelebbi érzékelő távolsága lépésben
let jatekmezo = ""; // Játékmező

let messagebox = document.querySelector("#messagebox");
let erzekelotxt = document.querySelector("#erzekelotxt");

let kezdooldal = document.querySelector("#menu");
let jatekoldal_menu = document.querySelector("#menu2");
let jatekoldal_mezo = document.querySelector("#mezo");

jatekoldal_menu.style.visibility = "hidden";
jatekoldal_mezo.style.visibility = "hidden";

// Játék oldal elemeinek "betöltése"
function Palya_Elemek() {
    kezdooldal.style.visibility = "hidden";
    jatekoldal_menu.style.visibility = "visible";
    jatekoldal_mezo.style.visibility = "visible";
}

// A kezdőoldal "betöltése"
function Uj_jatek() {
    GameOver = false;
    segitseg = false;
    lepesekszama = 0;
    messagebox.innerHTML = "";
    erzekelotxt.innerHTML = "";
    kezdooldal.style.visibility = "visible";
    jatekoldal_menu.style.visibility = "hidden";
    jatekoldal_mezo.style.visibility = "hidden";
}

// Előző játéktér törlése
function Torles() {
    jatekmezo = document.querySelector("#mezo");
    if (jatekmezo != null && jatekmezo != undefined) {
        jatekmezo.remove();
    }
    jatekmezo = document.createElement("table");
    jatekmezo.id = "mezo";
    document.body.appendChild(jatekmezo);
    jatekoldal_mezo = jatekmezo;
}

function AlapPalya() {
    Palya_Elemek();
    Torles();

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
    
    // Konkrét értékek megadása
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
    Palya_Elemek();
    Torles();

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
    let bejaratrndX = Math.floor(Math.random()*(maxoszlop));
    let bejaratrndY = Math.floor(Math.random()*(maxsor));

    // Hacker random pozíció
    let hackerrndX = Math.floor(Math.random()*(maxoszlop));
    let hackerrndY = Math.floor(Math.random()*(maxsor));

    // Szélső oldalt meghatározó random
    let rndbejarat = Math.floor(Math.random()*4)+1;

    // A hacker és a bejárat közötti cellákat vesszük fel a tömbbe amit majd beleteszünk az egységes nem_spawnmezok tömbbe
    let szabadut = [];
    let q = 0;
	

    /* A bejárat és a hacker kezdőpozíciója között vízszintesen és függőlegesen létrehozunk egy kettő/három mező szélességű zónát,
    ami biztosítja hogy minden esetben legyen szabad út a hacker és a bejárat között*/
    if (rndbejarat == 1) {
        bejarat = cellak[0][bejaratrndX];
        hackerposition = cellak[maxsor-1][hackerrndX];
        hackerposition.style.backgroundColor = "red";
        hackerposition.id = "hackpose";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
        for (let i = 0; i <= maxsor-1; i++) {
            szabadut[q] = cellak[i][bejaratrndX];
            q++;
            if (bejaratrndX != 0 && bejaratrndX != maxoszlop-1) {
                if (bejaratrndX-1 >= 0 && bejaratrndX+1 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX-1];
                    q++;
                    szabadut[q] = cellak[i][bejaratrndX+1];
                    q++;
                } else if (bejaratrndX+2 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX+1];
                    q++;
                    szabadut[q] = cellak[i][bejaratrndX+2];
                    q++;
                } else if (bejaratrndX-2 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX-1];
                    q++;
                    szabadut[q] = cellak[i][bejaratrndX-2];
                    q++;
                }
            } else {
                if (bejaratrndX+1 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX+1];
                    q++;
                } else if (bejaratrndX-1 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX-1];
                    q++;
                }
            }
        }
        if (bejaratrndX < hackerrndX) {
            for (let i = bejaratrndX; i <= hackerrndX; i++) {
                if (bejaratrndX != 0 && bejaratrndX != maxoszlop-1) {
                    szabadut[q] = cellak[maxsor-1][i];
                    q++;
                    szabadut[q] = cellak[maxsor-2][i];
                    q++
                    szabadut[q] = cellak[maxsor-3][i];
                    q++;   
                } else {
                    szabadut[q] = cellak[maxsor-1][i];
                    q++;
                    szabadut[q] = cellak[maxsor-2][i];
                    q++ 
                }
            }
        } else {
            for (let i = bejaratrndX; i >= hackerrndX; i--) {
                if (bejaratrndX != 0 && bejaratrndX != maxoszlop-1) {
                    szabadut[q] = cellak[maxsor-1][i];
                    q++;
                    szabadut[q] = cellak[maxsor-2][i];
                    q++
                    szabadut[q] = cellak[maxsor-3][i];
                    q++;
                } else {
                    szabadut[q] = cellak[maxsor-1][i];
                    q++;
                    szabadut[q] = cellak[maxsor-2][i];
                    q++
                }
            }
        }
    } else if (rndbejarat == 2) {
        bejarat = cellak[maxsor-1][bejaratrndX];
        hackerposition = cellak[0][hackerrndX];
        hackerposition.style.backgroundColor = "red";
        hackerposition.id = "hackpose";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
        for (let i = 0; i <= maxsor-1; i++) {
            szabadut[q] = cellak[i][bejaratrndX];
            q++;
            if (bejaratrndX != 0 && bejaratrndX != maxoszlop-1) {
                if (bejaratrndX-1 >= 0 && bejaratrndX+1 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX-1];
                    q++;
                    szabadut[q] = cellak[i][bejaratrndX+1];
                    q++;
                } else if (bejaratrndX+2 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX+1];
                    q++;
                    szabadut[q] = cellak[i][bejaratrndX+2];
                    q++;
                } else if (bejaratrndX-2 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX-1];
                    q++;
                    szabadut[q] = cellak[i][bejaratrndX-2];
                    q++;
                }
            } else {
                if (bejaratrndX+1 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX+1];
                    q++;
                } else if (bejaratrndX-1 < maxoszlop) {
                    szabadut[q] = cellak[i][bejaratrndX-1];
                    q++;
                }
            }
        }
        if (bejaratrndX < hackerrndX) {
            for (let i = bejaratrndX; i <= hackerrndX; i++) {
                if (bejaratrndX != 0 && bejaratrndX != maxoszlop-1) {
                    szabadut[q] = cellak[0][i];
                    q++;
                    szabadut[q] = cellak[1][i];
                    q++;
                    szabadut[q] = cellak[2][i];
                    q++;
                } else {
                    szabadut[q] = cellak[0][i];
                    q++;
                    szabadut[q] = cellak[1][i];
                    q++;
                }
            }
        } else {
            for (let i = bejaratrndX; i >= hackerrndX; i--) {
                if (bejaratrndX != 0 && bejaratrndX != maxoszlop-1) {
                    szabadut[q] = cellak[0][i];
                    q++;
                    szabadut[q] = cellak[1][i];
                    q++;
                    szabadut[q] = cellak[2][i];
                    q++; 
                } else {
                    szabadut[q] = cellak[0][i];
                    q++;
                    szabadut[q] = cellak[1][i];
                    q++;
                }            
            }
        }
    } else if (rndbejarat == 3){
        bejarat = cellak[bejaratrndY][0];
        hackerposition = cellak[hackerrndY][maxoszlop-1];
        hackerposition.style.backgroundColor = "red";
        hackerposition.id = "hackpose";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
        for (let i = 0; i <= maxoszlop; i++) {
            szabadut[q] = cellak[bejaratrndY][i];
            q++;
            if (bejaratrndY != 0 && bejaratrndY != maxsor-1) {
                if (bejaratrndY-1 >= 0 && bejaratrndY+1 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY-1][i];
                    q++;
                    szabadut[q] = cellak[bejaratrndY+1][i];
                    q++;
                } else if (bejaratrndY+2 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY+1][i];
                    q++;
                    szabadut[q] = cellak[bejaratrndY+2][i];
                    q++;
                } else if (bejaratrndY-2 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY-1][i];
                    q++;
                    szabadut[q] = cellak[bejaratrndY-2][i];
                    q++;
                }
            } else {
                if (bejaratrndY+1 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY+1][i];
                    q++;
                } else if (bejaratrndY-1 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY-1][i];
                    q++;
                }
            }
        }
        if (bejaratrndY < hackerrndY) {
            for (let i = bejaratrndY; i <= hackerrndY; i++) {
                if (bejaratrndY != 0 && bejaratrndY != maxsor-1) {
                    szabadut[q] = cellak[i][maxoszlop-1];
                    q++;
                    szabadut[q] = cellak[i][maxoszlop-2];
                    q++;
                    szabadut[q] = cellak[i][maxoszlop-3];
                    q++;
                } else {
                    szabadut[q] = cellak[i][maxoszlop-1];
                    q++;
                    szabadut[q] = cellak[i][maxoszlop-2];
                    q++;
                }
            }
        } else {
            for (let i = bejaratrndY; i >= hackerrndY; i--) {
                if (bejaratrndY != 0 && bejaratrndY != maxsor-1) {
                    szabadut[q] = cellak[i][maxoszlop-1];
                    q++;
                    szabadut[q] = cellak[i][maxoszlop-2];
                    q++;
                    szabadut[q] = cellak[i][maxoszlop-3];
                    q++;
                } else {
                    szabadut[q] = cellak[i][maxoszlop-1];
                    q++;
                    szabadut[q] = cellak[i][maxoszlop-2];
                    q++; 
                }
            }
        }
    } else if (rndbejarat == 4){
        bejarat = cellak[bejaratrndY][maxoszlop-1];
        hackerposition = cellak[hackerrndY][0];
        hackerposition.style.backgroundColor = "red";
        hackerposition.id = "hackpose";
        bejarat.style.backgroundColor = "#323232";
        bejarat.id = "cel";
        for (let i = 0; i <= maxoszlop; i++) {
            szabadut[q] = cellak[bejaratrndY][i];
            q++;
            if (bejaratrndY != 0 && bejaratrndY != maxsor-1) {
                if (bejaratrndY-1 >= 0 && bejaratrndY+1 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY-1][i];
                    q++;
                    szabadut[q] = cellak[bejaratrndY+1][i];
                    q++;
                } else if (bejaratrndY+2 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY+1][i];
                    q++;
                    szabadut[q] = cellak[bejaratrndY+2][i];
                    q++;
                } else if (bejaratrndY-2 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY-1][i];
                    q++;
                    szabadut[q] = cellak[bejaratrndY-2][i];
                    q++;
                }
            } else {
                if (bejaratrndY+1 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY+1][i];
                    q++;
                } else if (bejaratrndY-1 < maxsor) {
                    szabadut[q] = cellak[bejaratrndY-1][i];
                    q++;
                }
            }
        }
        if (bejaratrndY < hackerrndY) {
            for (let i = bejaratrndY; i <= hackerrndY; i++) {
                if (bejaratrndY != 0 && bejaratrndY != maxsor-1) {
                    szabadut[q] = cellak[i][0];
                    q++;
                    szabadut[q] = cellak[i][1];
                    q++;
                    szabadut[q] = cellak[i][2];
                    q++;
                } else {
                    szabadut[q] = cellak[i][0];
                    q++;
                    szabadut[q] = cellak[i][1];
                    q++;
                }
            }
        } else {
            for (let i = bejaratrndY; i >= hackerrndY; i--) {
                if (bejaratrndY != 0 && bejaratrndY != maxsor-1) {
                    szabadut[q] = cellak[i][0];
                    q++;
                    szabadut[q] = cellak[i][1];
                    q++;
                    szabadut[q] = cellak[i][2];
                    q++;
                } else {
                    szabadut[q] = cellak[i][0];
                    q++;
                    szabadut[q] = cellak[i][1];
                    q++;
                }
            }
        }
    }
    
    let spawnmezok = [];
    let r = 0;
    let nem_spawnmezok = [];
    let m = 0;
    let ih = false;

    // A hacker és a bejárat körül egy cellányi távolságig nem lehetnek érzékelők, ezért ezeket felvesszük egy tömbbe amiben azon mezők vannak, amelyeken sosem lehet érzékelő
    for (let i = 0; i < cellak.length; i++) {
        for (let j = 0; j < cellak[i].length; j++) {
            if (cellak[i][j] == hackerposition || cellak[i][j] == bejarat) {
                if (i-1 >= 0 && j-1 >= 0) {
                    nem_spawnmezok[m] = cellak[i-1][j];
                    m++;
                    nem_spawnmezok[m] = cellak[i][j-1];
                    m++;
                    nem_spawnmezok[m] = cellak[i-1][j-1];
                    m++;
                }
                if (i-1 >= 0 && j+1 <= cellak[i].length) {
                    nem_spawnmezok[m] = cellak[i-1][j];
                    m++;
                    nem_spawnmezok[m] = cellak[i][j+1];
                    m++;
                    nem_spawnmezok[m] = cellak[i-1][j+1];
                    m++;
                }
                if (i+1 <= cellak.length-1 && j+1 <= cellak[i].length) {
                    nem_spawnmezok[m] = cellak[i+1][j];
                    m++;
                    nem_spawnmezok[m] = cellak[i][j+1];
                    m++;
                    nem_spawnmezok[m] = cellak[i+1][j+1];
                    m++;
                }
                if (i+1 <= cellak.length-1 && j-1 >= 0) {
                    nem_spawnmezok[m] = cellak[i+1][j];
                    m++;
                    nem_spawnmezok[m] = cellak[i][j-1];
                    m++;
                    nem_spawnmezok[m] = cellak[i+1][j-1];
                    m++;
                } 
            }            
        }            
    }

    for (let i = 0; i < szabadut.length; i++) {
        if (szabadut[i] != undefined && szabadut[i] != null) {
            nem_spawnmezok[m] = szabadut[i];
            m++;
        }        
    }

    // Meghatározzuk, hogy mely cellákon lehetnek érzékelők amiket beleteszünk egy tömbbe
    for (let i = 0; i < cellak.length; i++) {
        for (let j = 0; j < cellak[i].length; j++) {
            ih = false;
            for (let k = 0; k < nem_spawnmezok.length; k++) {
                if (cellak[i][j] == nem_spawnmezok[k] || (cellak[i][j] == hackerposition || cellak[i][j] == bejarat)) {
                    ih = true;
                }
            }
            if (ih == false) {
                spawnmezok[r] = cellak[i][j];
                r++;
            }
        }        
    }

    // A pálya méretétől függően legeneráljuk az érzékelőket
    if (maxoszlop <= 7) {
        if (maxsor <= 7) {
            let erzekelokszama = 3;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        } else if (maxsor > 7 && maxsor <= 11) {
            let erzekelokszama = 4;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        } else if (maxsor > 11) {
            let erzekelokszama = 5;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        }
    } else if (maxoszlop > 7 && maxoszlop <= 11) {
        if (maxsor <= 7) {
            let erzekelokszama = 3;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        } else if (maxsor > 7 && maxsor <= 11) {
            let erzekelokszama = 5;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        } else if (maxsor > 11) {
            let erzekelokszama = 7;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        }
    } else if (maxoszlop > 11) {
        if (maxsor <= 7) {
            let erzekelokszama = 5;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        } else if (maxsor > 7 && maxsor <= 11) {
            let erzekelokszama = 7;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        } else if (maxsor > 11) {
            let erzekelokszama = 9;
            for (let i = 0; i < erzekelokszama; i++) {
                let index = Math.floor(Math.random()*(spawnmezok.length));
                spawnmezok[index].classList.add("erzekelo"); 
            }
        }
    }

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