function validarYEncriptar() {
    let text = document.getElementById("entradaDeTexto").value;
    if (text.trim().length === 0) {
        alert("Por favor, ingrese texto.");
    } else if (/[A-ZÁÉÍÓÚÜáéíúó]/.test(text)) {
        var textoImportate = document.getElementById("textoImportante");
        textoImportate.style.color = "red";
        var sombra = document.getElementById("entradaDeTexto");
        sombra.style.border = "1px solid red";
    } else {
        encriptarTexto(text);
    }
}


function validarYDesencriptar() {
    let text = document.getElementById("entradaDeTexto").value;
    if (text.trim().length === 0) {
        alert("Por favor, ingrese texto.");
    } else if (/[A-ZÁÉÍÓÚÜáéíúó]/.test(text)) {
        var elemento = document.getElementById("textoImportante");
        elemento.style.color = "red";
        var sombra = document.getElementById("entradaDeTexto");
        sombra.style.border = "1px solid red";
    } else {
        desencriptarTexto(text);
    }
}

function encriptarTexto(text) {
    var inputText = document.getElementById('entradaDeTexto').value;
    var outputText = inputText.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    document.getElementById('salidaDeTexto').value = outputText;

    var divParaDesactivar = document.getElementById('salidaDeTextoImagen');
    divParaDesactivar.style.display = 'none';

    var divParaDesactivar = document.getElementById('salidaDeTextoCaja');
    divParaDesactivar.style.display = 'flex';
}

function desencriptarTexto(text) {
    var inputText = document.getElementById('entradaDeTexto').value;
    var outputText = inputText.replace(/enter/g, 'e')        
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('salidaDeTexto').value = outputText;

    var divParaDesactivar = document.getElementById('salidaDeTextoImagen');
    divParaDesactivar.style.display = 'none';

    var divParaDesactivar = document.getElementById('salidaDeTextoCaja');
    divParaDesactivar.style.display = 'flex';
}


function copiarTexto() {
    var textoParaCopiar = document.getElementById('salidaDeTexto').value;

    navigator.clipboard.writeText(textoParaCopiar)

    document.getElementById("entradaDeTexto").value = ""
}