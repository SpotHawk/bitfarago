let proba = document.querySelector("#proba");
let leiras = document.querySelector("#leiras");
let vonal=document.querySelector("#vonal");
let menu = document.querySelector("#menu");
let jatekmezo = document.querySelector("#jatekmezo");
let jatekmenu = document.querySelector("#jatekmenu");
let timertxt = document.querySelector("#timer");
let pontmutato = document.querySelector("#pontszam");
const fagyashoz=document.querySelector("#fagyashoz");
let pause = false;

jatekmezo.style.visibility = "hidden";
jatekmenu.style.visibility = "hidden";
proba.style.visibility = "hidden";

vonal.style.width="40%";
vonal.style.marginLeft="auto";
vonal.style.marginRight="auto";

jatekmezo.classList.add("normal");

//-------------------------------------------------------------------------------
let osszes = 0;
let GameOver = false;
let lehetosegek = 3;
let pontszam = 0;
let hatralevo_ido = 120;
let szint = 0;
let ctx = jatekmezo.getContext('2d');
let rndtime = 0;
let global_timer = "";
let idolassit_szamlalo=0;//uj jatekra nyomva meg tudjam allapitani h volt e mar v sem, h ne legyen hiba

let hitcounter = 0;
let hittimer = 0;
let n = 0;
let AllX = [];
let AllY = [];
let AllTXT = [];
let AllDate = [];
let ctxX = 0;
let ctxY = 0;
let width = 130;
let height = 35;
let sorszam = 0;
let eltunes = "";
let level_timer = "";

function ElsoSzint() {
	rndtime = (Math.round(Math.random()*(6-4+1))+4)*1000;
    global_timer = setInterval(() => {
        if (pause != true) {
        hatralevo_ido -= 1;
        timertxt.innerHTML = "Hátralévő idő: " + hatralevo_ido;
        for (let i = 0; i < AllDate.length; i++) {
            AllDate[i] -= 1;
            if (AllDate[i] == 0) {
				ctx.fillStyle = "black";
                ctx.fillText(AllTXT[i], AllX[i], AllY[i]);
                AllX[i] = undefined;
                AllY[i] = undefined;
                AllTXT[i] = undefined;
                AllDate[i] = undefined;
            }
        }
        if (hatralevo_ido == 0) {
            GameOver = true;
            timertxt.innerHTML = "Game Over";
            timertxt.classList.remove("gameover-anim");
            void timertxt.offsetWidth;
            timertxt.classList.add("gameover-anim");
            pontmutato.innerHTML = "Pontszám: " + pontszam + "/" + osszes;
            clearInterval(global_timer);
            clearInterval(level_timer);
        }
    }
    }, 1000);
     //--------------------------------------------------
    level_timer = setInterval(() => {
        if (pause != true) {
        let legkozelebbi = 1000000;
        let legkozelebbiIndex = 0;
        let minX = 0;
        let minY = 0;
        ctx.font = '35px DS-Digital';
        ctx.fillStyle = "green";
         //--------------------------------------------------
        if (n > 0) {
            ctxX = Math.floor(Math.random()*(700-50+1))+50;
            ctxY =  Math.floor(Math.random()*(500-40+1))+40;
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
                ctxX -= width; 
            } else if (minX + width > ctxX) {
                ctxX += width;
            } 
            if (ctxY - height < minY) {
                ctxY += height;
            } else if (minY - width < ctxY) {
                ctxY -= height;
            } 
        } else {
            ctxX = Math.floor(Math.random()*(700-50+1))+50;
            ctxY =  Math.floor(Math.random()*(500-40+1))+40;
        }
         //--------------------------------------------------
        let text = "";
        for (let i = 0; i < 8; i++) {
            let rndChoice = Math.round(Math.random()*1);
            if (i == 0 && rndChoice == 0) {
                text += 8;
                osszes++;
            } else {
                text += Math.round(Math.random()*9);
            }            
        }
         //--------------------------------------------------
        AllX[n] = ctxX;
        AllY[n] = ctxY;
        AllTXT[n] = text;
        AllDate[n] = 5;
        n++;
        ctx.fillText(text, ctxX, ctxY);
        console.log("X: " + ctxX + " Y: " + ctxY);
        console.log(legkozelebbi + " " + legkozelebbiIndex);
    }
    }, rndtime);
    }

