function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Presiona las teclas de la primera línea del teclado", width / 2, height / 2 - 50);
  text("q, w, e, r, t, y, u, i, o, p", width / 2, height / 2 + 50);
}

function draw() {
  // Nada en draw
}

//cuando se presionen las teclas de la primera línea del teclado 
//me gustaría que aparezca una carita feliz
// con diferentes colores dependiendo de la tecla presionada
// q, w, e, r, t, y, u, i, o, p
// cuando se presione la tecla q, aparecerá una carita feliz de color verde
// cuando se presione la tecla w, aparecerá una carita feliz de color amarillo
// cuando se presione la tecla e, aparecerá una carita feliz de color azul
// cuando se presione la tecla r, aparecerá una carita feliz de color rojo
// cuando se presione la tecla t, aparecerá una carita feliz de color naranja
// cuando se presione la tecla y, aparecerá una carita feliz de color rosa
// cuando se presione la tecla u, aparecerá una carita feliz de color morado
// cuando se presione la tecla i, aparecerá una carita feliz de color celeste
// cuando se presione la tecla o, aparecerá una carita feliz de color gris
// cuando se presione la tecla p, aparecerá una carita feliz de color blanco
// las caritas felices aparecerán en una posición aleatoria dentro del canvas

function keyPressed() {
  const faceSize = 200;
  const cx = random(faceSize / 2, width - faceSize / 2);
  const cy = random(faceSize / 2, height - faceSize / 2);

  let faceColor;
  // Cambia el color de la carita feliz según la tecla presionada
  // Verde
  if (key === 'q') faceColor = color(15, 204, 0);
  // Amarillo     
  else if (key === 'w') faceColor = color(255, 204, 0);
  // Azul
  else if (key === 'e') faceColor = color(0, 0, 255);
  // Rojo
  else if (key === 'r') faceColor = color(255, 0, 0);
  // Naranja
  else if (key === 't') faceColor = color(255, 165, 0);
  // Rosa
  else if (key === 'y') faceColor = color(255, 192, 203);
  // Morado
  else if (key === 'u') faceColor = color(128, 0, 128);
  // Celeste
  else if (key === 'i') faceColor = color(135, 206, 235);
  // Gris
  else if (key === 'o') faceColor = color(128, 128, 128);
  // Blanco
  else if (key === 'p') faceColor = color(255, 255, 255);
  // Si no es una de las teclas especificadas, no hacer nada
  else return;

  // La carita feliz en posición aleatoria
  fill(faceColor);
  // Carita feliz
  // Se colocan las constantes para la posición y tamaño de la carita feliz
  ellipse(cx, cy, faceSize, faceSize);

  fill(0);
  // Ojo izquierdo
  arc(cx - 50, cy - 20, 50, 50, 0, PI);
  // Ojo derecho
  arc(cx + 50, cy - 20, 50, 50, 0, PI);
  // Boca
  arc(cx, cy + 50, 100, 50, 0, PI);
}

//Para reiniciar el canvas cuando se refresque la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Presiona las teclas de la primera línea del teclado", width / 2, height / 2 - 50);
  text("q, w, e, r, t, y, u, i, o, p", width / 2, height / 2 + 50);
}