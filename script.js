// Funzione per creare e aggiungere un elemento HTML al container
function appendToContainer(content, className) {
    const container = document.getElementById('container');
    const element = document.createElement('div');
    element.textContent = content;
    element.className = 'box ' + className;
    container.appendChild(element);
  }

  // Ciclo da 1 a 100 per eseguire FizzBuzz
  for (let i = 1; i <= 100; i++) {
    // Verifica se il numero è sia un multiplo di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {
      appendToContainer('FizzBuzz', 'fizzbuzz');
    } else if (i % 3 === 0) {
      // Verifica se il numero è un multiplo di 3
      appendToContainer('Fizz', 'fizz');
    } else if (i % 5 === 0) {
      // Verifica se il numero è un multiplo di 5
      appendToContainer('Buzz', 'buzz');
    } else {
      // Aggiungi il numero al container se non è un multiplo di 3 o 5
      appendToContainer(i, 'number');
    }
  }