const login=document.querySelector('#bej');
const signup=document.querySelector('#reg');
const form=document.querySelector('#user-form');
const logi=document.querySelector('#belepes');
const nevinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const error=document.querySelector('#errorMsg');
login.style.fontWeight='bold';

signup.addEventListener('click', onKlikk);

function onKlikk()
{
    while(signup.style.fontWeight!='bold')
    {
        login.style.fontWeight='normal';
        signup.style.fontWeight='bold';
        if(document.querySelector('#belepes'))
        {
        document.querySelector('#belepes').remove();
        }
        const dv=document.createElement('div');
        form.appendChild(dv);
        const lb=document.createElement('label');
        lb.appendChild(document.createTextNode('Email újra:'));
        dv.appendChild(lb);
        dv.id='dive';
        lb.id='lbl';
        const ip=document.createElement('input');
        ip.id='emailval';
        dv.appendChild(ip);
        const bt=document.createElement('input');
        bt.type='button';
        bt.id='regiszt';
        bt.className='regbejv';
        bt.value='Regisztráció';
        form.appendChild(bt);
        const signu=document.querySelector('#regiszt');
        const emailmegerosit=document.querySelector('#emailval');
        signu.addEventListener('click', ellenorzes);
        function ellenorzes()
        {
            let hossz=nevinput.value.length;
            let nev=nevinput.value;
            let email=emailinput.value;
            let emailhossz=email.length;
            //console.log(hossz);
            if(hossz==0)
            {
                error.className='errorMsg';
                error.innerHTML='Nem adott meg nevet!';
                clearError();
            }
            else
            {
                if(hossz<2)
                {
                    error.className='errorMsg';
                    error.innerHTML='Nem megfelelő nevet adott meg!';
                    clearError();
                }
                else
                {
                    if(nev[0]!==nev[0].toUpperCase())
                    {
                        error.className='errorMsg';
                        error.innerHTML='Nem nagybetűvel kezdődik a név!';
                        clearError();
                    }
                    else
                    {
                        if(email=='')
                        {
                            error.className='errorMsg';
                            error.innerHTML='Nem adott meg email-címet!';
                            clearError();
                        }
                        else
                        {
                            if(email[0]=='@')
                            {
                                error.className='errorMsg';
                                error.innerHTML='Az email-cím nem kezdődhet kukaccal!';
                                clearError();
                            }
                            else
                            {
                                if(email[emailhossz-3]!='.' && email[emailhossz-4]!='.')
                                {
                                    error.className='errorMsg';
                                    error.innerHTML='Nem megfelelő az email-cím!';
                                    clearError();
                                }
                                else
                                {
                                    let vankukac=false;
                                    for(let i=0;i<emailhossz;i++)
                                    {
                                        if(email[i]=='@')
                                        {
                                            vankukac=true;
                                        }
                                    }
                                    if(!vankukac)
                                    {
                                        error.className='errorMsg';
                                        error.innerHTML='Nem megfelelő az email-cím!';
                                        clearError();
                                    }
                                    else
                                    {
                                        if(emailmegerosit.value!=email)
                                        {
                                            error.className='errorMsg';
                                            error.innerHTML='Nem egyezik a két email-cím!';
                                            clearError();
                                        }
                                        else
                                        {
                                            alert("Sikeres regisztráció!");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


login.addEventListener('click', onClick);


function onClick()
{
    while(login.style.fontWeight!='bold')
    {
        signup.style.fontWeight='normal';
        login.style.fontWeight='bold';
        if(document.querySelector('#regiszt') && document.querySelector('#dive'))
        {
        document.querySelector('#regiszt').remove();
        document.querySelector('#dive').remove();
        }
        const bt=document.createElement('input');
        bt.type='button';
        bt.id='belepes';
        bt.className='regbejv';
        bt.value='Belépés';
        form.appendChild(bt);
    }
}

function clearError()
{
    setTimeout(() => {
        error.classList.remove('errorMsg');
        error.innerHTML = '';
    }, 2000)
}
