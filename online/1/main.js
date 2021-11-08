const adat=document.querySelector("#szambeker");
const hiba=document.querySelector("#hiba");
const lista=document.querySelector("#relativprimek");

let ertek=0;
let relativprimek=[];
let db=0;

hiba.innerText="";

function Kiir()
{
    ertek=parseInt(adat.value);
    console.log(ertek%10);
    if(isNaN(ertek))
    {
        lista.innerHTML="";
        hiba.innerText="Nem adott meg értéket!";
    }
    else if(ertek<2 || ertek>100)
    {
        lista.innerHTML="";
        hiba.innerText="A megadott szám nem megfelelő!";
    }
    else{
        hiba.innerText="";
        lista.innerHTML="";
        Vizsgalat();
        lista.innerHTML=`<h4>${ertek} relatív prímszámai:</h4>`;
        for(let i=0;i<db;i++)
        {
            lista.innerHTML+=relativprimek[i]+"<br/>";
        }
        relativprimek=[];
        ertek=null;
        adat.value=null;
    }
}

function Vizsgalat()
{
    db=0;
    let h;
    for (let i=2;i<=100;i++)
    {
        h=Seged(ertek,i);
        if(h==1)
        {
            relativprimek[db]=i;
            db++;
        }
    }
}

function Seged(ert,ind)
{
    let seg;  
    while(ind!=0)  
    {  
       seg=ert;  
       ert=ind;  
       ind=seg%ind;  
    }  
    return ert; 
}

