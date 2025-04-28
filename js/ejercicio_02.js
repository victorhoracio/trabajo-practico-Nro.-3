/*
Ejercicio 2 - Arreglos
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar 
el arreglo generado, luego realizar las siguientes acciones:

*Mostrar la longitud del arreglo.
*Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
*Añade en última posición la ciudad de París.
*Escribe por pantalla el elemento que ocupa la segunda posición.
*Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
const ciudades = [];
do {
  let ciudad = prompt("Ingrese el nombre de una ciudad:");
  if (ciudad === "" || ciudad === null || ciudad === undefined) {
    alert("Ingresar una ciudad por favor!");
  } else {
    //agrego elementos al array
    ciudades.push(ciudad);
  }
  //cuando presione cancelar, salgo del bucle
} while (confirm("Desea agregar mas ciudades?"));
//para poder escribir la longitud tengo que ver si existe un array
if (ciudades.length === 0) {
  document.writeln('<section class="container">');
  document.writeln('<h3 class="text-center">No se ingresaron ciudades</h3>');
} else {
  document.writeln('<section class="container">');
  document.writeln('<h3 class="text-center text-success ">Arreglo Ingresado</h3>');
  document.writeln('<ul class="list-group">');
  for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li class="list-group-item fw-bold fs-3">${i}-${ciudades[i]}</li>`);
  }
  document.writeln("</ul>");

  document.writeln(`<p class="fw-bold display-5 text-primary">Primera posición: ${ciudades[0]}</h3>`);
  document.writeln(`<p class="fw-bold display-5 text-warning">Tercera posición: ${ciudades[2]}</h3>`);
  document.writeln(
    `<p class="fw-bold display-5 text-danger"> última posición: ${ciudades[ciudades.length - 1]}</h3>`
  );
  //Agrego al ultima posicion
  ciudades.push("Paris");
  document.writeln(`<p class="fw-bold display-5 text-secondary">Segunda posición: ${ciudades[1]}</h3>`);
  ciudades[1] = "Barcelona";
  document.writeln('<h3 class="text-center text-success display-4">Arreglo Modificado</h3>');
  document.writeln('<ul class="list-group">');
  for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li class="list-group-item fw-bold fs-3">${i}-${ciudades[i]}</li>`);
  }
  document.writeln("</ul>");
  document.writeln("</section>");
}
