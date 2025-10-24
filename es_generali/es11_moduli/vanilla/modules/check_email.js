function check_email(objectData) {
    const email = objectData.email;
    console.log('EMAIL:', email);
    
    // Regex migliorata per email
    const regex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Controlla anche che non sia vuoto
    if (email && regex1.test(email)) {
        console.log('mail valida');
        return true;
    }
    console.log('mail invalida');
    return false;
}

export default check_email;