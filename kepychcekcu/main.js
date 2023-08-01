document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("audioPlayer");
  audio.autoplay = true;
  audio.loop = true;
  audio.play();
});

document.addEventListener("DOMContentLoaded", function() {
  // Získáme stávající počet návštěv z LocalStorage
  let visitCount = localStorage.getItem("visitCount");

  // Pokud ještě nebyl počet návštěv nastaven, začneme s nulou
  if (!visitCount) {
    visitCount = 0;
  }

  // Aktualizujeme zobrazení počtu návštěv
  const counterElement = document.getElementById("counter");
  counterElement.textContent = `Počet návštěv: ${visitCount}`;

  // Zvýšíme počet návštěv o 1 a uložíme ho zpět do LocalStorage
  visitCount++;
  localStorage.setItem("visitCount", visitCount.toString());
});