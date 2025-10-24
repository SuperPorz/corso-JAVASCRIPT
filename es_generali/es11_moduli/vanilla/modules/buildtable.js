import manageMouseDown from "./managemouse";

const buildTable = (data) => {
    let container = document.querySelector("#container");
    
    // Pulisci il container prima di creare una nuova tabella
    container.innerHTML = "";
    
    let table = document.createElement('table');
    container.append(table);

    let tr = document.createElement("tr");
    table.append(tr);

    let isFirstTime = true;

    for(const currentObject of data.data) {
        console.log(currentObject);

        let trn = document.createElement("tr");
        table.append(trn);
        
        for(const currentProperty in currentObject) {
            if(isFirstTime === true) {
                let thTable = document.createElement('th');
                thTable.innerHTML = `${currentProperty}`;
                tr.append(thTable);
            }
            let td = document.createElement("td");
            td.className = "dr";
            
            if(currentProperty === "avatar") {
                //caricamento avatar
                td.innerHTML = `<img src="${currentObject[currentProperty]}" width="200px" height="200px" alt="Avatar"/>`;
                td.classList.add('interactiveTd');
                
                // aggiunge event listeners solo se immagine è presente
                setTimeout(() => {
                    if (td.firstElementChild) {
                        td.firstElementChild.ondragstart = function() {
                            return false;
                        };
                        td.firstElementChild.addEventListener("mousedown", manageMouseDown);
                    }
                }, 0);
            }
            else {
                td.innerHTML = `${currentObject[currentProperty]}`;
            }
            trn.append(td);
        }
        isFirstTime = false;
    }
}

export default buildTable;