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
