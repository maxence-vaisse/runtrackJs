
    document.addEventListener("DOMContentLoaded", function() {
      const btnCommanderPapillon = document.querySelector('#btnCommanderPapillon');
      btnCommanderPapillon.addEventListener('click', function() {
        $('#modalCommanderPapillon').modal('show');
      });

      // Récupérer l'élément de la croix de la modal par sa classe
      const closeBtn = document.querySelector('.close');

      // Ajouter un écouteur d'événements pour le clic sur la croix
      closeBtn.addEventListener('click', function() {
        $('#modalCommanderPapillon').modal('hide');
      });
    }); // Add this closing curly brace

    document.getElementById('rebootBtn').addEventListener('click', function() {
        // Afficher le spinner
        document.getElementById('spinner').classList.remove('d-none');
        // Tableau de citations de Blade Runner
        var citations = [
            "Toutes ces données seront perdues dans le temps comme des larmes dans la pluie.",
            "Ce sont des moments qui meurent dans le temps comme des larmes dans la pluie.",
            "J'ai vu des choses que vous autres humains ne pourriez pas croire."
            // Ajouter d'autres citations ici si nécessaire
        ];
        // Choisir une citation aléatoire
        var citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
        // Remplacer le texte spécifique par la citation aléatoire
        document.querySelector('.jumbotron p:last-of-type').textContent = citationAleatoire;
    });

    var contentArray = [
        "Le contenu pour la page 1.",
        "Le contenu pour la page 2.",
        "Le contenu pour la page 3."
    ];

        function changeContent(pageNumber) {
          // L'index dans le tableau commence à 0, alors qu'on compte à partir de 1
          let contentIndex = pageNumber - 1;
          // Changer le contenu du jumbotron selon la page sélectionnée
          document.querySelector('.jumbotron p:nth-of-type(2)').textContent = contentArray[contentIndex];
        }


        document.addEventListener("DOMContentLoaded", function() {
          const progressBar = document.querySelector(".progress-bar");
          const leftButton = document.querySelector(".bi-arrow-bar-left");
          const rightButton = document.querySelector(".bi-arrow-bar-right");
        
          // Fonction pour avancer la barre de progression
          function progressForward() {
            let currentValue = parseFloat(progressBar.style.width);
            if (currentValue < 100) {
              progressBar.style.width = (currentValue + 5) + "%"; // Avancer de 5%
              progressBar.setAttribute("aria-valuenow", currentValue + 5);
            }
          }
        
          // Fonction pour reculer la barre de progression
          function progressBackward() {
            let currentValue = parseFloat(progressBar.style.width);
            if (currentValue > 0) {
              progressBar.style.width = (currentValue - 5) + "%"; // Reculer de 5%
              progressBar.setAttribute("aria-valuenow", currentValue - 5);
            }
          }
        
          // Ajout des écouteurs d'événements sur les boutons
          leftButton.addEventListener("click", progressBackward);
          rightButton.addEventListener("click", progressForward);
        });
        