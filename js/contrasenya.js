function mostrarOcultarContrasenya() {
    var campoContrasenya = document.getElementById("contrasenya");
    var checkbox = document.getElementById("mostrarContrasenya");

    if (checkbox.checked) {
        campoContrasenya.type = "text";
    } else {
        campoContrasenya.type = "password";
    }
}
