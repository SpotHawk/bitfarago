let proba = document.querySelector("#proba");
let leiras = document.querySelector("#leiras");
let vonal=document.querySelector("#vonal");
let menu = document.querySelector("#menu");
let jatekmezo = document.querySelector("#jatekmezo");
let jatekmenu = document.querySelector("#jatekmenu");
let timertxt = document.querySelector("#timer");
let pontmutato = document.querySelector("#pontszam");


jatekmezo.style.visibility = "hidden";
jatekmenu.style.visibility = "hidden";
proba.style.visibility = "hidden";

vonal.style.width="40%";
vonal.style.marginLeft="auto";
vonal.style.marginRight="auto";

//-------------------------------------------------------------------------------

let pontszam = 0;
let hatralevo_ido = 120;
let szint = 0;
let ctx = jatekmezo.getContext('2d');
let level__1_timer = "";
let level__2_timer = "";
let level__3_timer = "";
let global_timer = "";

let n = 0;
let AllX = [];
let AllY = [];
let AllTXT = [];
let ctxX = 0;
let ctxY = 0;
let width = 0;
let height = 0;
let Objects = [];
let sorszam = 0;


function ElsoSzint() {
    level__1_timer = setInterval(() => {
        let legkozelebbi = 1000000;
        let legkozelebbiIndex = 0;
        let minX = 0;
        let minY = 0;
        ctx.font = '35px DS-Digital';
        ctx.fillStyle = "green";
        if (n > 0) {
            ctxX = Math.floor(Math.random()*(550-50+1))+50;
            ctxY =  Math.floor(Math.random()*(450-50+1))+50;
             for (let i = 0; i < AllX.length; i++) {
                 let vizsgalando = Math.sqrt(Math.pow(ctxX-AllX[i],2) + Math.pow(ctxY-AllY[i],2));
                 if (vizsgalando < legkozelebbi) {
                     legkozelebbi = vizsgalando;
                     legkozelebbiIndex = i;
                     minX = AllX[i];
                     minY = AllY[i];
                 }
             }
            if (ctxX + width > minX) {
                //ctxX -= (ctxX + width) - minX;
                ctxX -= width; 
            } else if (minX + width > ctxX) {
                //ctxX += (minX + width) - ctxX;
                ctxX += width;
            } 
            if (ctxY - height < minY) {
                //ctxY += minY - (ctxY - height);    
                ctxY += height;
            } else if (minY - width < ctxY) {
                //ctxY -= ctxY - (minY - height);
                ctxY -= height;
            } 
        } else {
            ctxX = Math.floor(Math.random()*(550-50+1))+50;
            ctxY =  Math.floor(Math.random()*(450-50+1))+50;
        }
        let text = "";
        for (let i = 0; i < 8; i++) {
            let rndChoice = Math.round(Math.random()*1);
            if (i == 0 && rndChoice == 0) {
                text += 3;
            } else {
                text += Math.round(Math.random()*9);
            }            
        }
        AllX[n] = ctxX;
        AllY[n] = ctxY;
        AllTXT[n] = text;
        width = ctx.measureText(text).width;
        height = 35;
        ctx.fillText(text, ctxX, ctxY);
        Objects[n] = [ctx];
        n++;
        console.log("X: " + ctxX + " Y: " + ctxY);
        console.log(legkozelebbi + " " + legkozelebbiIndex);
    }, 2000);
}

function MasodikSzint() {
    
}

function HarmadikSzint() {
    
}

function Distance(mousex,mousey) {
    let ih = false;
    for (let i = 0; i < AllX.length; i++) {
        if (mousex > AllX[i] && mousex < AllX[i] + width &&
            mousey < AllY[i] && mousey > AllY[i] - height) {
            console.log("good");
            if (AllTXT[i][0] == "3") {
                pontszam += 1;
                pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";//+1 animaciohoz a cuccok
                let plusszegy=document.querySelector("#egy");
                plusszegy.classList.remove("plussz-egy");
                void plusszegy.offsetWidth;
                plusszegy.innerHTML="+1";
                plusszegy.classList.add("plussz-egy");
                setTimeout(()=>{plusszegy.innerHTML="";},700);//----------------------------------------------
            } else {
                pontszam -= 1;
                pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";//-1 animaciohoz a cuccok
                let plusszegy=document.querySelector("#egy");
                plusszegy.classList.remove("minusz-egy");
                void plusszegy.offsetWidth;
                plusszegy.innerHTML="-1";
                plusszegy.classList.add("minusz-egy");
                setTimeout(()=>{plusszegy.innerHTML="";},700);//----------------------------------------------------
            }
            sorszam = i;
            ih = true;
        }
    }
    for (let k = 0; k < AllY.length; k++) {
        console.log(AllTXT[k]);            
    }
    if (ih == true) {
        ctx.clearRect(AllX[sorszam], AllY[sorszam]-height, width*8, height);
        return true;
    } else {
        return false;
    }
}

jatekmezo.addEventListener('click', (event) => {
    console.log("clicked");
    const rect = jatekmezo.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top;
    console.log(x + " " + y);
    console.log("Távolság: " + Distance(x, y));
});

//-------------------------------------------------------------------------------

function Konnyu() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";//+
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
    ElsoSzint();
}
function Kozepes() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";//+
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}
function Nehez() {
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";//+
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
}

function Torol() {
    vonal.style.transform="scale(0)";
    vonal.borderBottom="1px solid white";
    vonal.style.transition="transform 500ms ease-in-out";
    AnimacioKi();
    setTimeout(()=>{leiras.style.visibility="hidden";},200);//+
}
function KonnyuLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);//+
    leiras.innerHTML = 
    "<p>Kódok megjelenése: mp-ként 2 <br/> Kódok eltűnése: 10 mp-ként <br/> Keresendő kódok: játék közben megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak, jók megjelenítése <br/> Rossz kód: pontlevonás</p>";
    Animacio();
    VonalAnimacio();
}
function KozepesLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);//+
    leiras.innerHTML = 
    "<p>Kódok megjelenése: mp-ként 1 <br/> Kódok eltűnése: 10 mp-ként <br/> Keresendő kódok: játék közben megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak, jók megjelenítése <br/> Rossz kód: pontlevonás</p>";
    Animacio();
    VonalAnimacio();
}
function NehezLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);//+
    leiras.innerHTML = 
    "<p>Kódok megjlenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: időlassítás,  időfagyasztás, hitstreak <br/> Rossz kód: folyamatos pontlevonás, 5 rossz kód után game over</p>";
    Animacio();
    VonalAnimacio();
}
function NagyonNehezLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);//+
    leiras.innerHTML = 
    "<p>Kódok megjlenése: mp-ként 1 <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: játék előtt megjelenítve <br/> Segítségek: időlassítás, hitstreak <br/> Rossz kód: folyamatos pontlevonás, 3 rossz kód után game over</p>";
    Animacio();
    VonalAnimacio();
}
function LegendasLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);//+
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

//-------------------------------------------------------------------------------

