import check_username from "./check_username";
import check_email from "./check_email";

function setCustomFormValidation() {
    const flexForm = document.querySelector(".flexForm");
    const nomeText = document.getElementById("nomeText"); // Aggiungi questa riga
    const emailText = document.getElementById("emailText"); // Aggiungi questa riga

    // Crea elementi per i messaggi di errore
    const nomeError = document.createElement("div");
    nomeError.className = "error-message";
    nomeText.parentNode.insertBefore(nomeError, nomeText.nextSibling);

    const emailError = document.createElement("div");
    emailError.className = "error-message";
    emailText.parentNode.insertBefore(emailError, emailText.nextSibling);

    nomeText.addEventListener('input', (e) => {
        const objectData = {
            username: nomeText.value,
            email: emailText.value
        };
        const isValid = check_username(objectData);
        
        // Mostra messaggio nell'interfaccia
        if (isValid) {
            nomeError.textContent = "";
            nomeText.classList.remove("invalid");
            nomeText.classList.add("valid");
        } else {
            nomeError.textContent = "Nome non valido (3-16 lettere, solo caratteri alfabetici)";
            nomeText.classList.remove("valid");
            nomeText.classList.add("invalid");
        }
    });

    emailText.addEventListener('input', (e) => {
        const objectData = {
            username: nomeText.value,
            email: emailText.value
        };
        const isValid = check_email(objectData);
        
        // Mostra messaggio nell'interfaccia
        if (isValid) {
            emailError.textContent = "";
            emailText.classList.remove("invalid");
            emailText.classList.add("valid");
        } else {
            emailError.textContent = "Email non valida";
            emailText.classList.remove("valid");
            emailText.classList.add("invalid");
        }
    });

    // Aggiungi validazione al submit del form
    flexForm.addEventListener('submit', (e) => {
        const objectData = {
            username: nomeText.value,
            email: emailText.value
        };
        
        const isUsernameValid = check_username(objectData);
        const isEmailValid = check_email(objectData);
        
        if (!isUsernameValid || !isEmailValid) {
            e.preventDefault(); // Impedisce l'invio del form
            alert("Per favore, correggi gli errori nel form prima di inviare.");
        }
    });
}

export default setCustomFormValidation;