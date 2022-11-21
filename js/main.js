const CONTAINER = document.getElementById("home");

let team = [
    {nome : "Wayne",
    cognome : "Barnett",
    ruolo : "Founder & CEO",
    foto : "img/angela-caroll-chief-editor.jpg"
    },
    {nome : "Angela",
    cognome : "Caroll",
    ruolo : "Chief Editor",
    foto : "img/angela-lopez-social-media-manager.jpg"
    },
    {nome : "Walter",
    cognome : "Gordon",
    ruolo : "Office Manager",
    foto : "img/walter-gordon-office-manager.jpg"
    },
    {nome : "Angela",
    cognome : "Lopez",
    ruolo : "direttore",
    foto : "img/angela-lopez-social-media-manager.jpg"
    },
    {nome : "Scott",
    cognome : "Estrada",
    ruolo : "direttore",
    foto : "img/scott-estrada-developer.jpg"
    },
    {nome : "Barbara",
    cognome : "Ramos",
    ruolo : "Graphic Designer",
    foto : "img/barbara-ramos-graphic-designer.jpg"
    }
]

for ( let i = 0 ; i < team.length ; i++){

    let box = document.createElement("div");
    box.classList.add("box");
    box.classList.add("col-lg-4")
    CONTAINER.append(box);

    let boxImg = document.createElement("div");
    boxImg.classList.add("boxImg");
    box.append(boxImg)

    let boxTxt = document.createElement("div");
    boxTxt.classList.add("boxTxt");
    box.append(boxTxt)

    let objectX = team[i];
    boxImg.innerHTML += `<img src="${objectX.foto}" alt="">`;
    boxTxt.innerHTML= objectX.nome + " " + objectX.cognome
     
}   
for (let key in team){
        // console.log(team);
}

