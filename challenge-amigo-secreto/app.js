// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];/*para guardar los nombres de los amigos*/

function agregarAmigo() /*funcion para agregar amigos*/
{
    let inputAmigo = document.getElementById("amigo");/*para que se guarde el nombre del amigo*/
    let nombreAmigo = inputAmigo.value;/* se guarda  el nombre ingresado en la caja de texto */
    
    if(!nombreAmigo)/*Valida que no se ingrese un nombre*/
    { 
        alert("Debe ingresar un nombre");
        return;
    }
    amigos.push(nombreAmigo);/*para que se guarde el nombre en el arreglo*/
    console.log(amigos);
    inputAmigo.value = "";/*para que se limpie el input*/
    inputAmigo.focus();/*para que este todo enfocado*/
    redenderizarAmigos();
};
function redenderizarAmigos()/*funcion para mostrar la lista en la pantalla*/
{
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";/*deja limpia la lista */   
    
    for (let i = 0; i < amigos.length; i++)/*recorre el arreglo de amigos*/
    {
        let item = document.createElement("li");/*crea un elemento li para que se muestre el nombre del amigo por pantalla*/
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);/*agrega como hijo*/
    }
};
function sortearAmigo()/*funcion para sortear amigos*/
{
    if(amigos.length === 0)/*valida que haya amigos en la lista*/
    { alert("Debe ingresar algun amigo");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];/*para que se sortee un amigo*/
    let Resultado = document.getElementById("resultado");/*para que se muestre el resultado*/
    Resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;  
    amigos.length = 0; /* para limpiar la lista y comenzar de 0*/
};

