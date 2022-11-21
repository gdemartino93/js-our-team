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
    box.classList.add("animate__animated")
    box.classList.add("animate__zoomIn")
    
    CONTAINER.append(box);

    let boxImg = document.createElement("div");
    boxImg.classList.add("boxImg");
    box.append(boxImg)

    let boxTxt = document.createElement("div");
    boxTxt.classList.add("boxTxt");
    box.append(boxTxt)

    let objectX = team[i];
    boxImg.innerHTML += `<img src="${objectX.foto}" alt="">`;
    boxTxt.innerHTML +=`<span class="info-nome">${objectX.nome} ${objectX.cognome}</span>
    <span class="info-ruolo">${objectX.ruolo}</span>`  
}   
