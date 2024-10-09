function CheckA(text) {
    let contador = 0;
  
    for (let i = 0; i < text.length; i++) {
      if (text[i].toLowerCase() === "a") {
        contador++;
      }
    }
  
    if (contador > 0) {
      return `A letra "a" aparece ${contador} vezes na string.`;
    } else {
      return `A letra a não foi encontrada no string.`;
    }
  }
  
  let text = "Target Sistemas";
  console.log(CheckA(text));
  