document.addEventListener("DOMContentLoaded", function() {
  var btnCommanderPapillon = document.getElementById('btnCommanderPapillon');
  btnCommanderPapillon.addEventListener('click', function() {
      $('#modalCommanderPapillon').modal('show');
  });

  // Récupère l'élément de la croix de la modal par sa classe
  var closeBtn = document.querySelector('.close');

  // Ajoute un écouteur d'événements pour le clic sur la croix
  closeBtn.addEventListener('click', function() {
      $('#modalCommanderPapillon').modal('hide');
  });
});


// script.js
document.getElementById('rebootBtn').addEventListener('click', function() {
  // Afficher le spinner
  document.getElementById('spinner').classList.remove('d-none');
  // Tableau de citations de Blade Runner
  var citations = [
    "Toutes ces données seront perdues dans le temps comme des larmes dans la pluie.",
    "Ce sont des moments qui meurent dans le temps comme des larmes dans la pluie.",
    "J'ai vu des choses que vous autres humains ne pourriez pas croire."
    // Ajoutez d'autres citations ici si nécessaire
  ];
  // Choisir une citation aléatoire
  var citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
  // Remplacer le texte spécifique par la citation aléatoire
  document.querySelector('.jumbotron p:last-of-type').textContent = citationAleatoire;
});

