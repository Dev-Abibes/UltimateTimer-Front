let BACKEND_URL = 'http://localhost:3000/time';

# une condition
if (BACKEND_URL[BACKEND_URL.length - 1] === '/') {
  BACKEND_URL = BACKEND_URL.slice(0, -1);
}  

setInterval(function () {
  fetch(`${BACKEND_URL}/time`)
    .then(response => response.json())
    .then(data => {
      const timer = document.getElementById('timer');
      timer.innerHTML = data.time;
    });
}, 1000);

function calculerTVA(montantHT, tauxTVA) {
  if (typeof montantHT !== 'number' || typeof tauxTVA !== 'number' || tauxTVA < 0) {
    throw new Error("Les montants doivent être des nombres positifs.");
  }

  const montantTVA = montantHT * (tauxTVA / 100);
  const montantTTC = montantHT + montantTVA;

  return {
    montantHT: montantHT,
    montantTVA: montantTVA,
    montantTTC: montantTTC
  };
}
