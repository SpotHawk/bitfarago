const adat=document.querySelector("#bevitel");
const valasz=document.querySelector("#valasz");

let ertek=0;
let joe=false;
let mintak=[];
let db;
let van=false;

function Ell()
{
    mintak=[];
    van=false;
    valasz.innerText="";
    hiba.innerText="";
    ertek=adat.value;
    if(isNaN(ertek))
    {
        hiba.innerText="Nem adott meg értéket!";
    }
    for(let i=0;i<ertek.length;i++)
    {
        if(ertek[i]==0 || ertek[i]==1)
        {
            joe=true;
        }
        else
        {
            joe=false;
            hiba.innerText="Nem megfelelő a bevitt adat!";
        }
    }
    if(joe)
    {
        valasz.innerText="";
            Tordeles();
            Vizsgal();
            if(ertek.length<=6)
            {
                valasz.innerText="Megfelelő a kód!";
            }
            else if(van)
            {
                valasz.innerText="Nem megfelelő a kód!";
            }
    }
}

function Tordeles()
{
    /*
    let seged=Math.floor((ertek.length)%5);
    let seged2=seged*5;
    let seged3=(ertek.length)-seged2; //mennyi + karakter az otos felosztas utan*/
    db=0;
    for(let i=0;i<ertek.length;i++)
    {
        if(i<=(ertek.length)-6)
        {
            mintak[db]=ertek.substring(i,i+6);
        }
        else
        {
            mintak[db]=ertek.substring((ertek.length-6),ertek.length)
        }
        db++;
    }
}

function Vizsgal()
{
    van=false;
    for (let i=0;i<db;i++)
    {
        for(let j=1;j<(db-1);j++)
        {
            mintak[i]=mintak[j];
            van=true;
        }
    }
}