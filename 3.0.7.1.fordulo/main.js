let proba = document.querySelector("#proba");
let leiras = document.querySelector("#leiras");
let vonal=document.querySelector("#vonal");
let menu = document.querySelector("#menu");
let jatekmezo = document.querySelector("#jatekmezo");
let jatekmenu = document.querySelector("#jatekmenu");
let timertxt = document.querySelector("#timer");
let pontmutato = document.querySelector("#pontszam");
const fagyashoz=document.querySelector("#fagyashoz");

jatekmezo.style.visibility = "hidden";
jatekmenu.style.visibility = "hidden";
proba.style.visibility = "hidden";

vonal.style.width="40%";
vonal.style.marginLeft="auto";
vonal.style.marginRight="auto";

jatekmezo.classList.add("normal");

//-------------------------------------------------------------------------------
// canvas
let ctx = jatekmezo.getContext('2d');
let n = 0;
let ctxX = 0;
let ctxY = 0;
let sorszam = 0;
let width = 130;
let height = 35;
// setintervalok és settimeoutok
let global_timer = "";
let visszaszamlalas = "";
let lassitanim="";
let lassitanim2="";
let eltunes = "";
let level_timer = "";
// animációkhoz és képességekhez
let fagyujjatek=false;
let fagyasztas = false;
let fagyasztvolte = false;
let lassitas = false;
let lassitvolte = false;
// kódok adatai
let AllX = [];
let AllY = [];
let AllTXT = [];
let AllDate = [];
// játkmechanika
let hatralevo_ido = 120;
let szint = 0;
let pontszam = 0;
let sorozat = 0;
let lehetosegek = 3;
let rndtime = 0;
let kodeltunes = 0;
let pause = false;
let GameOver = false;
let osszes = 0;

function ElsoSzint() {
	rndtime = (Math.floor(Math.random()*(6-4+1))+4)*1000;
    global_timer = setInterval(() => {
        if (pause != true) {
        kodeltunes = Math.floor(Math.random()*(6-4+1))+4;
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
            pontmutato.innerHTML = "Pontszám: " + pontszam;
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
                if (ctxY - height < minY) {
                    ctxX -= width; 
                    ctxY += height;
                } else if (minY - width < ctxY) {
                    ctxX -= width; 
                    ctxY -= height;
                } 
            } else if (minX + width > ctxX) {
                if (ctxY - height < minY) {
                    ctxX += width;
                    ctxY += height;
                } else if (minY - width < ctxY) {
                    ctxX += width;
                    ctxY -= height;
                } 
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
        if (lassitas == true && lassitvolte == false) {
            AllDate[n] = kodeltunes*2;
        } else { 
            AllDate[n] = kodeltunes;
        }
        n++;
        ctx.fillText(text, ctxX, ctxY);
    }
    }, rndtime);
    }

function MasodikSzint() {
	rndtime = (Math.round(Math.random()*(4-2+1))+2)*1000;
    global_timer = setInterval(() => {
        if (pause != true) {
        kodeltunes = Math.floor(Math.random()*(4-2+1))+1;
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
                pontmutato.innerHTML = "Pontszám: " + pontszam;
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
                if (ctxY - height < minY) {
                    ctxX -= width; 
                    ctxY += height;
                } else if (minY - width < ctxY) {
                    ctxX -= width; 
                    ctxY -= height;
                } 
            } else if (minX + width > ctxX) {
                if (ctxY - height < minY) {
                    ctxX += width;
                    ctxY += height;
                } else if (minY - width < ctxY) {
                    ctxX += width;
                    ctxY -= height;
                } 
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
        if (lassitas == true && lassitvolte == false) {
            AllDate[n] = kodeltunes*2;
        } else { 
            AllDate[n] = kodeltunes;
        }
        n++;
		ctx.fillText(text, ctxX, ctxY);
    }
    }, rndtime);
}

