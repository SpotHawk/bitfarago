const Filmek = [
    {
        "nev": "A remény rabjai",
        "megjelenes": "1994",
        "mufajok": ["dráma", "haverfilm", "börtönfilm", "krimi", "irodalmi adaptáció"]
    },
    {
        "nev": "Forrest Gump", 
        "megjelenes": "1994", 
        "mufajok": ["felnőttéválás-történet", "flashback film", "vígjáték", "dráma", "történelmi", "romantikus", "tragikomédia", "regény alapján készült"] 
    },
    { 
        "nev": "Stephen King: Halálsoron",
        "megjelenes": "1999",
        "mufajok": ["dráma", "flashback film", "fantasy", "börtönfilm", "regény alapján készült"] 
    },
    { 
        "nev": "Szerelmünk lapjai", 
        "megjelenes": "2004", 
        "mufajok": ["romantikus", "dráma", "felnőttéválás-történet", "regény alapján készült"] 
    } ,
    { 
        "nev": "Életrevalók", 
        "megjelenes": "2011", 
        "mufajok": ["vígjáték", "életrajzi film", "dráma", "irodalmi adaptáció"] 
    } ,
    {   "nev": "Terminátor 2. - Az ítélet napja", 
        "megjelenes": "1991", 
        "mufajok": ["akció", "thriller,", "sci-fi", "posztapokaliptikus film", "disztópikus film", "dráma"] 
    } ,
    {   "nev": "A keresztapa", 
        "megjelenes": "1972", 
        "mufajok": ["dráma", "krimi", "gengszterfilm", "regény alapján készült"] 
    } ,
    {   "nev": "Vissza a jövőbe", 
        "megjelenes": "1985", 
        "mufajok": ["sci-fi", "kaland", "vígjáték", "ifjúsági", "time-travel film"] 
    } ,
    { 
        "nev": "Elrabolva", 
        "megjelenes": "2008", 
        "mufajok": ["akció", "thriller", "krimi"] 
    } ,
    { 
        "nev": "Gran Torino", 
        "megjelenes": "2008",
        "mufajok": ["dráma", "krimi", "thriller"] 
    }  ,
    { 
        "nev": "Hetedik", 
        "megjelenes": "1995",
        "mufajok": ["thriller", "dráma", "krimi"]
     }  ,
    { 
        "nev": "Kapj el, ha tudsz!", 
        "megjelenes": "2002", 
        "mufajok": ["vígjáték", "dráma", "krimi", "életrajzi film"]
     }  ,
    { 
        "nev": "...és megint dühbe jövünk", 
        "megjelenes": "1978", 
        "mufajok": ["krimi", "vígjáték", "akció"] 
    }  ,
    { 
        "nev": "A tanú", 
        "megjelenes": "1969",
        "mufajok": ["történelmi", "dráma", "vígjáték"] 
    }  ,
    { 
        "nev": "Kincs ami nincs", 
        "megjelenes": "1981", 
        "mufajok": ["akció", "kaland", "vígjáték"] 
    }  ,
    { 
        "nev": "Gladiátor", 
        "megjelenes": "2000", 
        "mufajok": ["akció", "kaland", "történelmi"] 
    }  ,
    { 
        "nev": "A rettenthetetlen", 
        "megjelenes": "1995",
        "mufajok": ["életrajzi film", "fráma", "akció"] 
    }  ,
    { 
        "nev": "Bűnvadászok", 
        "megjelenes": "1977", 
        "mufajok": ["vígjáték", "krimi", "haverfilm", "akció", "kaland"] 
    }  ,
    { 
        "nev": "A bakancslista", 
        "megjelenes": "2007", 
        "mufajok": ["haverfilm", "vígjáték", "dráma", "tragikomédia"]
    }  ,
    { 
        "nev": "Volt egyszer egy Vadnyugat", 
        "megjelenes": "1968", 
        "mufajok": ["western", "akció", "flashback film", "dráma"] 
    }  ,
    { 
        "nev": "Hacsi - A leghűségesebb barát", 
        "megjelenes": "2009", 
        "mufajok": ["dráma"] 
    } ,
    { 
        "nev": "Holt költők társasága", 
        "megjelenes": "1989", 
        "mufajok": ["felnőttéválás-történet", "dráma", "ifjúsági"] 
    } ,
    { 
        "nev": "Amerikai história X", 
        "megjelenes": "1998", 
        "mufajok": ["dráma", "börtönfilm", "krimi"] 
    } ,
    { 
        "nev": "Oscar", 
        "megjelenes": "1991", 
        "mufajok": ["vígjáték", "krimi"] 
    } ,
    { 
        "nev": "Good Will Hunting", 
        "megjelenes": "1997", 
        "mufajok": ["felnőttéválás-történet", "romantikus", "dráma"] 
    } ,
    { 
        "nev": "Harcosok klubja", 
        "megjelenes": "1999", 
        "mufajok": ["flashback film", "dráma", "thriller", "regény alapján készült"] 
    } ,
    { 
        "nev": "Nincs kettő négy nélkül", 
        "megjelenes": "1984", 
        "mufajok": ["akció", "vígjáték"] 
    } ,
    { 
        "nev": "A Jó, a Rossz és a Csúf", 
        "megjelenes": "1966", 
        "mufajok": ["western", "akció", "kaland"] 
    } ,
    { 
        "nev": "Száll a kakukk fészkére", 
        "megjelenes": "1975", 
        "mufajok": ["dráma", "börtönfilm", "vígjáték", "regény alapján készült"] 
    } ,
    { 
        "nev": "Eredet", 
        "megjelenes": "2010", 
        "mufajok": ["sci-fi", "thriller", "kaland", "dráma", "rejtély"] 
    } ,
    { 
        "nev": "Nyomás utána!", 
        "megjelenes": "1983", 
        "mufajok": ["akció", "kaland", "vígjáték"] 
    } ,
    { 
        "nev": "A szökevény", 
        "megjelenes": "1993", 
        "mufajok": ["krimo", "akció", "thriller"]
    } ,
    { 
        "nev": "Blöff", 
        "megjelenes": "2000", 
        "mufajok": ["vígjáték", "krimi", "akció", "thriller"] 
    } ,
    { 
        "nev": "A Gyűrűk Ura - A Király visszatér", 
        "megjelenes": "2003", 
        "mufajok": ["fantasy", "dráma", "akció", "regény alapján készült"] 
    } ,
    { 
        "nev": "A tökéletes trükk", 
        "megjelenes": "2006", 
        "mufajok": ["rejtély", "thriller", "regény alapján készült", "fantasy", "dráma"] 
    } ,
    { 
        "nev": "Szenvedélyek viharában", 
        "megjelenes": "1994", 
        "mufajok": ["romantikus", "dráma", "irodalmi adaptáció", "kaland"] 
    } ,
    { 
        "nev": "Terminátor - A halálosztó", 
        "megjelenes": "1984", 
        "mufajok": ["sci-fi", "akció", "thriller", "dráma", "time-travel film", "disztópikus film", "posztapokaliptikus film"] 
    } ,
    { 
        "nev": "A tégla", 
        "megjelenes": "2006", 
        "mufajok": ["dráma", "thriller", "krimi"] 
    } ,
    { 
        "nev": "Ponyvaregény", 
        "megjelenes": "1994", 
        "mufajok": ["vígjáték", "dráma", "thriller", "krimi"] 
    } ,
    { 
        "nev": "Szemtől szemben", 
        "megjelenes": "1995", 
        "mufajok": ["dráma", "krimi", "akció", "kaland"] 
    } ,
    { 
        "nev": "Lesz ez még így se!", 
        "megjelenes": "1997", 
        "mufajok": ["vígjáték", "romantikus", "dráma"] 
    } ,
    { 
        "nev": "Csillagpor", 
        "megjelenes": "2007", 
        "mufajok": ["fantasy", "regény alapján készült", "dráma", "kaland", "romantikus"] 
    } ,
    { 
        "nev": "Indul a bakterház!", 
        "megjelenes": "1980", 
        "mufajok": ["vígjáték"] 
    } ,
    { 
        "nev": "Kelly hősei", 
        "megjelenes": "1970", 
        "mufajok": ["akció", "dráma", "vígjáték", "háborús film"] 
    } ,
    { 
        "nev": "Leon, a profi", 
        "megjelenes": "1994", 
        "mufajok": ["haverfilm", "gengszterfilm", "dráma", "rejtély"] 
    } ,
    { 
        "nev": "Az ördög ügyvédje", 
        "megjelenes": "1997", 
        "mufajok": ["horror", "fantasy", "rejtély", "thriller", "dráma"] 
    } ,
    {
         "nev": "Star Wars: A birodalom visszavág", 
         "megjelenes": "1980", 
         "mufajok": ["sci-fi", "akció", "kaland", "fantasy"] 
    } ,
    { 
        "nev": "Igazából szerelem", 
        "megjelenes": "2003", 
        "mufajok": ["vígjáték", "dráma", "romantikus"] 
        } ,
    { 
        "nev": "A bolygó neve: Halál", 
        "megjelenes": "1986", 
        "mufajok": ["sci-fi", "akció", "kaland", "thriller", "horror"] 
    } ,
    { 
        "nev": "Vissza a jövőbe 2.", 
        "megjelenes": "1989", 
        "mufajok": ["kaland", "sci-fi", "vígjáték"] 
    } ,
    { 
        "nev": "Pokoli lecke",
        "megjelenes": "1996", 
        "mufajok": ["felnőttéválás-történet", "dráma", "thriller", "krimi"] 
    } ,
    { 
        "nev": "Amerikai szépség", 
        "megjelenes": "1999", 
        "mufajok": ["romantikus", "vígjáték", "fráma", "flashback film"] 
    } ,
    { 
        "nev": "Így neveld a sárkányodat", 
        "megjelenes": "2010", 
        "mufajok": ["fantasy", "dráma", "kaland"] 
    } ,
    { 
        "nev": "Pillangó-hatás", 
        "megjelenes": "2004", 
        "mufajok": ["sci-fi", "fantasy", "dráma", "pszichothriller"] 
        } ,
    { 
        "nev": "Hair", 
        "megjelenes": "1979", 
        "mufajok": ["musical", "vígjáték", "dráma"] 
    } ,
    { 
        "nev": "Halálos fegyver", 
        "megjelenes": "1987", 
        "mufajok": ["krimi", "akció", "thriller", "haverfilm"]
    } ,
    { 
        "nev": "Esőember", 
        "megjelenes": "1988", 
        "mufajok": ["dráma", "vígjáték", "haverfilm"]
     } ,
    { 
        "nev": "Számkivetett",
        "megjelenes": "2000", 
        "mufajok": ["kaland", "dráma", "romantikus"] 
    } ,
    { 
        "nev": "A Karib-tenger kalózai - A Fekete Gyöngy átka", 
        "megjelenes": "2003", 
        "mufajok": ["fantasy", "vígjáték", "akció", "kaland"]
     } ,
    { 
        "nev": "A tizedes meg a többiek", 
        "megjelenes": "1965",
        "mufajok": ["vígjáték", "háborús film"]
    } ,
    { 
        "nev": "Egy asszony illata", 
        "megjelenes": "1992", 
        "mufajok": ["dráma", "felnőttéválás-történet"] 
    } ,
    { 
        "nev": "Az oroszlánkirály", 
        "megjelenes": "1994", 
        "mufajok": ["musical", "dráma", "kaland", "vígjáték"] 
    } ,
    { 
        "nev": "Pofa be!", 
        "megjelenes": "2003", 
        "mufajok": ["börtönfilm", "vígjáték", "krimi"]  
    } ,
    { 
        "nev": "A szív bajnokai", 
        "megjelenes": "2009", 
        "mufajok": ["életrajzi film", "dráma", "sportfilm"]
    } ,
    { 
        "nev": "A Ravasz, az Agy és két füstölgő puskacső", 
        "megjelenes": "1998", 
        "mufajok": ["vígjáték", "krimi", "thriller"] 
    } ,
    { 
        "nev": "Reszkessetek, betörők!", 
        "megjelenes": "1990", 
        "mufajok": ["vígjáték", "kaland"] 
    } ,
    { 
        "nev": "Az elveszett frigyláda fosztogatói", 
        "megjelenes": "1981", 
        "mufajok": ["kaland", "akció", "fantasy"] 
    } ,
    { 
        "nev": "Elcserélt életek", 
        "megjelenes": "2008",
        "mufajok": ["rejtély", "krimi", "dráma", "történelmi"] 
    } ,
    { 
        "nev": "A Gyűrűk Ura - A Gyűrű Szövetsége",
        "megjelenes": "2001", 
        "mufajok": ["fantasy", "kaland", "dráma", "akció", "regény alapján készült"] 
    } ,
    { 
        "nev": "A mások élete", 
        "megjelenes": "2006", 
        "mufajok": ["thriller", "dráma"] 
    } ,
    { 
        "nev": "Viharsziget", 
        "megjelenes": "2010", 
        "mufajok": ["horror", "thriller", "regény alapján készült", "dráma", "krimi", "rejtély"]
    } ,
    { 
        "nev": "Ryan közlegény megmentése", 
        "megjelenes": "1998", 
        "mufajok": ["háborús film", "dráma", "akció", "kaland"] 
    } ,
    { 
        "nev": "A profi", 
        "megjelenes": "1981", 
        "mufajok": ["krimi", "dráma", "thriller", "akció", "rejtély"] 
    } ,
    { 
        "nev": "Macskafogó", 
        "megjelenes": "1986", 
        "mufajok": ["sci-fi", "vígjáték", "kaland", "krimi"] 
    } ,
    { 
        "nev": "A bárányok hallgatnak", 
        "megjelenes": "1991", 
        "mufajok": ["thriller", "horror", "krimi", "dráma", "regény alapján készült"] 
    } ,
    { 
        "nev": "Apocalypto", 
        "megjelenes": "2006", 
        "mufajok": ["dráma", "történelmi", "akció", "kaland", "thriller"] 
    } ,
    { 
        "nev": "Idétlen időkig", 
        "megjelenes": "1993", 
        "mufajok": ["vígjáték", "romantikus", "dráma", "fantasy", "sci-fi"] 
    } ,
    { 
        "nev": "Casino", 
        "megjelenes": "1995", 
        "mufajok": ["krimi", "dráma", "könyv alapján készült"] 
    } ,
    { 
        "nev": "A keresztapa 2.", 
        "megjelenes": "1974", 
        "mufajok": ["dráma", "krimi", "flashback film", "regény alapján készült"] 
    } ,
    { 
        "nev": "Hajsza a győzelemért", 
        "megjelenes": "2013", 
        "mufajok": ["akció", "életrajzi film", "dráma", "sportfilm"] 
    } ,
    { 
        "nev": "A piszkos tizenkettő", 
        "megjelenes": "1967", 
        "mufajok": ["háborús film", "dráma", "akció", "regény alapján készült"] 
    } ,
    { 
        "nev": "Egy csodálatos elme", 
        "megjelenes": "2001", 
        "mufajok": ["könyv alapján készült", "dráma", "életrajzi film"] 
    } ,
    { 
        "nev": "Vaklárma", 
        "megjelenes": "1989", 
        "mufajok": ["krimi", "haverfilm", "vígjáték"] 
    } ,
    { 
        "nev": "A nyolcadik utas: a Halál", 
        "megjelenes": "1979", 
        "mufajok": ["horror", "sci-fi", "akció", "thriller"] 
    } ,
    { 
        "nev": "Ha eljön Joe Black", 
        "megjelenes": "1998", 
        "mufajok": ["romantikus", "fantasy", "dráma"] 
    } ,
    { 
        "nev": "Mátrix", 
        "megjelenes": "1999",
        "mufajok": ["thriller", "akció", "sci-fi", "disztópikus film"]
    } ,
    { 
        "nev": "Az utolsó szamuráj", 
        "megjelenes": "2003", 
        "mufajok": ["háborús film", "akció", "dráma"] 
    } ,
    { 
        "nev": "Sok hűhó semmiért", 
        "megjelenes": "1993", 
        "mufajok": ["romantikus", "vígjáték"] 
    } ,
    { 
        "nev": "Truman show", 
        "megjelenes": "1998", 
        "mufajok": ["sci-fi", "vígjáték", "drráma", "tragikomédia", "disztópikus film"] 
    } ,
    { 
        "nev": "Séta a múltba", 
        "megjelenes": "2002", 
        "mufajok": ["ifjúsági", "romantikus", "felnőttéválás-történet", "dráma", "regény alapján készült"]
    } ,
    { 
        "nev": "Legyetek jók, ha tudtok", 
        "megjelenes": "1983", 
        "mufajok": ["dráma"] 
    } ,
    { 
        "nev": "Fegyvernepper", 
        "megjelenes": "2005", 
        "mufajok": ["dráma", "krimi", "akció"] 
    } ,
    { 
        "nev": "A szív hídjai", 
        "megjelenes": "1995", 
        "mufajok": ["romantikus", "dráma"] 
    } ,
    { 
        "nev": "Az ötödik pecsét", 
        "megjelenes": "1976", 
        "mufajok": ["dráma", "háborús film"] 
    } ,
    { 
        "nev": "A sötét lovag",
        "megjelenes": "2008", 
        "mufajok": ["akció", "thriller", "krimi", "dráma"] 
    } ,
    { 
        "nev": "Az utolsó cserkész", 
        "megjelenes": "1991",
        "mufajok": ["krimi", "akció", "haverfilm"] 
    } ,
    { 
        "nev": "Véres gyémánt", 
        "megjelenes": "2006", 
        "mufajok": ["dráma", "háborús film", "akció", "kaland", "thriller"] 
    } ,
    { 
        "nev": "Gettómilliomos", 
        "megjelenes": "2008", 
        "mufajok": ["romantikus", "dráma", "krimi", "felnőttéválás-történet", "regény alapján készült"] 
        } ,
    { 
        "nev": "Ádám almái", 
        "megjelenes": "2005", 
        "mufajok": ["dráma", "vígjáték", "krimi"] 
    } ,
    { 
        "nev": "A szomszéd nője mindig zöldebb", 
        "megjelenes": "1993", 
        "mufajok": ["romantikus", "vígjáték", "haverfilm"] 
    } 
]
