'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
const categoria = getUrlParameter('cat');

////////////////////////////////////////////////////////////////////////////////
// step 1a: aggiungo event-listener all'oggetto window e carico ALL PRODUCTS
window.addEventListener("load", (e) => {
    //print di informazioni
    console.dir(e);
    console.log('PAGINA: ' + categoria);

    //azioni che partono con l'evento
    e.preventDefault(); // Previene il comportamento default
    e.stopPropagation(); // Ferma la propagazione dell'evento
    pageLoaded();
});

// step 1b: dichiaro funzione -> catturo il GET della URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

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

    //aggiungo un "all products al set"
    const li_all = document.createElement('li');
    const a_all = document.createElement('a');
    a_all.textContent = "All products";
    a_all.setAttribute("href", "index.html?cat=All-products")
    a_all.className = "spacer"
    li_all.append(a_all);
    ul.appendChild(li_all);

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
        }
    })
}

////////////////////////////////////////////////////////////////////////////////
// step 5: FUNZIONE BUILD HTML -> costruisce le Cards appendendo HTML al container
const buildCards = (data) => {
    // GET
    if (categoria != "All-products") {
        // Filtra i prodotti per questa categoria
        let cards_container = document.querySelector("#cards-container");

        // Usa for...of per iterare sugli elementi dell'array
        for (const object of data) {
            if (object.category == categoria) {
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
                img_2.id = "icon";

                //creo <span> per i voti
                let span = document.createElement("span");
                span.textContent = "Voti: " + object.rating.count;

                //creo sezione rating (icona + voti sulla stessa riga)
                let ratingSection = document.createElement("div");
                ratingSection.className = "rating-section";
                ratingSection.appendChild(img_2);
                ratingSection.appendChild(span);
                div_card.appendChild(ratingSection);

                //creo span per il prezzo
                let span_2 = document.createElement("span");
                span_2.textContent = object.price + " ₹";

                //creo bottone "SCIALACQUA SOLDI"
                let a_2 = document.createElement("a");
                a_2.setAttribute("href", "#");
                a_2.textContent = "SCIALACQUA\nSOLDI"; // \n per andare a capo
                a_2.id = "dataButton";

                //creo sezione prezzo
                let priceSection = document.createElement("div");
                priceSection.className = "price-section";
                priceSection.appendChild(span_2);

                //creo sezione bottone
                let buttonSection = document.createElement("div");
                buttonSection.className = "button-section";
                buttonSection.appendChild(a_2);

                //creo sezione combinata prezzo + bottone
                let priceButtonSection = document.createElement("div");
                priceButtonSection.className = "price-button-section";
                priceButtonSection.appendChild(priceSection);
                priceButtonSection.appendChild(buttonSection);

                //appendo la sezione combinata al <div> della card
                div_card.appendChild(priceButtonSection);

                // Appendi la card al container
                cards_container.appendChild(div_card);
            }
    }
    } else {
        // Mostra tutti i prodotti
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
            img_2.id = "icon";

            //creo <span> per i voti
            let span = document.createElement("span");
            span.textContent = "Voti: " + object.rating.count;

            //creo sezione rating (icona + voti sulla stessa riga)
            let ratingSection = document.createElement("div");
            ratingSection.className = "rating-section";
            ratingSection.appendChild(img_2);
            ratingSection.appendChild(span);
            div_card.appendChild(ratingSection);

            //creo span per il prezzo
            let span_2 = document.createElement("span");
            span_2.textContent = object.price + " ₹";

            //creo bottone "SCIALACQUA SOLDI"
            let a_2 = document.createElement("a");
            a_2.setAttribute("href", "#");
            a_2.textContent = "SCIALACQUA\nSOLDI"; // \n per andare a capo
            a_2.id = "dataButton";

            //creo sezione prezzo
            let priceSection = document.createElement("div");
            priceSection.className = "price-section";
            priceSection.appendChild(span_2);

            //creo sezione bottone
            let buttonSection = document.createElement("div");
            buttonSection.className = "button-section";
            buttonSection.appendChild(a_2);

            //creo sezione combinata prezzo + bottone
            let priceButtonSection = document.createElement("div");
            priceButtonSection.className = "price-button-section";
            priceButtonSection.appendChild(priceSection);
            priceButtonSection.appendChild(buttonSection);

            //appendo la sezione combinata al <div> della card
            div_card.appendChild(priceButtonSection);

            // Appendi la card al container
            cards_container.appendChild(div_card);
        }
    }
}