function HarmadikSzint() {
	rndtime = (Math.round(Math.random()*(2-1+1))+1)*1000;
    global_timer = setInterval(() => {
        if (pause != true)
        {
        kodeltunes = Math.floor(Math.random()*(4-2+1))+2;
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
                pontmutato.innerHTML = "Pontszám: " + pontszam;
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
                if (ctxY - height < minY) {
                    ctxX -= width; 
                    ctxY += height;
                } else if (minY - width < ctxY) {
                    ctxX -= width; 
                    ctxY -= height;
                } 
            } else if (minX + width > ctxX) {
                if (ctxY - height < minY) {
                    ctxX += width;
                    ctxY += height;
                } else if (minY - width < ctxY) {
                    ctxX += width;
                    ctxY -= height;
                } 
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
        if (lassitas == true && lassitvolte == false) {
            AllDate[n] = kodeltunes*2;
        } else { 
            AllDate[n] = kodeltunes;
        }
        n++;
		ctx.fillText(text, ctxX, ctxY);
    }
    }, rndtime);
}

function Distance(mousex,mousey) {
    let ih = false;
    for (let i = 0; i < AllX.length; i++) {
        if (mousex > AllX[i] && mousex < AllX[i] + width &&
            mousey < AllY[i] && mousey > AllY[i] - height) {
            if (szint == 1) {
                if (AllTXT[i][0] == "8") {
                    if (sorozat <= 5) {
                        pontszam += 1;
                        Hitstreak();
                    } else if (sorozat > 5 && sorozat <= 10) {
                        pontszam += 2;
                        Hitstreak();
                    } else if (sorozat > 10 && sorozat <= 15) {
                        pontszam += 3;
                        Hitstreak();
                    } else if (sorozat > 15 && sorozat <= 20) {
                        pontszam += 4;
                        Hitstreak();
                    } else if (sorozat > 20 && sorozat <= 25) {
                        pontszam += 5;
                        Hitstreak();
                    } else if (sorozat > 25 && sorozat <= 30) {
                        pontszam += 6;
                        Hitstreak();
                    } else if (sorozat > 30 && sorozat <= 35) {
                        pontszam += 7;
                        Hitstreak();
                    }else if (sorozat > 35 && sorozat <= 40) {
                        pontszam += 8;
                        Hitstreak();
                    } else if (sorozat > 40 && sorozat <= 45) {
                        pontszam += 9;
                        Hitstreak();
                    } else if (sorozat > 45 && sorozat <= 50) {
                        pontszam += 10;
                        Hitstreak();
                    }
                    pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";
                    let plusszegy=document.querySelector("#egy");
                    plusszegy.classList.remove("plussz-egy");
                    void plusszegy.offsetWidth;
                   if (sorozat <= 5) {
                        plusszegy.innerHTML="+1";
                    } else if (sorozat > 5 && sorozat <= 10) {
                        plusszegy.innerHTML="+2";
                    } else if (sorozat > 10 && sorozat <= 15) {
                        plusszegy.innerHTML="+3";
                    } else if (sorozat > 15 && sorozat <= 20) {
                        plusszegy.innerHTML="+4";
                    } else if (sorozat > 20 && sorozat <= 25) {
                        plusszegy.innerHTML="+5";
                    } else if (sorozat > 25 && sorozat <= 30) {
                        plusszegy.innerHTML="+6";
                    } else if (sorozat > 30 && sorozat <= 35) {
                        plusszegy.innerHTML="+7";
                    }else if (sorozat > 35 && sorozat <= 40) {
                        plusszegy.innerHTML="+8";
                    } else if (sorozat > 40 && sorozat <= 45) {
                        plusszegy.innerHTML="+9";
                    } else if (sorozat > 45 && sorozat <= 50) {
                        plusszegy.innerHTML="+10";
                    }
                    plusszegy.classList.add("plussz-egy");
                    setTimeout(()=>{plusszegy.innerHTML="";},700);
                    if (sorozat < 5) {
                        sorozat++;
                    }
                } else {
                    if (pontszam > 0) {
                        if (pause == true) {
                            fagyashoz.classList.remove("fagyasel");
                            void fagyashoz.offsetWidth;
                            fagyashoz.classList.add("fagyasel");   
                        }
                        pontszam -= 1;
                        fagyasztvolte = false;
                        pause = false;
                        sorozat = 0;
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
                    if (sorozat <= 5) {
                        pontszam += 1;
                        Hitstreak();
                    } else if (sorozat > 5 && sorozat <= 10) {
                        pontszam += 2;
                        Hitstreak();
                    } else if (sorozat > 10 && sorozat <= 15) {
                        pontszam += 3;
                        Hitstreak();
                    } else if (sorozat > 15 && sorozat <= 20) {
                        pontszam += 4;
                        Hitstreak();
                    } else if (sorozat > 20 && sorozat <= 25) {
                        pontszam += 5;
                        Hitstreak();
                    } else if (sorozat > 25 && sorozat <= 30) {
                        pontszam += 6;
                        Hitstreak();
                    } else if (sorozat > 30 && sorozat <= 35) {
                        pontszam += 7;
                        Hitstreak();
                    }else if (sorozat > 35 && sorozat <= 40) {
                        pontszam += 8;
                        Hitstreak();
                    } else if (sorozat > 40 && sorozat <= 45) {
                        pontszam += 9;
                        Hitstreak();
                    } else if (sorozat > 45 && sorozat <= 50) {
                        pontszam += 10;
                        Hitstreak();
                    }
                    pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";
                    let plusszegy=document.querySelector("#egy");
                    plusszegy.classList.remove("plussz-egy");
                    void plusszegy.offsetWidth;
                    if (sorozat <= 5) {
                        plusszegy.innerHTML="+1";
                    } else if (sorozat > 5 && sorozat <= 10) {
                        plusszegy.innerHTML="+2";
                    } else if (sorozat > 10 && sorozat <= 15) {
                        plusszegy.innerHTML="+3";
                    } else if (sorozat > 15 && sorozat <= 20) {
                        plusszegy.innerHTML="+4";
                    } else if (sorozat > 20 && sorozat <= 25) {
                        plusszegy.innerHTML="+5";
                    } else if (sorozat > 25 && sorozat <= 30) {
                        plusszegy.innerHTML="+6";
                    } else if (sorozat > 30 && sorozat <= 35) {
                        plusszegy.innerHTML="+7";
                    }else if (sorozat > 35 && sorozat <= 40) {
                        plusszegy.innerHTML="+8";
                    } else if (sorozat > 40 && sorozat <= 45) {
                        plusszegy.innerHTML="+9";
                    } else if (sorozat > 45 && sorozat <= 50) {
                        plusszegy.innerHTML="+10";
                    }
                    plusszegy.classList.add("plussz-egy");
                    setTimeout(()=>{plusszegy.innerHTML="";},700);
                } else {
                    if (pontszam > 0) {
                        if (pause == true) {
                            fagyashoz.classList.remove("fagyasel");
                            void fagyashoz.offsetWidth;
                            fagyashoz.classList.add("fagyasel");   
                        }
                        fagyasztvolte = false;
                        pause = false;
                        pontszam -= 1;
                        sorozat = 0;
                        pontmutato.innerHTML = "Pontszám: " + pontszam + "<span id='egy'></span>";
                        let plusszegy=document.querySelector("#egy");
                        plusszegy.classList.remove("minusz-egy");
                        void plusszegy.offsetWidth;
                        plusszegy.innerHTML="-1";
                        plusszegy.classList.add("minusz-egy");
                        setTimeout(()=>{plusszegy.innerHTML="";},700);
                        if (sorozat < 5) {
                            sorozat++;
                        }
                    }
                }
            } else if (szint == 3) {
                if (AllTXT[i][0] == "6" && AllTXT[i][7] == "9") {
                    if (sorozat <= 5) {
                        pontszam += 1;
                        Hitstreak();
                    } else if (sorozat > 5 && sorozat <= 10) {
                        pontszam += 2;
                        Hitstreak();
                    } else if (sorozat > 10 && sorozat <= 15) {
                        pontszam += 3;
                        Hitstreak();
                    } else if (sorozat > 15 && sorozat <= 20) {
                        pontszam += 4;
                        Hitstreak();
                    } else if (sorozat > 20 && sorozat <= 25) {
                        pontszam += 5;
                        Hitstreak();
                    } else if (sorozat > 25 && sorozat <= 30) {
                        pontszam += 6;
                        Hitstreak();
                    } else if (sorozat > 30 && sorozat <= 35) {
                        pontszam += 7;
                        Hitstreak();
                    }else if (sorozat > 35 && sorozat <= 40) {
                        pontszam += 8;
                        Hitstreak();
                    } else if (sorozat > 40 && sorozat <= 45) {
                        pontszam += 9;
                        Hitstreak();
                    } else if (sorozat > 45 && sorozat <= 50) {
                        pontszam += 10;
                        Hitstreak();
                    }
                    pontmutato.innerHTML = "Hibalehetőségek: " + lehetosegek + " Pontszám: " + pontszam  + "<span id='egy'></span>";
                    let plusszegy=document.querySelector("#egy");
                    plusszegy.classList.remove("plussz-egy");
                    void plusszegy.offsetWidth;
                    plusszegy.style.left="59%";
                    if (sorozat <= 5) {
                        plusszegy.innerHTML="+1";
                    } else if (sorozat > 5 && sorozat <= 10) {
                        plusszegy.innerHTML="+2";
                    } else if (sorozat > 10 && sorozat <= 15) {
                        plusszegy.innerHTML="+3";
                    } else if (sorozat > 15 && sorozat <= 20) {
                        plusszegy.innerHTML="+4";
                    } else if (sorozat > 20 && sorozat <= 25) {
                        plusszegy.innerHTML="+5";
                    } else if (sorozat > 25 && sorozat <= 30) {
                        plusszegy.innerHTML="+6";
                    } else if (sorozat > 30 && sorozat <= 35) {
                        plusszegy.innerHTML="+7";
                    }else if (sorozat > 35 && sorozat <= 40) {
                        plusszegy.innerHTML="+8";
                    } else if (sorozat > 40 && sorozat <= 45) {
                        plusszegy.innerHTML="+9";
                    } else if (sorozat > 45 && sorozat <= 50) {
                        plusszegy.innerHTML="+10";
                    }
                    plusszegy.classList.add("plussz-egy");
                    setTimeout(()=>{plusszegy.innerHTML="";},700);
                    if (sorozat < 10) {
                        sorozat++;
                    }
                } else {
                    lehetosegek -= 1;
                    sorozat = 0;
                    if (lehetosegek == 0) {
                        GameOver = true;
                        pontmutato.innerHTML = "Game Over";
                        pontmutato.classList.remove("gameover-anim");
                        void pontmutato.offsetWidth;
                        pontmutato.classList.add("gameover-anim");
                        pontmutato.innerHTML = "Hibalehetőségek: " + lehetosegek + " Pontszám: " + pontszam + "<span id='egy'></span>";
                        clearInterval(global_timer);
                        clearInterval(level_timer);
                    } else {
                        if (pause == true) {
                            fagyashoz.classList.remove("fagyasel");
                            void fagyashoz.offsetWidth;
                            fagyashoz.classList.add("fagyasel");   
                        }
                        fagyasztvolte = false;
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
    visszaszamlalas = setTimeout(() => {
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
    visszaszamlalas = setTimeout(() => {
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
     visszaszamlalas = setTimeout(() => {
        HarmadikSzint()
    }, 3000);
}
function Uj_Jatek() {
    lassitas = false;
    lassitvolte = false;
    fagyasztas = false;
    fagyasztvolte = false;
    menu.style.visibility = "visible";
    jatekmezo.style.visibility = "hidden";
    jatekmenu.style.visibility = "hidden";
    hatralevo_ido = 120;
    pontszam = 0;
    szint = 0;
    osszes = 0;
    lehetosegek = 3;
    kodeltunes = 0;
    sorozat = 0;
    timertxt.classList.remove("gameover-anim");
    pontmutato.classList.remove("gameover-anim");
    GameOver = false;
    timertxt.innerHTML = "Hátralévő idő: " + hatralevo_ido;
    pontmutato.innerHTML = "Pontszám: " + pontszam;
    ctx.clearRect(0, 0, 850, 550)
    clearInterval(level_timer);
    clearInterval(global_timer);
    clearInterval(szamlalo);
    clearInterval(eltunes);
    clearInterval(lassitanim);
    clearInterval(lassitanim2);
    clearTimeout(visszaszamlalas);
    document.querySelector("body").classList.remove("fentlent");
    void document.querySelector("body").offsetWidth;
    document.querySelector("body").classList.add("fentlent");
    document.querySelector("body").style.backgroundPosition="top";
    //hogy ha fagyas kozben szeretne valamiert uj jatekot kezdeni akkor ez azert kell
    if(fagyashoz.className=='fagyasmeg')
    {
        fagyujjatek=true;
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
    "Játékidő: 120 mp <br/>" +
    "Kódok megjelenése: 6-4 mp közötti skálán, ez a játék elején dől el <br>" +
    "Kódok eltűnése: teljesen véletlenszerűen minden kód esetében <br/>" +
    "Keresendő kódok: minden olyan kód ami 8-cal kezdődik <br/>" +
    "Elrontott kód: pontlevonás, mínuszba nem megy a számláló <br/>" +
    "Effektek, képességek: <br/>" + 
    "hitstreak: Ha hibátlanul játszunk minden öt alkalom után eggyel nő a kapott őpntok száma. <br/> 5 után minden jó kódért 2 pont, 10 után minden jó kódért 3 pont jár, és így tovább <br/>" +
    "Időfagyasztás: 10mp-ig vagy amíg hibátlanul gyűjtjük a kódokat megáll a számláló és új kódok sem jelennek meg <br/>" +
    "Időlassítás: Az idő ugyan úgy fpg telni, de a kódok létszer olyan lassan tűnnek el <br/>";
    Animacio();
    VonalAnimacio();
}
function KozepesLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "Játékidő: 120 mp <br/>" +
    "Kódok megjelenése: 4-2 mp közötti skálán, ez a játék elején dől el <br>" +
    "Kódok eltűnése: teljesen véletlenszerűen minden kód esetében <br/>" +
    "Keresendő kódok: minden olyan kód ami 12-vel kezdődik <br/>" +
    "Elrontott kód: pontlevonás, mínuszba nem megy a számláló <br/>" +
    "Effektek, képességek: <br/>" + 
    "hitstreak: Ha hibátlanul játszunk minden öt alkalom után eggyel nő a kapott őpntok száma. <br/> 5 után minden jó kódért 2 pont, 10 után minden jó kódért 3 pont jár, és így tovább <br/>" +
    "Időfagyasztás: 10mp-ig vagy amíg hibátlanul gyűjtjük a kódokat megáll a számláló és új kódok sem jelennek meg <br/>" +
    "Időlassítás: Az idő ugyan úgy fpg telni, de a kódok létszer olyan lassan tűnnek el <br/>";
    Animacio();
    VonalAnimacio();
}
function NehezLeiras() {
    setTimeout(()=>{leiras.style.visibility="visible";},200);
    leiras.innerHTML = 
    "Játékidő: 120 mp <br/>" +
    "Kódok megjelenése: 2-1 mp közötti skálán, ez a játék elején dől el <br>" +
    "Kódok eltűnése: teljesen véletlenszerűen minden kód esetében <br/>" +
    "Keresendő kódok: minden olyan kód ami 6-tal kezdődik és 9-cel végződik <br/>" +
    "Elrontott kód: 3 elrontott kód után game over" +
    "Effektek, képességek: <br/>" + 
    "hitstreak: Ha hibátlanul játszunk minden öt alkalom után eggyel nő a kapott őpntok száma. <br/> 5 után minden jó kódért 2 pont, 10 után minden jó kódért 3 pont jár, és így tovább <br/>" +
    "Időfagyasztás: 10mp-ig vagy amíg hibátlanul gyűjtjük a kódokat megáll a számláló és új kódok sem jelennek meg <br/>" +
    "Időlassítás: Az idő ugyan úgy fpg telni, de a kódok létszer olyan lassan tűnnek el <br/>";
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
    let ido=3;
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
    if (fagyasztas == false && ((lassitas == false && lassitvolte == false) || (lassitas == true && lassitvolte == true)) && hatralevo_ido < 120) {
        fagyasztas = true;
        fagyasztvolte = true;
        fagyashoz.classList.remove("fagyasel")
        fagyashoz.classList.remove("fagyasmeg");
        void fagyashoz.offsetWidth;
        fagyashoz.classList.add("fagyasmeg");
        fagyashoz.style.visibility="visible";
        pause = true;
        setTimeout(() => {
            if(pause==true && fagyujjatek==true)
            {
                fagyasztvolte=false;
                pause=false;
                fagyujjatek=false;
            }
            else if (pause == true) {
                fagyasztvolte = false;
                fagyashoz.classList.remove("fagyasel");
                void fagyashoz.offsetWidth;
                fagyashoz.classList.add("fagyasel");
                pause = false;   
            }
        }, 10000);
    }
}

function IdoLassitas() {    
    if (lassitas == false && fagyasztvolte == false && hatralevo_ido < 120) {
        lassitas = true;
        document.querySelector("body").classList.remove("fentlent");
        document.querySelector("body").classList.remove("lentfent");
        void document.querySelector("body").offsetWidth;
        document.querySelector("body").classList.add("lentfent");
        document.querySelector("body").style.backgroundPosition="bottom";

        lassitanim=setInterval(()=>{
            document.querySelector("body").classList.remove("fentlent");
            void document.querySelector("body").offsetWidth;
            document.querySelector("body").classList.add("fentlent");
            document.querySelector("body").style.backgroundPosition="top";
        },6000);

        lassitanim2=setInterval(()=>{
            document.querySelector("body").classList.remove("fentlent");
            document.querySelector("body").classList.remove("lentfent");
            void document.querySelector("body").offsetWidth;
            document.querySelector("body").classList.add("lentfent");
            document.querySelector("body").style.backgroundPosition="bottom";
        },12000);
        for (let i = 0; i < AllDate.length; i++) {
            AllDate[i] = AllDate[i]*2;           
        }
        setTimeout(() => {
            for (let i = 0; i < AllDate.length; i++) {
                AllDate[i] = AllDate[i]/2;           
                clearInterval(lassitanim);
                clearInterval(lassitanim2);   
            }
            lassitvolte = true;
        }, 30000);
    }
}
function Hitstreak()
{
    if (pontszam == 5) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="2x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);

    } else if (pontszam == 10) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="3x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    } else if (pontszam == 15) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="4x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    } else if (pontszam == 20) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="5x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    } else if (pontszam == 25) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="6x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    } else if (pontszam == 30) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="7x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    } else if (pontszam == 35) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="8x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    } else if (pontszam == 40) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="9x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    } else if (pontszam == 40) {
        pontmutato.classList.remove('szorzo')
        void pontmutato.offsetWidth;
        pontmutato.classList.add('szorzo')
        setTimeout(()=>{pontmutato.innerHTML="10x szorzo"},0);
        setTimeout(()  => {pontmutato.classList.remove('szorzo');
        pontmutato.innerHTML="Pontszám: "+pontszam;},1500);
    }
}