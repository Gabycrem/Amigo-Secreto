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
}


//Validar que no ingrese un campo vacio
//Agregar nombre a la lista
//Limpiar Campo
//Limpiar Lista
//Asignar texto
//Evento Click - 'Sortear Amigo'
//Elegir un nombre de la lista de ingresados al azar al hacer click en Sortear Amigo
//Generar Index
//Buscar
//SortearAmigo