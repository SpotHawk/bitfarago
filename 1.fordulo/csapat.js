let davidclick = 0; 
function Davidrol() {
    const rolam = document.querySelector("#david");
    davidclick++;
    if (davidclick == 1) {
        rolam.innerHTML = 
        "Czinderi Dávidnak hívnak és 17 éves vagyok. " + "<br/>" + 
        " Elsődleges hobbim a programozás és a jövőben is ezzel szeretnék foglalkozni. "+ "<br/>" + 
        "Szabadidőmben ezenkívül még számítógépes játékokkal szoktam játszani.";
    } else {
        rolam.innerHTML = "";
        davidclick = 0;
    }
}
let patrikclick = 0; 
function Patrikrol() {
    const rolam = document.querySelector("#patrik");
    patrikclick++;
    if (patrikclick == 1) {
       rolam.innerHTML = "Németh Patriknak hívnak, 18 éves vagyok." + "<br/>" + 
        " Régóta foglalkoztat az informatika." + "<br/>" + 
        " Szeretek programozni, és a későbbiekben is ezzel szeretnék foglalkozni.";
    } else {
        rolam.innerHTML = "";
        patrikclick = 0;
    }
}
let gergoclick = 0; 
function Gergorol() {
    const rolam = document.querySelector("#gergo");
    gergoclick++;
    if (gergoclick == 1) {
        rolam.innerHTML = "Nagy Gergő vagyok, 18 éves. Szeretek számítógépes játékokkal játszani és focizni.";
    } else {
        rolam.innerHTML = "";
        gergoclick = 0;
    }
}

let sorszam = 0;
const elso = document.querySelector("#elsokep");
const masodik = document.querySelector("#masodikkep");
const harmadik = document.querySelector("#harmadikkep");

function Lapoz() {
    sorszam++;
	if (sorszam == 1){
		elso.style.visibility = "visible";
	} else if (sorszam == 2) {
		masodik.style.visibility = "visible";
	} else if (sorszam == 3) {
		harmadik.style.visibility = "visible";
	} else if (sorszam == 4) {
        elso.style.visibility = "hidden";
		masodik.style.visibility = "hidden";
		harmadik.style.visibility = "hidden";
        sorszam = 0;
    }
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