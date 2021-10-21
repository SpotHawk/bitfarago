// Az érzékelőhelyek helyzete alapján meghatározzuk, hogy mely mezők tartoznak az érzékelők zónájába 
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
}

// Először is megoldjuk, hogy a játékos csak a szomszédos mezőkre léphessen, utána pedig megvizsgáljuk hogy a mező amire lépett érzékelő zóna vagy bejárat-e 
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
                        messagebox.innerHTML = "<mark>Vesztettél!</mark> Megtett lépések száma: " + lepesekszama;
                        let element = document.getElementById("messagebox"); 
                        element.classList.remove("animate"); 
                        void element.offsetWidth; 
                        element.classList.add("animate");
                        GameOver = true;
                        segitseg = true;
                    }
                    if (hackerposition == bejarat) {
                        messagebox.innerHTML = "<mark>Nyertél!</mark> Megtett lépések száma: " + lepesekszama;
                        document.getElementsByTagName("mark")[0].style.color="green";
                        let element = document.getElementById("messagebox"); 
                        element.classList.remove("animate"); 
                        void element.offsetWidth; 
                        element.classList.add("animate");
                        GameOver = true;
                        segitseg = true;
                    }
                    Legkozelebbi();
                }
            }        
        }
    }
}

// Meghatározzuk minden egyes lépésnél, hogy milyen messze van a legközelebbi érzékelő
function Legkozelebbi() {
    Tavolsag_Kiszamitasa();

    erzekelo_tavolsag = 0;

    let x = HackerX;
    let y = HackerY;
    // Addig megyünk átlós irányba, ameddig a legközelebbi érzékelővel nem leszünk egy sorban vagy oszlopban
    if (HackerY > ErzekeloY && HackerX < ErzekeloX) {
        while (x < ErzekeloX && y > ErzekeloY) {            
            x++;
            y--;
            erzekelo_tavolsag++;
        }
    } else if (HackerY > ErzekeloY && HackerX > ErzekeloX) {
        while (x > ErzekeloX && y > ErzekeloY) {            
            x--;
            y--;
            erzekelo_tavolsag++;
        }
    } else if (HackerY < ErzekeloY && HackerX < ErzekeloX) {
        while (x < ErzekeloX && y < ErzekeloY) {            
            x++;
            y++;
            erzekelo_tavolsag++;
        }
    } else if (HackerY < ErzekeloY && HackerX > ErzekeloX) {
        while (x > ErzekeloX && y < ErzekeloY) {            
            x--;
            y++;
            erzekelo_tavolsag++;
        }
    }
    if (y == ErzekeloY) {
        if (x - ErzekeloX < 0) {
            erzekelo_tavolsag += ErzekeloX - x;
        } else {
            erzekelo_tavolsag += x - ErzekeloX;
        }
    } if (x == ErzekeloX) {
        if (HackerY - ErzekeloY < 0) {
            erzekelo_tavolsag += ErzekeloY - y;
        } else {
            erzekelo_tavolsag += y - ErzekeloY;                                                                                                                                                                                                                       
        }
    } 

    erzekelotxt.innerHTML = "A legközelebbi érzékelő " + erzekelo_tavolsag + " lépésre található"
}

// Az egyszer használható segítség gomb megnyoásakor felvillan pár pillanatra a legközelebb lévő érzékelő
function Segitseg() {
    let elsolegkozelebbi = legkozelebbi; // Megakadályozzuk, hogy segítség közben más mezőre kattintva az ahhoz legközelebbi érzékelőt mutassa a "gép"
    if (segitseg == false) {
        segitseg = true;
        Tavolsag_Kiszamitasa();
        let n = 0;
        let timer = setInterval(() => {
            if (n % 2 == 0) {
                elsolegkozelebbi.style.backgroundColor = "white";
            } else if (n % 2 != 0) {
                elsolegkozelebbi.style.backgroundColor = "gray";
            }
            if (n == 5) {
                clearInterval(timer);
            }
            n++;
        }, 300);
    }
}

// Meghatározzuk a legközelebbi érzékelő pontos helyét a jól imsert matematikai képlettel
function Tavolsag_Kiszamitasa() {
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

    let min = 1000000;
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
    legkozelebbi = erzekelokhelyek[sorszam];
}