"use-strict"

// STEP 0: setup variabili globali


// STEP 1: ev-listener che chiama funzione "pageLoaded()"
window.addEventListener("load", (e) => {
  pageLoaded();
});


// STEP 2: def. funzione->chiama un'altra funzione: "setJsonForm()"
const pageLoaded = () => {
  setJsonForm();  
};


// STEP 3: def. check form condizionale
function setJsonForm()
{
    const flexForm = document.querySelector(".flexForm");

    flexForm.addEventListener('submit', e => {
    //flexForm.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(flexForm);
        const path = 'https://fakestoreapi.com/users'//'server/data2.php';
        const objectData = Object.fromEntries(formData.entries());

        if (checkForm_username(objectData) && checkForm_email(objectData))
          
        { //se true, proseguo con la programmaz. asincrona

          axios({
              method: "post",
              url: path,
              data: formData, //JSON.stringify(objectData)
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          })
          .then(function (data) {
              console.log("form inviato correttamente");
              //codice che gestisce cosa fare con l'invio dati
          })
          .catch(function (error) {
              console.log(error);
          });
        }
        else {
          console.log("Dati inseriti non corretti!!!");
          return false;
        }
    });
}


// STEP 4: def. funzione->verifica in real time cosa digita l'utente
function checkForm_username(objectData) {
  console.log(objectData);
  const nome = objectData.username;
  const regex1 = /[^a-zA-Z\s]/g;
  const regex2 = /^(?!.{3,16}$).*/g;
  //const regex3 = /^[a-zA-Z]{3,16}$/g; //regex unica (da cambiare logica iterativa)

  if(regex1.test(nome.value)) { //controllo presenza caratteri speciali
    return false
  }
  if(regex2.test(nome.value)) { //controllo lunghezza min e max della stringa
    return false
  }
  return true;
}

function checkForm_email(objectData) {//logica inversa rispetto allo username
  console.log(objectData);
  const email = objectData.email;
  const regex1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; //regex positiva per pattern email

  if(regex1.test(email.value)) {
    return true
  }
  return false;
}