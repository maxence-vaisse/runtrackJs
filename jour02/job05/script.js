window.addEventListener('scroll', function() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

    var footer = document.getElementById('footer');

    // Changer la couleur du footer en fonction du pourcentage de scrolling
    if (scrollPercentage < 25) {
        footer.style.backgroundColor = '#333'; // Couleur par défaut
    } else if (scrollPercentage < 50) {
        footer.style.backgroundColor = '#ff0000';
    } else if (scrollPercentage < 75) {
        footer.style.backgroundColor = '#59ff00';
    } else {
        footer.style.backgroundColor = '#000dff';
    }
});