function MasodikSzint() {
	rndtime = (Math.round(Math.random()*(4-2+1))+2)*1000;
    global_timer = setInterval(() => {
        if (pause != true) {
        hatralevo_ido -= 1;
        timertxt.innerHTML = "Hátralévő idő: " + hatralevo_ido;
        for (let i = 0; i < AllDate.length; i++) {
            AllDate[i] -= 1;
            if (AllDate[i] == 0) {
                ctx.fillStyle = "black";
				ctx.fillText(AllTXT[i], AllX[i], AllY[i]);
                AllX[i] = undefined;
                AllY[i] = undefined;
                AllTXT[i] = undefined;
                AllDate[i] = undefined;
            }
            if (hatralevo_ido == 0) {
                GameOver = true;
                timertxt.innerHTML = "Game Over";
                timertxt.classList.remove("gameover-anim");
                void timertxt.offsetWidth;
                timertxt.classList.add("gameover-anim");
                pontmutato.innerHTML = "Pontszám: " + pontszam + "/" + osszes;
                clearInterval(global_timer);
                clearInterval(level_timer);
            }
        }
    }
    }, 1000);
    //--------------------------------------------------
    level_timer = setInterval(() => {
        if (pause != true) {
        let legkozelebbi = 1000000;
        let legkozelebbiIndex = 0;
        let minX = 0;
        let minY = 0;
        ctx.font = '35px DS-Digital';
        ctx.fillStyle = "green";
         //--------------------------------------------------
        if (n > 0) {
            ctxX = Math.floor(Math.random()*(700-50+1))+50;
            ctxY =  Math.floor(Math.random()*(500-40+1))+40;
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
                ctxX -= width; 
            } else if (minX + width > ctxX) {
                ctxX += width;
            } 
            if (ctxY - height < minY) {
                ctxY += height;
            } else if (minY - width < ctxY) {
                ctxY -= height;
            } 
        } else {
            ctxX = Math.floor(Math.random()*(700-50+1))+50;
            ctxY =  Math.floor(Math.random()*(500-40+1))+40;
        }
         //--------------------------------------------------
        let text = "";
        for (let i = 0; i < 8; i++) {
            let rndChoice = Math.round(Math.random()*1);
            if (i == 0 && rndChoice == 0) {
                text += 1;
                osszes++;
            } else if (i == 1 && rndChoice == 0) {
                text += 2;
            } else {
                text += Math.round(Math.random()*9);
            }            
        }
         //--------------------------------------------------
        AllX[n] = ctxX;
        AllY[n] = ctxY;
        AllTXT[n] = text;
        AllDate[n] = 5;
        n++;
		ctx.fillText(text, ctxX, ctxY);
        console.log("X: " + ctxX + " Y: " + ctxY);
        console.log(legkozelebbi + " " + legkozelebbiIndex);
    }
    }, rndtime);
}

function HarmadikSzint() {
	rndtime = (Math.round(Math.random()*(2-1+1))+1)*1000;
    global_timer = setInterval(() => {
        if (pause != true)
        {
        hatralevo_ido -= 1;
        timertxt.innerHTML = "Hátralévő idő: " + hatralevo_ido;
        for (let i = 0; i < AllDate.length; i++) {
            AllDate[i] -= 1;
            if (AllDate[i] == 0) {
                ctx.fillStyle = "black";
				ctx.fillText(AllTXT[i], AllX[i], AllY[i]);
                AllX[i] = undefined;
                AllY[i] = undefined;
                AllTXT[i] = undefined;
                AllDate[i] = undefined;
            }
            if (hatralevo_ido == 0) {
                GameOver = true;
                timertxt.innerHTML = "Game Over";
                timertxt.classList.remove("gameover-anim");
                void timertxt.offsetWidth;
                timertxt.classList.add("gameover-anim");
                pontmutato.innerHTML = "Pontszám: " + pontszam + "/" + osszes;
                clearInterval(global_timer);
                clearInterval(level_timer);
            }
        }
    }
    }, 1000);
    //--------------------------------------------------
    level_timer = setInterval(() => {
        if (pause != true){
        let legkozelebbi = 1000000;
        let legkozelebbiIndex = 0;
        let minX = 0;
        let minY = 0;
        ctx.font = '35px DS-Digital';
        ctx.fillStyle = "green";
         //--------------------------------------------------
        if (n > 0) {
            ctxX = Math.floor(Math.random()*(700-50+1))+50;
            ctxY =  Math.floor(Math.random()*(500-40+1))+40;
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
                ctxX -= width; 
            } else if (minX + width > ctxX) {
                ctxX += width;
            } 
            if (ctxY - height < minY) {
                ctxY += height;
            } else if (minY - width < ctxY) {
                ctxY -= height;
            } 
        } else {
            ctxX = Math.floor(Math.random()*(700-50+1))+50;
            ctxY =  Math.floor(Math.random()*(500-40+1))+40;
        }
         //--------------------------------------------------
        let text = "";
        for (let i = 0; i < 8; i++) {
            let rndChoice = Math.round(Math.random()*1);
            if (i == 0 && rndChoice == 0) {
                text += 6;
                osszes++;
            } else if (i == 7 && rndChoice == 0) {
                text += 9;
            } else {
                text += Math.round(Math.random()*9);
            }            
        }
         //--------------------------------------------------
        AllX[n] = ctxX;
        AllY[n] = ctxY;
        AllTXT[n] = text;
        AllDate[n] = 5;
        n++;
		ctx.fillText(text, ctxX, ctxY);
        console.log("X: " + ctxX + " Y: " + ctxY);
        console.log(legkozelebbi + " " + legkozelebbiIndex);
    }
    }, rndtime);
}

