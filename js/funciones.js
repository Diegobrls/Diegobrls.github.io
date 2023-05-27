document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario
    var form = document.getElementById('contactForm');

    // Agregar un controlador de eventos para el evento de envío del formulario
    form.addEventListener('submit', function (event) {
        // Detener el envío del formulario
        event.preventDefault();

        // Validar el formulario
        if (form.checkValidity()) {
            // Si el formulario es válido, enviarlo
            form.submit();
        } else {
            // Si el formulario no es válido, mostrar los mensajes de error y resaltar los campos inválidos
            form.classList.add('was-validated');
        }
    });
});