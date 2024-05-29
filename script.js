$(document).ready(function() {
    let text = 'Développeur Web & Web Mobile';
    let length = text.length;
    let timeOut;
    let character = 0;

    (function typeWriter() {
        timeOut = setTimeout(function() {
            character++;
            let type = text.substring(0, character);
            $('.typeWriter').text(type);
            typeWriter();

            if (character == length) {
                clearTimeout(timeOut);
            }

        }, 100);
    }());
});
