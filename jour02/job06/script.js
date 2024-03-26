// Fonction pour détecter le code Konami
function konamiCode(callback) {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let position = 0;

    document.addEventListener('keydown', function (e) {
        if (e.key === sequence[position]) {
            position++;
            if (position === sequence.length) {
                position = 0;
                callback();
            }
        } else {
            position = 0;
        }
    });
}

// Fonction pour appliquer le style de La Plateforme
function applyPlatformStyle() {
    const platformContent = document.getElementById('LaPlateforme_content');
    platformContent.classList.remove('hidden');
}

// Détecter le code Konami et appliquer le style de La Plateforme
konamiCode(applyPlatformStyle);
