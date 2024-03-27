$(document).ready(function() {
    const $arcEnCiel = $('#arc-en-ciel');
    const $images = $arcEnCiel.children('.image');
    const $melangerButton = $('#melanger');
    const $message = $('#message');
    const $arcEnCielReorganiserContainer = $('#arc-en-ciel-reorganiser-container');

    function verifierOrdre() {
        const imagesDansZone = $arcEnCielReorganiserContainer.find('.image').length;
        if (imagesDansZone !== 6) {
            $message.text('Vous avez perdu');
            $message.css('color', 'red');
            return;
        }
        
        let ordreCorrect = true;
        $arcEnCielReorganiserContainer.find('.image').each(function(index) {
            const indexAttendu = index + 1;
            const indexImage = parseInt($(this).attr('data-index'));
            if (indexImage !== indexAttendu) {
                ordreCorrect = false;
                return false;
            }
        });

        if (ordreCorrect) {
            $message.text('Vous avez gagné');
            $message.css('color', 'green');
        } else {
            $message.text('Vous avez perdu');
            $message.css('color', 'red');
        }
    }

    $melangerButton.on('click', function() {
        const $shuffledImages = $images.toArray().sort(() => Math.random() - 0.5);
        $arcEnCiel.empty().append($shuffledImages);
        $message.text('');

        $images.draggable({
            axis: 'y, x',
            revert: true,
            revertDuration: 0,
            start: function() {
                $(this).addClass('dragging');
            },
            stop: function() {
                $(this).removeClass('dragging');
            }
        });

        $arcEnCielReorganiserContainer.droppable({
            drop: function(event, ui) {
                const $droppedImage = ui.draggable;
                $droppedImage.appendTo($(this));
                verifierOrdre(); 
            }
        });

        $arcEnCielReorganiserContainer.find('.image').removeClass('dragging').draggable('destroy');
    });
});