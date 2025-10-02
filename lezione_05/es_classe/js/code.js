'use strict'

const libri = [
  {
    titolo: "Il nome della rosa",
    autore: "Umberto Eco",
    editore: "Bompiani",
    ISBN: "9788845292613",
    prezzo: 14.25,
    sinossi: "In un monastero medievale, il frate Guglielmo da Baskerville indaga su una serie di misteriosi omicidi che sconvolgono la comunità religiosa.",
    annoUscita: 1980
  },
  {
    titolo: "Cent'anni di solitudine",
    autore: "Gabriel García Márquez",
    editore: "Mondadori",
    ISBN: "9788804668237",
    prezzo: 13.50,
    sinossi: "La saga multigenerazionale della famiglia Buendía nella città immaginaria di Macondo, un capolavoro del realismo magico.",
    annoUscita: 1967
  },
  {
    titolo: "1984",
    autore: "George Orwell",
    editore: "Mondadori",
    ISBN: "9788804668244",
    prezzo: 12.00,
    sinossi: "In un futuro totalitario, Winston Smith lavora per il Ministero della Verità e lotta contro un sistema oppressivo che controlla ogni aspetto della vita.",
    annoUscita: 1949
  },
  {
    titolo: "L'insostenibile leggerezza dell'essere",
    autore: "Milan Kundera",
    editore: "Adelphi",
    ISBN: "9788845927825",
    prezzo: 15.30,
    sinossi: "La storia d'amore tra Tomáš e Tereza sullo sfondo dell'invasione sovietica della Cecoslovacchia del 1968.",
    annoUscita: 1984
  },
  {
    titolo: "Il piccolo principe",
    autore: "Antoine de Saint-Exupéry",
    editore: "Bompiani",
    ISBN: "9788845292620",
    prezzo: 10.50,
    sinossi: "Un aviatore incontra un piccolo principe venuto da un asteroide, una favola filosofica sull'amicizia e sul senso della vita.",
    annoUscita: 1943
  },
  {
    titolo: "Orgoglio e pregiudizio",
    autore: "Jane Austen",
    editore: "Garzanti",
    ISBN: "9788811366072",
    prezzo: 11.90,
    sinossi: "La storia d'amore tra Elizabeth Bennet e il misterioso Mr. Darcy nell'Inghilterra dell'Ottocento.",
    annoUscita: 1813
  },
  {
    titolo: "Il Grande Gatsby",
    autore: "F. Scott Fitzgerald",
    editore: "Feltrinelli",
    ISBN: "9788807901751",
    prezzo: 9.50,
    sinossi: "Jay Gatsby e la sua ossessione per Daisy Buchanan nell'America degli anni Venti, simbolo del sogno americano infranto.",
    annoUscita: 1925
  },
  {
    titolo: "Cime tempestose",
    autore: "Emily Brontë",
    editore: "Einaudi",
    ISBN: "9788806220471",
    prezzo: 12.50,
    sinossi: "La passionale e distruttiva storia d'amore tra Heathcliff e Catherine nelle brughiere dello Yorkshire.",
    annoUscita: 1847
  },
  {
    titolo: "Il cacciatore di aquiloni",
    autore: "Khaled Hosseini",
    editore: "Piemme",
    ISBN: "9788856618943",
    prezzo: 14.00,
    sinossi: "L'amicizia tradita tra Amir e Hassan sullo sfondo dell'Afghanistan in guerra, una storia di redenzione e perdono.",
    annoUscita: 2003
  },
  {
    titolo: "Harry Potter e la pietra filosofale",
    autore: "J.K. Rowling",
    editore: "Salani",
    ISBN: "9788862560016",
    prezzo: 16.50,
    sinossi: "Harry Potter scopre di essere un mago e inizia la sua avventura alla scuola di magia di Hogwarts.",
    annoUscita: 1997
  },
  {
    titolo: "Il signore degli anelli - La compagnia dell'anello",
    autore: "J.R.R. Tolkien",
    editore: "Bompiani",
    ISBN: "9788845292637",
    prezzo: 18.00,
    sinossi: "Frodo Baggins inizia il suo pericoloso viaggio per distruggere l'Anello del Potere e salvare la Terra di Mezzo.",
    annoUscita: 1954
  },
  {
    titolo: "Alla ricerca del tempo perduto - La strada di Swann",
    autore: "Marcel Proust",
    editore: "Einaudi",
    ISBN: "9788806220488",
    prezzo: 22.00,
    sinossi: "Il primo volume dell'opera monumentale di Proust, un'esplorazione della memoria e del tempo che passa.",
    annoUscita: 1913
  },
  {
    titolo: "Anna Karenina",
    autore: "Lev Tolstoj",
    editore: "Garzanti",
    ISBN: "9788811366089",
    prezzo: 17.50,
    sinossi: "La tragica storia d'amore di Anna Karenina e la ricerca spirituale di Konstantin Levin nella Russia zarista.",
    annoUscita: 1877
  },
  {
    titolo: "Delitto e castigo",
    autore: "Fëdor Dostoevskij",
    editore: "Einaudi",
    ISBN: "9788806220495",
    prezzo: 16.00,
    sinossi: "Raskolnikov, giovane studente squattrinato, commette un omicidio e affronta le conseguenze psicologiche del suo gesto.",
    annoUscita: 1866
  },
  {
    titolo: "Le cronache di Narnia - Il leone, la strega e l'armadio",
    autore: "C.S. Lewis",
    editore: "Mondadori",
    ISBN: "9788804668251",
    prezzo: 13.00,
    sinossi: "Quattro fratelli scoprono il mondo magico di Narnia attraverso un armadio e si trovano coinvolti in una guerra epica.",
    annoUscita: 1950
  },
  {
    titolo: "Il processo",
    autore: "Franz Kafka",
    editore: "Feltrinelli",
    ISBN: "9788807901768",
    prezzo: 11.00,
    sinossi: "Josef K. viene arrestato e processato per un crimine mai specificato, in un'opera simbolo dell'alienazione moderna.",
    annoUscita: 1925
  },
  {
    titolo: "Moby Dick",
    autore: "Herman Melville",
    editore: "Garzanti",
    ISBN: "9788811366096",
    prezzo: 19.00,
    sinossi: "Il capitano Achab e la sua ossessiva caccia alla balena bianca Moby Dick, un'epica avventura in mare.",
    annoUscita: 1851
  },
  {
    titolo: "Il ritratto di Dorian Gray",
    autore: "Oscar Wilde",
    editore: "Mondadori",
    ISBN: "9788804668268",
    prezzo: 10.90,
    sinossi: "Un giovane aristocratico vende la sua anima per mantenere eterna giovinezza mentre il suo ritratto invecchia al suo posto.",
    annoUscita: 1890
  },
  {
    titolo: "Fahrenheit 451",
    autore: "Ray Bradbury",
    editore: "Mondadori",
    ISBN: "9788804668275",
    prezzo: 12.50,
    sinossi: "In un futuro distopico, Guy Montag è un pompiere che brucia i libri, finché non inizia a questionare il sistema.",
    annoUscita: 1953
  },
  {
    titolo: "Il visconte dimezzato",
    autore: "Italo Calvino",
    editore: "Einaudi",
    ISBN: "9788806220501",
    prezzo: 11.50,
    sinossi: "Il visconte Medardo viene tagliato in due da una cannonata e le sue due metà, buona e cattiva, vivono separate.",
    annoUscita: 1952
  }
];

