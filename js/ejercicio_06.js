/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.*/
function perimetro(a, b) {
    return 2 * (a + b);
  }
  alert("Va a calcular el perímetro de un rectángulo.");
  let condicion = true;
  let lado1 = 0;
  let lado2 = 0;
  do {
    lado1 = parseFloat(prompt("Ingrese un lado del rectángulo:"));
    lado2 = parseFloat(prompt("Ingrese el otro lado del rectángulo:"));
    if (
      isNaN(lado1) ||
      isNaN(lado2) ||
      lado1 === "" ||
      lado2 === "" ||
      lado1 === null ||
      lado2 === null ||
      lado1 <= 0 ||
      lado2 <= 0
    ) {
      alert("Ingrese números válidos");
      condicion = true;
    } else {
      condicion = false;
    }
  } while (condicion && confirm("Desea agregar los lados de un rectángulo?"));
  
  if (condicion) {
    document.writeln('<section class="container">');
    document.writeln(`<h5 class="display-5 text-center text-danger">No ingresó números válidos.</h5>`);
    document.writeln("</section>");
  } else {
    resultado = perimetro(lado1, lado2);
    document.writeln('<section class="container">');
    document.writeln(
      `<h5 class="display-5 text-center">Resultado de la función para calcular el perímetro de un rectángulo</h5>`
    );
    document.writeln(
      `<p class="text-center text-success fs-1">El perimetro del rectángulo de lado ${lado1} y ${lado2} es: ${resultado}</p>`
    );
    document.writeln("</section>");
  }
  