function Distance(mousex,mousey) {
    let ih = false;
    for (let i = 0; i < AllX.length; i++) {
        if (mousex > AllX[i] && mousex < AllX[i] + width &&
            mousey < AllY[i] && mousey > AllY[i] - height) {
            console.log("good");
            if (szint == 1) {
                if (AllTXT[i][0] == "8") {
                    pontszam += 1;
                    pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";
                    let plusszegy=document.querySelector("#egy");
                    plusszegy.classList.remove("plussz-egy");
                    void plusszegy.offsetWidth;
                    plusszegy.innerHTML="+1";
                    plusszegy.classList.add("plussz-egy");
                    setTimeout(()=>{plusszegy.innerHTML="";},700);
                } else {
                    if (pontszam > 0) {
                        if (pause == true) {
                            fagyashoz.classList.remove("fagyasel");
                            void fagyashoz.offsetWidth;
                            fagyashoz.classList.add("fagyasel");   
                        }
                        pause = false;
                        pontszam -= 1;
                        pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";
                        let plusszegy=document.querySelector("#egy");
                        plusszegy.classList.remove("minusz-egy");
                        void plusszegy.offsetWidth;
                        plusszegy.innerHTML="-1";
                        plusszegy.classList.add("minusz-egy");
                        setTimeout(()=>{plusszegy.innerHTML="";},700);
                    }
                }
            } else if (szint == 2) {
                if (AllTXT[i][0] == "1" && AllTXT[i][1] == "2") {
                    pontszam += 1;
                    pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";
                    let plusszegy=document.querySelector("#egy");
                    plusszegy.classList.remove("plussz-egy");
                    void plusszegy.offsetWidth;
                    plusszegy.innerHTML="+1";
                    plusszegy.classList.add("plussz-egy");
                    setTimeout(()=>{plusszegy.innerHTML="";},700);
                } else {
                    if (pontszam > 0) {
                        if (pause == true) {
                            fagyashoz.classList.remove("fagyasel");
                            void fagyashoz.offsetWidth;
                            fagyashoz.classList.add("fagyasel");   
                        }
                        pause = false;
                        pontszam -= 1;
                        pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";
                        let plusszegy=document.querySelector("#egy");
                        plusszegy.classList.remove("minusz-egy");
                        void plusszegy.offsetWidth;
                        plusszegy.innerHTML="-1";
                        plusszegy.classList.add("minusz-egy");
                        setTimeout(()=>{plusszegy.innerHTML="";},700);
                    }
                }
            } else if (szint == 3) {
                if (AllTXT[i][0] == "6" && AllTXT[i][7] == "9") {
                    pontszam += 1;
                    pontmutato.innerHTML = "Hibalehetőségek: " + lehetosegek + " Pontszám: " + pontszam  + "<span id='egy'></span>";
                    let plusszegy=document.querySelector("#egy");
                    plusszegy.classList.remove("plussz-egy");
                    void plusszegy.offsetWidth;
                    plusszegy.style.left="59%";
                    plusszegy.innerHTML="+1";
                    plusszegy.classList.add("plussz-egy");
                    setTimeout(()=>{plusszegy.innerHTML="";},700);
                } else {
                    lehetosegek -= 1;
                    if (lehetosegek == 0) {
                        GameOver = true;
                        pontmutato.innerHTML = "Game Over";
                        pontmutato.classList.remove("gameover-anim");
                        void pontmutato.offsetWidth;
                        pontmutato.classList.add("gameover-anim");
                        pontmutato.innerHTML = "Hibalehetőségek: " + lehetosegek + " Pontszám: " + pontszam + "/" + osszes + "<span id='egy'></span>";
                        clearInterval(global_timer);
                        clearInterval(level_timer);
                    } else {
                        if (pause == true) {
                            fagyashoz.classList.remove("fagyasel");
                            void fagyashoz.offsetWidth;
                            fagyashoz.classList.add("fagyasel");   
                        }
                        pause = false;
                        pontmutato.innerHTML = "Hibalehetőségek: " + lehetosegek + " Pontszám: " + pontszam + "<span id='egy'></span>";
                        let plusszegy=document.querySelector("#egy");
                        plusszegy.classList.remove("minusz-egy");
                        plusszegy.style.left="59%";
                        void plusszegy.offsetWidth;
                        plusszegy.innerHTML="-1";
                        plusszegy.classList.add("minusz-egy");
                        setTimeout(()=>{plusszegy.innerHTML="";},700);
                    }
                }
            }
            sorszam = i;
            ih = true;
        }
    }
    if (ih == true) {
        ctx.fillStyle = "black";
        ctx.fillText(AllTXT[sorszam], AllX[sorszam], AllY[sorszam]);
        AllX[sorszam] = undefined
        AllY[sorszam] = undefined;
        AllTXT[sorszam] = undefined;
        AllDate[sorszam] = undefined;
        return true;
    } else {
        return false;
    }
}
// ONCLICK & MOUSEMOVE EVENTS
//-------------------------------------------------------------------------------
jatekmezo.addEventListener('click', (event) => {
    if (GameOver == false) {
        console.log(GameOver);
    console.log("clicked");
    const rect = jatekmezo.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top;
    Distance(x, y)
    }
});
jatekmezo.addEventListener('mousemove', (event) => {
    jatekmezo.classList.remove("pointer");
    jatekmezo.classList.add("normal");
    const rect = jatekmezo.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top;
    for (let i = 0; i < AllX.length; i++) {
        if ((x > AllX[i] && x < AllX[i] + width) && (y < AllY[i] && y > AllY[i] - height)) {
            jatekmezo.classList.remove("normal");
            jatekmezo.classList.add("pointer");
        }
    }
});
// VISSZASZÁMLÁLÁS A JÁTÉK MEGKEZDÉSE ELŐTT
//-------------------------------------------------------------------------------
function LeirasSzamlalo()
{
    timertxt.innerHTML="";
    let ido=3
    szamlalo=setInterval(()=>{
        if(ido===0){
            clearInterval(szamlalo)
        }
        else{
            timertxt.innerHTML="Játék indul: " + ido;
            ido--;
        }
    },1000);
}
// JÁTÉKOT ELINDÍTÓ & MEGSZAKÍTÓ GOMBOK ONCLICK ESEMÉNYEI
//-------------------------------------------------------------------------------
function Konnyu() {
    szint = 1;
    GameOver = false;
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
    pontmutato.innerHTML="A jó kód 8-cal kezdödik.";
    LeirasSzamlalo();
    setTimeout(() => {
        ElsoSzint();
    }, 3000);
}
function Kozepes() {
    szint = 2;
    GameOver = false;
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
    pontmutato.innerHTML="A jó kód 12-vel kezdödik.";
    LeirasSzamlalo();
    setTimeout(() => {
        MasodikSzint()
    }, 3000);
}
function Nehez() {
    szint = 3;
    GameOver = false;
    pontmutato.innerHTML = "Hibalehetőségek: " + lehetosegek + "<span id='egy'></span>" + " Pontszám: " + pontszam;
    menu.style.visibility = "hidden";
    leiras.style.visibility="hidden";
    jatekmezo.style.visibility = "visible";
    jatekmenu.style.visibility = "visible";
     pontmutato.innerHTML="A jó kód 6-tal kezdödik és 9-ces a vége.";
     LeirasSzamlalo();
     setTimeout(() => {
        HarmadikSzint()
    }, 3000);
}

