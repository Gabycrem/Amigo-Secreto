//Qué necesito???
//Declarar variables
let listaAmigos = document.getElementById('listaAmigos'); //Traigo el elemento de lista ul.
let miListaDeAmigos = []; //creo una lista donde almacenar los nombres ingresados.
let cantAmigos = 0; // Variable para manejar el length de la lista mas facil.

//Evento Click - 'Añadir'
function agregarAmigo(){
    //Traer valor del input
    let nombreAmigo = document.getElementById('amigo').value; //Traigo el valor del input.
    console.log(nombreAmigo);
    //Validar que no ingrese un campo vacio
    if (nombreAmigo == ''){
        alert('Debe ingresar un nombre');
        return;
    }
    //Validar que no ingrese un nombre repetido
    if (miListaDeAmigos.includes(nombreAmigo)){
        alert('Nombre repetido, ingrese otro');
        return;
    }
    //Agregar nombre a la lista
    miListaDeAmigos.push(nombreAmigo);
    //Mostrar Lista de nombres en pantallla
    nuevoItemLista(nombreAmigo);
    //Limpiar Campo
    limpiarCampo('amigo');
    return;
}

//Crea un nuevo elemento 'li' dentro del elemento 'ul' con ID 'listaAmigos'
function nuevoItemLista(nombre){
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = nombre;
    listaAmigos.appendChild(nuevoItem);
    return;
}

//Funcion Limpiar Campo
function limpiarCampo(idElemento){
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.value = ''; //Elimino el valor ingresado
    elementoHTML.setAttribute('placeHolder', 'Escribe un nombre'); //Reestablezco el mensaje original para el ingreso de datos
    return;
}

//Elegir un nombre de la lista de ingresados al azar al hacer click en Sortear Amigo
//Evento Click - 'Sortear Amigo'
function sortearAmigo(){
    let nombreGanador;
    //Verifico que la lista tenga más de dos items para sortear.
    cantAmigos = miListaDeAmigos.length;
    if (cantAmigos > 1){
        nombreGanador = buscarElemento(miListaDeAmigos, generarIndex());
        console.log(nombreGanador);
        asignarTextoElemento('resultado',`El amigo secreto sorteado es: ${nombreGanador}`);
        limpiarLista();
    }
    return;
}

//Generar Index
function generarIndex(){
    let indexAzar = Math.floor(Math.random()*cantAmigos);
    return indexAzar;
}
//Buscar
function buscarElemento(unaLista, unIndex){
    return unaLista[unIndex];
}

//Asignar texto
function asignarTextoElemento(idElemento, texto){
    let elementoHTML = document.getElementById(idElemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Limpiar Lista
function limpiarLista(){
    while(listaAmigos.firstChild){
        listaAmigos.removeChild(listaAmigos.firstChild);
    }
    miListaDeAmigos = [];
    return;
}