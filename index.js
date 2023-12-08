document.getElementById("btnGuess").addEventListener("click", function guessNumber() {
    var input = document.getElementById('numero');
    var num = Math.floor(Math.random() * 100) + 1;
    if (input.value == num) {
        alert("¡Felicidades! Has adivinado el número correctamente.");
    } else {
        alert("Lo siento, el número correcto es " + num + ". Por favor, intenta de nuevo.");
    }
  });
  