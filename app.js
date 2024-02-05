function encriptarTexto() {
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



function desencriptarTexto() {
    var inputText = document.getElementById('entradaDeTexto').value;
    var outputText = inputText.replace(/enter/g, 'e')        
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('salidaDeTexto').value = outputText;
}

function copiarTexto() {
    var inputTextArea = document.getElementById('salidaDeTexto');
    inputTextArea.select();
    try {
        document.execCommand('copy');
        console.log('Texto copiado al portapapeles.');
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
    }
    window.getSelection().removeAllRanges();
}
