// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Fucionalidades:

Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

//array para los nombres de los amigos ingresados
let amigos = []; 


//creamos una función que permite al usuario ingresar un nombre en el campo de texto y a;adirlo a la lista de amigos creada anteriormente
function agregarAmigo()
{
    let nombreAmigo = document.getElementById("amigo"); //instanciamos una variable y le damos el valor del elemento del html que tiene el id amigo

    //validamos si el campo de texto no está vacío 
    if (nombreAmigo.value != "") {
        amigos.push(nombreAmigo.value);//si no está vacío, agregamos el nombre al array
        limpiarCampo();//Llamamos al metodo que limpia el campo del nombre
    }else
    {
        //si está vacío, mostramos una alerta
        alert("Por favor ingresa un nombre de amigo");
    }

}

 //Creamos una función que recorre el array y agregamos cada nombre como un elemento dentro de una lista html
 //usando innerHTML para limpiar la lista antes de agregar nuevos elementos
 function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); //instanciamos una variable y le damos el valor
 }

//creamos una función para limpiar el campo de texto después de añadir un nombre
function limpiarCampo()
{
    document.getElementById("amigo").value = "";
}