
let txtEncriptar = document.querySelector(".encriptar");
let respuesta = document.querySelector(".evaluar");
let contenido = document.querySelector(".resultado__contenedor");
let aviso = document.querySelector(".texto__aviso");
let btnEncriptar = document.querySelector(".btn__encriptar");
let btnDesencriptar = document.querySelector(".btn__desencriptar");
let btnCopiar = document.querySelector(".btn__copiar");

function limpiarCajaTexto(){
    document.querySelector(".encriptar").value= '';
}

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alert("Este campo no puede estar vacío.");
    }else if(texto !== txt){
        alert("El texto no debe tener acentos y/o caracteres especiales.");
    }else if(texto !== texto.toLowerCase()){
        alert("El texto debe estar en minúscula.");
    }else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        limpiarCajaTexto();
        contenido.remove(); 
    }
});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alert("Este campo no puede estar vacío.");
    }else if(texto !== txt){
        alert("El texto no debe tener acentos y/o caracteres especiales.");
    }else if(texto !== texto.toLowerCase()){
        alert("El texto debe estar en minúscula.");
    }else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        limpiarCajaTexto();
        contenido.remove(); 
    }
});


btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});
