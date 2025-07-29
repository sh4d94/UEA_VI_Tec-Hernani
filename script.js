function activarGlitch() {
  const detector = document.getElementById("detector");
  detector.textContent = "⚠ Rostro detectado. Glitcheando cuerpo...";
  detector.style.color = "#ff00cc";
  detector.style.textShadow = "0 0 5px #ff00cc, 0 0 10px #00ffff";

  setTimeout(() => {
    detector.textContent = "WAUIFU404:CuerpoNoEncontrado";
    detector.style.animation = "glitch 0.3s infinite";
  }, 2000);
}

// Efecto glitch simple
const style = document.createElement('style');
style.innerHTML = `
@keyframes glitch {
  0% { transform: translate(1px, 1px); }
  20% { transform: translate(-1px, -2px); }
  40% { transform: translate(-3px, 0px); }
  60% { transform: translate(3px, 2px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(-1px, 2px); }
}
`;
document.head.appendChild(style);
