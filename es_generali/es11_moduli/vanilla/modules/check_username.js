function check_username(objectData) {
    const nome = objectData.username;
    console.log('NOME:', nome);
    
    // Regex migliorata: permette spazi e caratteri accentati
    const regex1 = /^[a-zA-ZÀ-ÿ\s]{3,16}$/;
    
    // Controlla anche che non sia vuoto
    if (nome && regex1.test(nome)) {
        console.log('nome valido');
        return true;
    }
    console.log('nome invalido');
    return false;
}

export default check_username;