
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
        

        document.addEventListener('keydown', function(event) {
          const key = event.key.toLowerCase();
          if (key === 'd' || key === 'g' || key === 'c') {
            const sequence = ['d', 'g', 'c'];
            const pressedKeys = [];
            document.addEventListener('keydown', function(event) {
              pressedKeys.push(event.key.toLowerCase());
              if (pressedKeys.join('') === sequence.join('')) {
                const modal = document.getElementById('myModal');
                modal.style.display = 'block';
                // Récupérer les valeurs du formulaire et les afficher dans la modale
                const formData = new FormData(document.getElementById('container1'));
                let modalContent = '';
                for (const [key, value] of formData.entries()) {
                  modalContent += key + ': ' + value + '<br>';
                }
                document.getElementById('modalContent').innerHTML = modalContent;
              }
            });
          }
        });
        
        // Fermer la modale lorsque l'utilisateur clique sur le bouton de fermeture (x)
        const closeButton = document.getElementsByClassName('close')[0];
        closeButton.onclick = function() {
          const modal = document.getElementById('myModal');
          modal.style.display = 'none';
        }
        
        // Fermer la modale lorsque l'utilisateur clique en dehors de celle-ci
        window.onclick = function(event) {
          const modal = document.getElementById('myModal');
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        }



        document.addEventListener("DOMContentLoaded", function() {
          const submitButton = document.querySelector('.btn-primary');
          const emailInput = document.querySelector('input[type="text"]');
          const passwordInput = document.querySelectorAll('input[type="password"]')[0];
          const spinner = document.querySelector('.jumbotron .spinner-border');
      
          submitButton.addEventListener('click', function() {
              // Vérifier si l'email et le mot de passe ne sont pas vides
              if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                  // Générer un nombre aléatoire pour choisir une couleur de spinner
                  const randomColorIndex = Math.floor(Math.random() * 8);
      
                  // Retirer toutes les classes de couleur du spinner
                  spinner.classList.remove('text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-light', 'text-dark');
      
                  // Ajouter la classe de couleur au spinner en fonction du nombre aléatoire généré
                  switch (randomColorIndex) {
                      case 0:
                          spinner.classList.add('text-primary');
                          break;
                      case 1:
                          spinner.classList.add('text-secondary');
                          break;
                      case 2:
                          spinner.classList.add('text-success');
                          break;
                      case 3:
                          spinner.classList.add('text-danger');
                          break;
                      case 4:
                          spinner.classList.add('text-warning');
                          break;
                      case 5:
                          spinner.classList.add('text-info');
                          break;
                      case 6:
                          spinner.classList.add('text-light');
                          break;
                      case 7:
                          spinner.classList.add('text-dark');
                          break;
                      default:
                          spinner.classList.add('text-primary');
                  }
              }
          });
      });
      