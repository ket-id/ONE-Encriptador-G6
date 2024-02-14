function validarTextos() {
    let text = document.getElementById("entradaDeTexto").value;
    if (text.trim().length === 0) {
        alert("Por favor, ingrese texto.");
        return true;
    } else if (/[A-ZÁÉÍÓÚÜáéíúó]/.test(text)) {
        return true;
    } else {
        return false;
    }
}

function ocultarImagen() {
    const divParaDesactivar = document.getElementById('salidaDeTextoImagen');
    divParaDesactivar.style.display = 'none';

    const divParaDesactivar1 = document.getElementById('salidaDeTextoCaja');
    divParaDesactivar1.style.display = 'flex';
}

function colorRojoParaError() {
    var textoImportate = document.getElementById("textoImportante");
    textoImportate.style.color = "red";
    var sombra = document.getElementById("entradaDeTexto");
    sombra.style.border = "1px solid red";
}

function encriptarTexto() {
    if (validarTextos(true)) {
        colorRojoParaError();
    } else {
        let inputText = document.getElementById('entradaDeTexto').value;
        let outputText = inputText.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('salidaDeTexto').value = outputText;
        ocultarImagen();
    }
}

function desencriptarTexto() {

    if (validarTextos(true)) {
        colorRojoParaError();
    } else {
        let inputText = document.getElementById('entradaDeTexto').value;
        let outputText = inputText.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('salidaDeTexto').value = outputText;
        ocultarImagen()
    }
}


function copiarTexto() {
    let textoParaCopiar = document.getElementById('salidaDeTexto').value;

    navigator.clipboard.writeText(textoParaCopiar)

    document.getElementById("entradaDeTexto").value = ""
}