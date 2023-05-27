// Función que muestra las tarjetas cuando se desplaza la página
function showCardsOnScroll() {
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cardPosition = card.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (cardPosition < screenHeight) {
            card.style.display = 'block';
        }
    }
}

// Agregar evento de desplazamiento para llamar a la función showCardsOnScroll
window.addEventListener('scroll', showCardsOnScroll);