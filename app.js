// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar() {
    const textArea = document.querySelector(".text__area");
    const textoOriginal = textArea.value.trim();
    
    // Verificar si el textarea está vacío
    if (textoOriginal === "") {
        alert("Por favor, ingresa algún texto.");
        return; 
    }

    const textoEncriptado = encriptarTexto(textoOriginal);
    textArea.value = textoEncriptado;  // Cambia el valor del textarea al texto encriptado

    cambiarImagen();  // Ejecutar la función de cambio de imágenes solo si hay texto
}

function encriptarTexto(stringEncriptado) {
    const llavesEncriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptado = stringEncriptado.toLowerCase();

    // Reemplazar en orden de aparición
    for (const [letra, codigo] of llavesEncriptacion) {
        stringEncriptado = stringEncriptado.replaceAll(letra, codigo);
    }

    return stringEncriptado;
}

function cambiarImagen() {
    // Obtener las imágenes y los textos por su id
    const imgMuñeco = document.getElementById("imgMuñeco");
    const imgLlave = document.getElementById("imgLlave");
    const textoMuñeco = document.getElementById("textoMuñeco");
    const textoLlave = document.getElementById("textoLlave");

    // Cambiar el estado de visibilidad
    if (imgMuñeco.hidden) {
        imgMuñeco.hidden = false;
        imgLlave.hidden = true;
        textoMuñeco.hidden = false;
        textoLlave.hidden = true;
    } else {
        imgMuñeco.hidden = true;
        imgLlave.hidden = false;
        textoMuñeco.hidden = true;
        textoLlave.hidden = false;
    }
}

function desencriptar() {
    const textArea = document.querySelector(".text__area");
    const textoEncriptado = textArea.value; // Obtener el texto encriptado del textarea
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    textArea.value = textoDesencriptado; // Actualizar el textarea con el texto desencriptado
    
    if (textArea.value === "") {
        alert("Por favor, ingresa algún texto.");
        return; 
    }
    cambiarImagen();
    
}

function desencriptarTexto(stringDesencriptado) {
    const llavesEncriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    
    stringDesencriptado = stringDesencriptado.toLowerCase();

    // Reemplazar en orden inverso
    for (let i = llavesEncriptacion.length - 1; i >= 0; i--) {
        const [letra, codigo] = llavesEncriptacion[i];
        stringDesencriptado = stringDesencriptado.replaceAll(codigo, letra);
    }

    return stringDesencriptado;
    
}
function borrar() {
    const textArea = document.querySelector(".text__area");
    textArea.value = "";
}
