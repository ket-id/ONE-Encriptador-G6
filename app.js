function transformarTexto() {
    var inputText = document.getElementById('entradaDeTexto').value;
    var outputText = inputText.replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('salidaDeTexto').value = outputText;
}
transformarTexto()