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
    foto : "angela-lopez-social-media-manager.jpg"
    },
    {nome : "Walter",
    cognome : "Gordon",
    ruolo : "Office Manager",
    foto : "walter-gordon-office-manager.jpg"
    },
    {nome : "Angela",
    cognome : "Lopez",
    ruolo : "direttore",
    foto : "angela-lopez-social-media-manager.jpg"
    },
    {nome : "Scott",
    cognome : "Estrada",
    ruolo : "direttore",
    foto : "scott-estrada-developer.jpg"
    },
    {nome : "Barbara",
    cognome : "Ramos",
    ruolo : "Graphic Designer",
    foto : "barbara-ramos-graphic-designer.jpg"
    }
]

for ( let i = 0 ; i < team.length ; i++){

    let box = document.createElement("div");
    box.classList.add("box");
    CONTAINER.append(box);
    console.log(box);
    
}


// for (let key in team){
//     console.log(team.nome);
   
// }