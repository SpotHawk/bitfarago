let leiras = document.querySelector("#leiras");
let menu = document.querySelector("#menu");
let jatekmezo = document.querySelector("#jatekmezo");
let jatekmenu = document.querySelector("#jatekmenu");
jatekmezo.style.visibility = "hidden";
jatekmenu.style.visibility = "hidden";
function Konnyu() {
    menu.style.visibility = "hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function Kozepes() {
    menu.style.visibility = "hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function Nehez() {
    menu.style.visibility = "hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function NagyonNehez() {
    menu.style.visibility = "hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function Legendas() {
    menu.style.visibility = "hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}

function Torol() {
    leiras.innerHTML="";
}
function KonnyuLeiras() {
    leiras.innerHTML = 
    "Kódok megjelenése: mp-ként 2 <br/> Kódok eltűnése: 10 mp-ként <br/> Keresendő kódok: játék közben megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak, jók megjelenítése <br/> Rossz kód: pontlevonás";
}
function KozepesLeiras() {
    leiras.innerHTML = 
    "Kódok megjelenése: mp-ként 1 <br/> Kódok eltűnése: 10 mp-ként <br/> Keresendő kódok: játék közben megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak, jók megjelenítése <br/> Rossz kód: pontlevonás";
}
function NehezLeiras() {
    leiras.innerHTML = 
    "Kódok megjlenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak <br/> Rossz kód: folyamatos pontlevonás, 5 rossz kód után game over";
}
function NagyonNehezLeiras() {
    leiras.innerHTML = 
    "Kódok megjlenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: időlassítás, hitstreak <br/> Rossz kód: folyamatos pontlevonás, 3 rossz kód után game over";
}
function LegendasLeiras() {
    leiras.innerHTML = 
    "Kódok megjelenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: hitstreak <br/> Rossz kód: Egyetlen egy rossz kód után game over";
}


function Uj_Jatek() {
    menu.style.visibility = "visible";
    jatekmezo.style.visibility = "hidden";
    jatekmenu.style.visibility = "hidden";
}