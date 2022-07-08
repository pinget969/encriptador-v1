// ENCRIPTAR

function encriptar(){
     
    var texto = document.getElementById("inputTexto").value;

    if(/^[a-z_ ]+$/.test(texto)){      
    var Cifrado = texto.replace(/e/igm,"enter");
    var Cifrado = Cifrado.replace(/o/igm,"ober");
    var Cifrado = Cifrado.replace(/i/igm,"imes");
    var Cifrado = Cifrado.replace(/a/igm,"ai");
    var Cifrado = Cifrado.replace(/u/igm,"ufat");
    
    
    document.getElementById("mensajeEjecutado").innerHTML=Cifrado;
    document.getElementById("copy").style.display = "show";
      
    var element = document.getElementById("imgNene");
    element.src= "img/ogroFiona.png";

    //validar texto vacio
    var cantidad = document.getElementById("inputTexto").value;
        validarCantidadCaracteres(cantidad);
    } else{
        var cantidad = document.getElementById("inputTexto").value;
        validarCantidadCaracteres(cantidad);   
    }

}

//DESENCRIPTAR
function desencriptar(){
    var texto = document.getElementById("inputTexto").value;
    
    var Cifrado = texto.replace(/enter/igm,"e");
    var Cifrado = Cifrado.replace(/ober/igm,"o");
    var Cifrado = Cifrado.replace(/imes/igm,"i");
    var Cifrado = Cifrado.replace(/ai/igm,"a");
    var Cifrado = Cifrado.replace(/ufat/igm,"u");
    

    document.getElementById("mensajeEjecutado").innerHTML=Cifrado;
    document.getElementById("copy").style.display = "show";
    var element = document.getElementById("imgNene");
            element.src= "img/princesaFiona2.png";   
    
//validar texto vacio
    var cantidad = document.getElementById("inputTexto").value;
        validarCantidadCaracteres(cantidad); 
            
}
    //Validacion Caracteres Ingresados
    function validarCantidadCaracteres(cantidad){
        if(cantidad == ""){
            var element = document.getElementById("imgNene");
            element.src= "img/shrek.png";
            var borrador = "Ningún mensaje fue encontrado";
            document.getElementById("nada").innerHTML=borrador;
            document.getElementById("mensajeEjecutado").style.display = "none"; 
            document.getElementById("copy").style.display= "none";         
        }else{

            document.getElementById("mensajeEjecutado").style.display = "";
            document.getElementById("nada").style.display = "none";
            document.getElementById("copy").style.display= ""; 

        }  
    }
    
function copiar(){
    let contenido = document.getElementById("mensajeEjecutado");
    contenido.select();
    contenido.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    const message = document.querySelector("#message");
    message.innerHTML= "¡Copiado!";
    setTimeout(()=> message.innerHTML= "",1900);
}
