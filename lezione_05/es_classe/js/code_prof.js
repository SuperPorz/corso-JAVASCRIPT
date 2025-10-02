//https://developer.chrome.com/docs/devtools/console/api
function showBooks()
{
    //console.time("t");

    const libri = [
      { titolo: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", editore: "Bompiani", codiceISBN: "9788845292613", prezzo: "25.00€", sinossi: "Un'epica avventura nella Terra di Mezzo.", annoDiUscita: 1954 },
      { titolo: "1984", autore: "George Orwell", editore: "Mondadori", codiceISBN: "9788804668237", prezzo: "12.50€", sinossi: "Un mondo distopico dominato dal Grande Fratello.", annoDiUscita: 1949 },
      { titolo: "Orgoglio e Pregiudizio", autore: "Jane Austen", editore: "Einaudi", codiceISBN: "9788806224547", prezzo: "10.90€", sinossi: "Una storia di amori e pregiudizi nell’Inghilterra del XIX secolo.", annoDiUscita: 1813 },
      { titolo: "Moby Dick", autore: "Herman Melville", editore: "Feltrinelli", codiceISBN: "9788807900341", prezzo: "14.00€", sinossi: "Il capitano Ahab è ossessionato dalla balena bianca.", annoDiUscita: 1851 },
      { titolo: "Il Nome della Rosa", autore: "Umberto Eco", editore: "Bompiani", codiceISBN: "9788845292612", prezzo: "19.90€", sinossi: "Un intrigo medievale ambientato in un'abbazia benedettina.", annoDiUscita: 1980 },
      { titolo: "Harry Potter e la Pietra Filosofale", autore: "J.K. Rowling", editore: "Salani", codiceISBN: "9788867153671", prezzo: "16.90€", sinossi: "Il primo capitolo della saga di Harry Potter.", annoDiUscita: 1997 },
      { titolo: "Il Piccolo Principe", autore: "Antoine de Saint-Exupéry", editore: "Bompiani", codiceISBN: "9788845272850", prezzo: "9.90€", sinossi: "Un racconto poetico e filosofico.", annoDiUscita: 1943 },
      { titolo: "La Divina Commedia", autore: "Dante Alighieri", editore: "Garzanti", codiceISBN: "9788811367415", prezzo: "22.00€", sinossi: "Il viaggio di Dante tra Inferno, Purgatorio e Paradiso.", annoDiUscita: 1320 },
      { titolo: "Cime Tempestose", autore: "Emily Brontë", editore: "Newton Compton", codiceISBN: "9788854184892", prezzo: "8.50€", sinossi: "Una tragica storia d’amore e vendetta.", annoDiUscita: 1847 },
      { titolo: "Don Chisciotte della Mancia", autore: "Miguel de Cervantes", editore: "Rizzoli", codiceISBN: "9788817068736", prezzo: "18.50€", sinossi: "Le avventure del cavaliere errante Don Chisciotte.", annoDiUscita: 1605 },
      { titolo: "Anna Karenina", autore: "Lev Tolstoj", editore: "Feltrinelli", codiceISBN: "9788807901065", prezzo: "15.00€", sinossi: "Un dramma d’amore e società nell’aristocrazia russa.", annoDiUscita: 1877 },
      { titolo: "I Promessi Sposi", autore: "Alessandro Manzoni", editore: "Mondadori", codiceISBN: "9788804642862", prezzo: "12.00€", sinossi: "La storia di Renzo e Lucia nell’Italia del XVII secolo.", annoDiUscita: 1827 },
      { titolo: "Guerra e Pace", autore: "Lev Tolstoj", editore: "Einaudi", codiceISBN: "9788806201425", prezzo: "24.00€", sinossi: "Un affresco storico dell’aristocrazia russa durante le guerre napoleoniche.", annoDiUscita: 1869 },
      { titolo: "Il Gattopardo", autore: "Giuseppe Tomasi di Lampedusa", editore: "Feltrinelli", codiceISBN: "9788807901089", prezzo: "13.00€", sinossi: "Il tramonto della nobiltà siciliana nell’Ottocento.", annoDiUscita: 1958 },
      { titolo: "Frankenstein", autore: "Mary Shelley", editore: "Newton Compton", codiceISBN: "9788854184823", prezzo: "9.00€", sinossi: "Il dottor Frankenstein e la sua creatura.", annoDiUscita: 1818 },
      { titolo: "Dracula", autore: "Bram Stoker", editore: "Mondadori", codiceISBN: "9788804685364", prezzo: "11.50€", sinossi: "Il celebre romanzo gotico sul conte Dracula.", annoDiUscita: 1897 },
      { titolo: "Il Grande Gatsby", autore: "F. Scott Fitzgerald", editore: "Einaudi", codiceISBN: "9788806221584", prezzo: "10.00€", sinossi: "La decadenza del sogno americano negli anni ’20.", annoDiUscita: 1925 },
      { titolo: "La Metamorfosi", autore: "Franz Kafka", editore: "Feltrinelli", codiceISBN: "9788807900136", prezzo: "7.90€", sinossi: "La storia di Gregor Samsa trasformato in insetto.", annoDiUscita: 1915 },
      { titolo: "Lo Hobbit", autore: "J.R.R. Tolkien", editore: "Bompiani", codiceISBN: "9788845291301", prezzo: "14.90€", sinossi: "Il viaggio di Bilbo Baggins verso l’avventura.", annoDiUscita: 1937 },
      { titolo: "Cronache di Narnia", autore: "C.S. Lewis", editore: "Mondadori", codiceISBN: "9788804668169", prezzo: "29.90€", sinossi: "Sette storie fantasy ambientate nel regno di Narnia.", annoDiUscita: 1950 }
    ];

    console.table(libri);

    const t1 = performance.now();

    //Soluzione 1.
    for (const libro of libri) {
        const div = document.createElement("div");
        //libro.ciccio = "d";
        for (const prop in libro) {
          const p = document.createElement("p");
          p.textContent = `${prop}: ${libro[prop]}`;
          div.append(p);
        }

        //document.body.append(div);
        document.body.lastElementChild.before(div);
    }


    //Soluzione 2.
    for (const libro of libri) {
        const div = document.createElement("div");

        /*const p = document.createElement("p");
        //Potete aggiungere le altre prop.
        p.textContent = "titolo: " + libro.titolo + ", editore: " + libro.editore;
        div.append(p);*/

        /*const p = document.createElement("p");
        //Potete aggiungere le altre prop. (attenzione: do not repeat yourself).
        p.textContent = "titolo: " + libro.titolo;
        div.append(p);

        const p1 = document.createElement("p");
        p1.textContent = "autore: " + libro.autore;
        div.append(p1);*/

        const selector = "p";
        createP(selector, "titolo", libro.titolo, div)
        createP(selector, "autore", libro.autore, div)
        createP(selector, "editore", libro.editore, div)
        createP(selector, "codice ISBN", libro.codiceISBN, div)
        createP(selector, "prezzo", libro.prezzo, div)
        createP(selector, "sinossi", libro.sinossi, div)

        //document.body.append(div);
        document.body.lastElementChild.before(div);
    }


    //Soluzione 3.
    const fragment = new DocumentFragment();

    for (const libro of libri) {
        const div = document.createElement("div");

        for (const prop in libro) {
          const p = document.createElement("p");
          p.textContent = `${prop}: ${libro[prop]}`;
          div.append(p);
        }

        fragment.append(div);
    }
        
    //console.log(document.body.lastElementChild);
    document.body.lastElementChild.before(fragment);


    //Soluzione 4.
    const fragment2 = new DocumentFragment();

    for (const libro of libri) {
        const div = document.createElement("div");

        //{ titolo: "A", autore: "B" };
        //[["titolo, "A"], ["autore", "B"]];
        for (const [key, value] of Object.entries(libro)) {
          const p = document.createElement("p");
          p.textContent = `${key}: ${value}`;
          div.append(p);
        }

        fragment2.append(div);
    }

    //console.log(document.body.lastElementChild);
    document.body.lastElementChild.before(fragment2);


    //console.timeEnd("t");
    
    const t2 = performance.now();
    const interval = t2 - t1;
    console.log(`1 Execution time: ${interval} ms`);

    //globalInterval += interval;
    //console.log(`${counter}: ${globalInterval/counter} ms`);
    //counter++;
}

function createP(selector, str, prop, par)
{
    const p = document.createElement(selector);
    p.textContent = str + " " + prop;
    par.append(p);
}