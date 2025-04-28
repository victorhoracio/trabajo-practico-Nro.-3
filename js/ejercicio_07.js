/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado 
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar 
solo los resultados del 1 al 10 del número elegido por el usuario.*/

function mostrarTablaMultiplicar(numero) {
    document.writeln("<section class='container'>");
    document.writeln(`<h5 class='display-3 text-success text-center'>Tabla del ${numero}</h5>`);
    document.writeln("<table class='table table-responsive table-striped fs-3 text-center'>");
    document.writeln("<thead>");
    document.writeln("<th>Multiplicación</th><th>Resultado</th>");
    document.writeln("</th>");
    document.writeln("<tbody>");
    for (let fila = 1; fila <= 10; fila++) {
      document.writeln("<tr>");
      document.writeln(`<td>${fila} x ${numero} </td>`);
      document.writeln(`<td>${fila * numero}</td>`);
      document.writeln("</tr>");
    }
    document.writeln("</tbody>");
    document.writeln("</table>");
    document.writeln("</section>");
  }
  let num = 0;
  do {
    num = parseInt(prompt("Ingrese un número para escribir su tabla de multiplicar:"));
    if (isNaN(num)) {
      alert("El numero que ingresó es inválido.");
      condicion = confirm("Desea ingresar otro número un número?");
    } else {
      condicion = false;
    }
  } while (condicion);
  if (isNaN(num)) {
    document.writeln("<section class='container'>");
    document.writeln(`<h5 class='display-3 text-center text-danger'>No ingresó un número válido</h5>`);
    document.writeln("</section>");
  } else {
    mostrarTablaMultiplicar(num);
  }
  