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
    //Agregar nombre a la lista
    miListaDeAmigos.push(nombreAmigo);
    //Mostrar Lista de nombres en pantallla
    nuevoItemLista(nombreAmigo);
    //Limpiar Campo
    limpiarCampo('amigo');
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
//Limpiar Lista
//Asignar texto
//Evento Click - 'Sortear Amigo'
//Elegir un nombre de la lista de ingresados al azar al hacer click en Sortear Amigo
//Generar Index
//Buscar
//SortearAmigo