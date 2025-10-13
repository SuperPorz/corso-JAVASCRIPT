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
              console.log("form PREPARATO correttamente");
              buildResponseInterface(JSON.stringify(data.data));
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
  const regex1 = /^[a-zA-Z]{3,16}$/; //regex caratteri min 3 max 16, solo lettere no special chars

  if(regex1.test(nome)) {
    console.log('nome valido');
    return true
  }
  console.log('nome invalido');
  return false;
}

function checkForm_email(objectData) {
  const email = objectData.email;
  const regex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex positiva per pattern email
  console.log(email);
  if(regex1.test(email)) {
    console.log('mail valida');
    return true
  }
  console.log('mail invalida');
  return false;
}