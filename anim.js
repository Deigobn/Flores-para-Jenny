// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cuando sientas como un palpitar,", time: 23 },
  { text: "corazón: son amores.", time: 28 },
  { text: "Si al mirarme sientes emoción,", time: 35 },
  { text: "corazón: son amores", time: 39 },
  { text: "Sonarán dinga-linga-lin,", time: 47 },
  { text: "repicar de campanas.", time: 49 },
  { text: "Que dirán tipi-dipi-lin,", time: 57 },
  { text: "que tu amor por mí aguarda.", time: 60 },
  { text: "No pretendas más tiempo callar", time: 67 },
  { text: "y ocultar tus amores.", time: 69 },
  { text: "Si total yo también te he de amar", time: 75 },
  { text: " con toda mi pasión.", time: 79 },
  { text: "Y verás que al fin se unirán", time: 86 },
  { text: "nuestros dos corazones. ", time: 90 },
  { text: "Y en un beso febril fundirán", time: 96 },
  { text: "de una vez dos amores.", time: 100 },
  { text: "TE AMO PRINCESA!!", time: 110 },
  { text: "Y verás que al fin se unirán", time: 126 },
  { text: "nuestros dos corazones.", time: 130 },
  { text: "Y en un beso febril fundirán", time: 134 },
  { text: "de una vez dos", time: 138 },
  { text: "amores.", time: 141 },
  { text: "Gracias por siempre tenerme paciencia,", time: 169 },
  { text: "Gracias por preocuparte por mi,", time: 171 },
  { text: "Gracias por apoyarme,", time: 173 },
  { text: "Gracias por amarme.", time: 175 },
  { text: "Y gracias por ser mi novia.", time: 177 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);