/*********************************************/
/* funciones para el examen de js            */
/* autor:                                    */
/*********************************************/

function validar() {
    let nombre = document.getElementById('nombre').value;
    let primerEmail = document.getElementById('primerEmail').value;
    let segundoEmail = document.getElementById('segundoEmail').value;
    let edad = document.getElementById('edad').value;
    let contrasenya = document.getElementById('contrasenya').value;
    let provincia = document.getElementById('provincia').value;
    let mensaje = document.getElementById('mensaje').value;
    let verificacion = document.getElementById('verificacion').checked;
    let correcto = true;
    //NOMBRE
    if (nombre.length === 0) {
        correcto = false;
        document.getElementById('nombre').style.borderColor = "red";
        document.getElementById('errorNombre').style.visibility = "visible";
    }
    //PRIMER EMAIL
    if (primerEmail.length === 0 || !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(primerEmail))) {
        correcto = false;
        document.getElementById('primerEmail').style.borderColor = "red";
        document.getElementById('errorPrimerEmail').style.visibility = "visible";
    }
    //SEGUNDO EMAIL
    if (segundoEmail.length === 0 || segundoEmail != primerEmail) {
        correcto = false;
        document.getElementById('segundoEmail').style.borderColor = "red";
        document.getElementById('errorSegundoEmail').style.visibility = "visible";
    }
    // EDAD
    if (edad === "" || edad <= 0 || edad > 125) {
        correcto = false;
        document.getElementById('edad').style.borderColor = "red";
        document.getElementById('errorEdad').style.visibility = "visible";
    }
    //CONTRASEÑA
    if (contrasenya.length === 0 || !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/.test(contrasenya))) {
        correcto = false;
        document.getElementById('contrasenya').style.borderColor = "red";
        document.getElementById('errorContrasenya').style.visibility = "visible";
    }
    //PROVINCIA
    if (provincia ==="0") {
        correcto = false;
        document.getElementById('provincia').style.borderColor = "red";
        document.getElementById('errorProvincia').style.visibility = "visible";
    }
    //MENSAJE
    if (mensaje === "") {
        correcto = false;
        document.getElementById('mensaje').style.borderColor = "red";
        document.getElementById('errorMensaje').style.visibility = "visible";
    }
    //VERIFICACION
    if (!verificacion) {
        correcto = false;
        document.getElementById('verificacion').style.borderColor = "red";
        document.getElementById('errorVerificacion').style.visibility = "visible";
    }

    if (!correcto) {
        let mensajeError = document.getElementById("mensajeError");
        mensajeError.innerHTML = "Datos erróneos en el formulario";
        mensajeError.style.color = "red";

    }

    return correcto;
}

function quitarError(nodo, id) {
    nodo.style.borderColor = "lightgrey";
    document.getElementById(id).style.visibility = "hidden";
}