//azert raktem ezt fel h uj jateknal ne legyen gebasz
function IdoLassitas() {    
    document.querySelector("body").classList.remove("fentlent");
    document.querySelector("body").classList.remove("lentfent");
    void document.querySelector("body").offsetWidth;
    document.querySelector("body").classList.add("lentfent");
    document.querySelector("body").style.backgroundPosition="bottom";

    lassitanim=setInterval(()=>{
        document.querySelector("body").classList.remove("fentlent");
        void document.querySelector("body").offsetWidth;
        document.querySelector("body").classList.add("fentlemt");
        document.querySelector("body").style.backgroundPosition="top";
    },6000);

    lassitanim2=setInterval(()=>{
        document.querySelector("body").classList.remove("fentlent");
        document.querySelector("body").classList.remove("lentfent");
        void document.querySelector("body").offsetWidth;
        document.querySelector("body").classList.add("lentfent");
        document.querySelector("body").style.backgroundPosition="bottom";
    },12000);
}

function Uj_Jatek() {
    menu.style.visibility = "visible";
    jatekmezo.style.visibility = "hidden";
    jatekmenu.style.visibility = "hidden";
    hatralevo_ido = 120;
    pontszam = 0;
    szint = 0;
    osszes = 0;
    lehetosegek = 3;
    timertxt.classList.remove("gameover-anim");
    pontmutato.classList.remove("gameover-anim");
    GameOver = false;
    timertxt.innerHTML = "Hátralévő idő: " + hatralevo_ido;
    pontmutato.innerHTML = "Pontszám: " + pontszam;
    ctx.clearRect(0, 0, 850, 550);
    clearInterval(level_timer);
    clearInterval(global_timer);
    clearInterval(szamlalo);
    clearInterval(eltunes);
    clearInterval(lassitanim);//idolassit anim vege
    clearInterval(lassitanim2);//idolassit anim vege
    //hogy ha fagyas kozben szeretne valamiert uj jatekot kezdeni akkor ez azert kell
    if(fagyashoz.className=='fagyasmeg')
    {
        fagyashoz.classList.remove('fagyasmeg');
        void fagyashoz.offsetWidth;
        fagyashoz.classList.add('fagyasel');
    }
}
function Torol() {
    vonal.style.transform="scale(0)";
    vonal.borderBottom="1px solid white";
    vonal.style.transition="transform 500ms ease-in-out";
    AnimacioKi();
    setTimeout(()=>{leiras.style.visibility="hidden";},200);
}
//-------------------------------------------------------------------------------
function KonnyuLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjelenése: 2 másodpercenként <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: Minden kód ami 8-cal kezdődik <br/> Effektek, képességek: hitstreak ami után adott ideig dupla pont jár,<br/> Elrontott kód: pontlevonás, ha mínuszba kerülünk a játéknak vége</p>";
    Animacio();
    VonalAnimacio();
}
function KozepesLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjelenése: 1 másodpercenként <br/> Kódok eltűnése: 5 mp-ként <br/> Keresendő kódok: Minden kód ami 1-gyel vagy 2-vel kezdődik <br/> Effektek, képességek: hitstreak ami után adott ideig dupla pont jár, <br/>keresendő kód megjelenítése, időfagyasztás <br/> Elrontott kód: pontlevonás, ha mínuszba kerülünk a játéknak vége</p>";
    Animacio();
    VonalAnimacio();
}
function NehezLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "<p>Kódok megjelenése: 1 másodpercenként <br/> Kódok eltűnése: 3 mp-ként <br/> Keresendő kódok: Minden kód ami 6-tal kezdődik és 9-cel végződik <br/> Effektek, képességek: hitstreak ami után adott ideig dupla pont jár, <br/> keresendő kód megjelenítése, időfagyasztás, időlassítás <br/> Elrontott kód: 3 hibalehetőség, tuána a játéknak vége</p>";
    Animacio();
    VonalAnimacio();
}
//-------------------------------------------------------------------------------
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
    vonal.style.width="50%";
    vonal.style.marginTop="10px";
}
//-------------------------------------------------------------------------------
function Mutat()
{
    let ido=3
    eltunes=setInterval(()=>{
        if(ido===0){
            clearInterval(eltunes)
            if(szint==3){
                pontmutato.innerHTML="Hibalehetőségek: " + lehetosegek + " Pontszám: " + pontszam + "<span id='egy'></span>";
            }
            else{
                pontmutato.innerHTML="Pontszám: "+pontszam;
            }
        } else {
            switch (szint){
                case 1:
                    pontmutato.innerHTML="A jó kód 8-cal kezdödik.";
                    break;
                case 2:
                    pontmutato.innerHTML="A jó kód 12-vel kezdödik.";
                    break;
                case 3:
                    pontmutato.innerHTML="A jó kód 6-tal kezdödik és 9-ces a vége.";
                    break;
            }
            ido--;
        }
    },1000);
    if(szint==3){
        pontmutato.innerHTML="Hibalehetőségek: " + lehetosegek + " Pontszám: " + pontszam + "<span id='egy'></span>";
    }
    else{
        pontmutato.innerHTML="Pontszám: "+pontszam;
    }
}
function IdoFagyasztas() {
    fagyashoz.classList.remove("fagyasel");
    fagyashoz.classList.remove("fagyasmeg");
    void fagyashoz.offsetWidth;
    fagyashoz.classList.add("fagyasmeg");
    fagyashoz.style.visibility="visible";
    pause = true;

}
