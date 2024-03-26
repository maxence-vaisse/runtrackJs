document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('keylogger');

    document.addEventListener('keydown', function(event) {
        const keyPressed = event.key.toLowerCase();
        if (/^[a-z]$/.test(keyPressed)) {
            if (document.activeElement === textarea) {
                textarea.value += keyPressed.repeat(2);
            } else {
                textarea.value += keyPressed;
            }
        }
    });
});