/* FUNZIONE */
function creaElemento(elemHTML, nome_propr, val_prop, div) {
    const p = document.createElement(elemHTML)
    p.textContent = nome_propr + ': ' + val_prop
    div.append(p)
}

/* MAIN PROGRAM */

  for (const libro of libri) {

    let div = document.createElement('div')

    creaElemento('p', 'Titolo', libro.titolo, div)
    creaElemento('p', 'Autore', libro.autore, div)
    creaElemento('p', 'Editore', libro.editore, div)
    creaElemento('p', 'ISBN', libro.ISBN, div)
    creaElemento('p', 'Prezzo', libro.prezzo, div)
    creaElemento('p', 'Sinossi', libro.sinossi, div)    

    /* 
    //metodo 1
    let p1 = document.createElement('p')
    p1.textContent = 'Titolo: ' + libro.titolo
    div.append(p1)

    //metodo 2 (compatto ma piu lento da leggere)
    /* for (const [proprieta, valore] of Object.entries(libro)) {
        //console.log(`${proprieta}: ${valore}`);
        let p = document.createElement('p')
        p.textContent = proprieta + ':' + valore
        div.append(p)
    } */

    document.body.lastElementChild.before(div)
  }

  // crea una tabella del''aray nella console del browser
  console.table(libri)