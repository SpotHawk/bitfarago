let leiras = document.querySelector("#leiras");
let vonal=document.querySelector("#vonal");
let menu = document.querySelector("#menu");
let jatekmezo = document.querySelector("#jatekmezo");
let jatekmenu = document.querySelector("#jatekmenu");
jatekmezo.style.visibility = "hidden";
jatekmenu.style.visibility = "hidden";
vonal.style.width="40%";
vonal.style.marginLeft="auto";
vonal.style.marginRight="auto";
function Konnyu() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function Kozepes() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function Nehez() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function NagyonNehez() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function Legendas() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}

function Torol() {
    vonal.style.transform="scale(0)";
    vonal.borderBottom="1px solid white";
    vonal.style.transition="transform 500ms ease-in-out";
    AnimacioKi();
    setTimeout(()=>{leiras.style.visibility="hidden";},200);
}
function KonnyuLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjelenése: mp-ként 2 <br/> Kódok eltűnése: 10 mp-ként <br/> Keresendő kódok: játék közben megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak, jók megjelenítése <br/> Rossz kód: pontlevonás</p>";
    Animacio();
    VonalAnimacio();
}
function KozepesLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjelenése: mp-ként 1 <br/> Kódok eltűnése: 10 mp-ként <br/> Keresendő kódok: játék közben megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak, jók megjelenítése <br/> Rossz kód: pontlevonás</p>";
    Animacio();
    VonalAnimacio();
}
function NehezLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjlenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak <br/> Rossz kód: folyamatos pontlevonás, 5 rossz kód után game over</p>";
    Animacio();
    VonalAnimacio();
}
function NagyonNehezLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjlenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: időlassítás, hitstreak <br/> Rossz kód: folyamatos pontlevonás, 3 rossz kód után game over</p>";
    Animacio();
    VonalAnimacio();
}
function LegendasLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjelenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: hitstreak <br/> Rossz kód: Egyetlen egy rossz kód után game over</p>";
    Animacio();
    VonalAnimacio();
}

function Animacio()
{
    leiras.classList.remove("slide-out"); 
    void leiras.offsetWidth; 
    leiras.classList.remove("slide-left"); 
    void leiras.offsetWidth; 
    leiras.classList.add("slide-left");
}

function AnimacioKi()
{
    leiras.classList.remove("slide-left"); 
    void leiras.offsetWidth;
    leiras.classList.remove("slide-out"); 
    void leiras.offsetWidth; 
    leiras.classList.add("slide-out");
}

function VonalAnimacio()
{
    vonal.style.transform="scale(1)";
    vonal.style.borderBottom="1px solid white";
}

function Uj_Jatek() {
    menu.style.visibility = "visible";
    jatekmezo.style.visibility = "hidden";
    jatekmenu.style.visibility = "hidden";
}