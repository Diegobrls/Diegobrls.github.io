document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón de enviar
    var submitButton = document.getElementById('submitButton');

    // Agregar un controlador de eventos para el evento de clic en el botón de enviar
    submitButton.addEventListener('click', function (event) {
        // Detener el envío del formulario
        event.preventDefault();

        // Obtener el formulario
        var form = document.getElementById('contactForm');

        // Validar el formulario
        if (form.checkValidity()) {
            // Mostrar el popover
            submitButton.setAttribute('data-bs-toggle', 'popover');
            submitButton.setAttribute('data-bs-content', 'Mensaje enviado correctamente');
            submitButton.setAttribute('data-bs-placement', 'top');
            var popover = new bootstrap.Popover(submitButton);
            popover.show();

            // Borrar el contenido del formulario después de 3 segundos
            setTimeout(function () {
                form.reset();
                form.classList.remove('was-validated');
            });
        } else {
            // Si el formulario no es válido, mostrar los mensajes de error y resaltar los campos inválidos
            form.classList.add('was-validated');
        }
    });
});
