// Funciones de ayuda para la encriptación y desencriptación
const reemplazos = {
    encriptar: { 'e': 'enter', 'o': 'ober', 'i': 'imes', 'a': 'ai', 'u': 'ufat' },
    desencriptar: { 'enter': 'e', 'ober': 'o', 'imes': 'i', 'ai': 'a', 'ufat': 'u' }
};


function reemplazarTexto(texto, accion) {
    const busquedas = reemplazos[accion];
    return Object.keys(busquedas).reduce((acc, key) => {
        const regex = new RegExp(key, 'igm');
        return acc.replace(regex, busquedas[key]);
    }, texto);
}

function procesarTexto(accion) {
    let texto = document.getElementById("inputTexto").value;
    if (!texto || !/^[a-z_ ]+$/.test(texto)) {
        validarCantidadCaracteres(texto);
        return;
    }

    const resultado = reemplazarTexto(texto, accion);
    document.getElementById("mensajeEjecutado").innerHTML = resultado;
    document.getElementById("copy").style.display = "block";
    const imagen = accion === 'encriptar' ? "img/ogroFiona.png" : "img/princesaFiona2.png";
    document.getElementById("imgNene").src = imagen;

    validarCantidadCaracteres(texto);
}


// Encapsulando las funciones de encriptar y desencriptar
function encriptar() {
    procesarTexto('encriptar');
}

function desencriptar() {
    procesarTexto('desencriptar');
}

// Función de validación
function validarCantidadCaracteres(cantidad) {
    const mensajeEjecutado = document.getElementById("mensajeEjecutado");
    const nada = document.getElementById("nada");
    const copy = document.getElementById("copy");
    const imgNene = document.getElementById("imgNene");

    if (!cantidad) {
        console.log("pasando por validar function");
        imgNene.src = "img/shrek.png";
        nada.style.display = "flex";
        nada.style.justifyContent = "center";
        nada.innerHTML = "Ningún mensaje fue encontrado";
        mensajeEjecutado.style.display = "none";
        copy.style.display = "none";
    } else {
        mensajeEjecutado.style.display = "block";
        nada.style.display = "none";
        copy.style.display = "block";
    }
}

// Simplificación de la función copiar
function copiar() {
    let contenido = document.getElementById("mensajeEjecutado").textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        const message = document.querySelector("#message");
        message.innerHTML = "¡Copiado!";
        setTimeout(() => message.innerHTML = "", 1900);
    });
}
