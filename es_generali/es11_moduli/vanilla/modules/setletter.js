const createSetLetter = () => {
  let charsCounter = 0;
  let classesCounter = 0;

  return (id, message, intervalID, classes) => {
    if(charsCounter < message.length) {
      const element = document.getElementById(id);
      const currentChar = message.charAt(charsCounter); 

      element.innerHTML += DOMPurify.sanitize(`<span class="${classes[classesCounter]}">${currentChar}</span>`);

      if(classesCounter < classes.length - 1) {
        classesCounter++;
        console.log("classesCounter: " + classesCounter);
      } else {
        classesCounter = 0;
      }

      charsCounter++;
    } else {
      clearInterval(intervalID);
      // Reset per eventuali riutilizzi
      charsCounter = 0;
      classesCounter = 0;
    }
  }
}

export default createSetLetter;