1. Cambiare il testo di un elemento
Dato <p id="testo">Ciao!</p>.
Al click di un bottone, cambia il testo in "Benvenuto nel DOM!".

2. Modificare lo stile
Dato <div id="box">Box</div>.
Al click, cambia il colore di sfondo in rosso e il colore del testo in bianco.

3. Aggiungere nuovi elementi
Dato una lista contenente <ul id="lista"></ul>.
Al click di un bottone, aggiungi un nuovo <li> con il testo "Nuovo elemento".

4. Rimuovere un elemento (Cercare su MDN come rimuovere un elemento)
Usa la lista del punto precedente.
Al click di un bottone, rimuovi l’ultimo <li> dalla lista.

5. Traversing: trovare il parent
Data la struttura:
<div id="contenitore">
<p id="figlio">Sono un paragrafo</p>
</div>
Recupera un riferimento al <p> e mostra in console l’id del suo elemento padre.

6. Traversing: selezionare i figli
Data la lista:
<ul id="menu">
<li>Home</li>
<li>About</li>
<li>Contact</li>
</ul>
Al click di un bottone, stampa in console tutti i testi dei <li>.

7. Sostituire un elemento

Dato un <p id="messaggio">Vecchio testo</p>.
Al click di un bottone, sostituisci il <p> con un <h2> che dice "Nuovo Titolo" (cercare su
MDN eventuali soluzioni non viste a lezione)

8. Aggiungere/rimuovere classi
Dato un <div id="box2" class="blu">Box</div>.
Al click di un bottone, alterna la classe "rosso" (toggle, cercarlo su MDN).

9. Creare una tabella dinamica
Al click su un bottone, crea e inserisci in <div id="tabella-container"> una tabella 3x3
con numeri da 1 a 9.

10. Landing page
Creare una landing page responsiva, con header, area principale, footer.
Al caricamento della pagina, caricare i dati da https://fakestoreapi.com/products.
Con i dati ottenuti, inserire nell'area principale blocchi tipo le card di Flowbite
https://flowbite.com/docs/components/card/. Creare una card per prodotto.