'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI


////////////////////////////////////////////////////////////////////////////////
// step 1: aggiungo event-listener all'oggetto window
window.addEventListener("load", (e) => {
    console.dir(e);
    pageLoaded();
});


////////////////////////////////////////////////////////////////////////////////
// step 2: dichiaro funzione->quando viene chiamata, chiama funz. getData(), che
// va a chiedere ASINCRONICAMENTE i dati cercati
const pageLoaded = () => {
    getData();
}



////////////////////////////////////////////////////////////////////////////////
// step 3: FUNZIONE ASYNC -> aspetta i dati esterni, poi costruisce le CARDS
const getData = async () => {
    let path = "https://fakestoreapi.com/products";

axios
    .get(path, {headers: {'x-api-key': 'reqres-free-v1'}})
    .then((response) => {
        console.log(response.data); //print ARRAY
        console.table(response.data);
        console.log(response.status);
        console.log(response.config);
        
        //costruzione menu categorie
        buildMenu(response.data);
        
        //costruzione cards
        buildCards(response.data);
    })
    .catch((err) => console.log(err));
}


////////////////////////////////////////////////////////////////////////////////
// step 4: FUNZIONE BUILD HTML -> costruisce il menu selezione categorie
const buildMenu = (data) => {

    let menu_container = document.querySelector("#menu-container");
    let ul = document.createElement("ul");
    ul.className = "ul-inline"
    menu_container.append(ul);
    const categorie = new Set();

    data.forEach(object => {
        const nome_categoria = object.category;
            
            if(!categorie.has(nome_categoria)) {
                categorie.add(nome_categoria);
                const li = document.createElement('li');
                const a = document.createElement('a');
                
                a.textContent = nome_categoria;
                a.setAttribute("href", "index.html?cat=" + nome_categoria)
                a.className = "spacer"
                li.append(a);
                ul.appendChild(li);

                console.log(object.rating);
                console.log(object.description);

            }
        }
    )
}


////////////////////////////////////////////////////////////////////////////////
// step 5: FUNZIONE BUILD HTML -> costruisce le Cards appendendo HTML al container
const buildCards = (data) => {
    let cards_container = document.querySelector("#cards-container");

    // Usa for...of per iterare sugli elementi dell'array
    for (const object of data) {
        let div_card = document.createElement("div");
        div_card.className = "card";

        //creo un <img>, lo appendo dentro un <a> che poi appendo al <div>
        let a_img = document.createElement("a");
        let img = document.createElement("img");
        img.setAttribute("src", object.image);
        img.setAttribute("alt", "product image");
        a_img.appendChild(img);
        div_card.appendChild(a_img);

        //creo titolo <h5> e lo appendo al <div>
        let h5 = document.createElement("h5");
        h5.textContent = object.title;
        div_card.appendChild(h5);

        //creo <p> contenente descrizione e lo appendo al <div>
        let p = document.createElement("p");
        p.textContent = object.description;
        div_card.appendChild(p);

        //creo <img> per l'icona di rating
        let img_2 = document.createElement("img");
        const rating = Math.round(object.rating.rate);
        img_2.setAttribute("src", `icons/rating${rating}.png`);
        img_2.setAttribute("alt", `Rating: ${rating} stelle`);
        img_2.id = "icon"
        div_card.appendChild(img_2);

        //creo <span> da affiancare a icona rating per printare totale VOTI
        let span = document.createElement("span");
        span.textContent = "Voti: " + object.rating.count;
        div_card.appendChild(span);

        //creo subdiv per contenere prezzo e bottone di aggiunta carrello
        let subdiv = document.createElement("div");
        let span_2 = document.createElement("span");
        span_2.textContent = object.price + " $";
        subdiv.appendChild(span_2);

        let a_2 = document.createElement("a");
        a_2.setAttribute("href", "#");
        a_2.textContent = "SCIALACQUA SOLDI";
        a_2.id = "dataButton"
        subdiv.appendChild(a_2);

        //appendo il subdiv al <div> della card
        div_card.appendChild(subdiv);

        // Appendi la card al container
        cards_container.appendChild(div_card);
    }
    console.log("Cards create:", data.length);
}