// Variables para contar las veces que se ejecuta cada ejercicio
var conteoEjercicios = [0, 0, 0, 0, 0, 0, 0];
var ejercicioMasSeleccionado = -1;
var ejercicioMenosSeleccionado = -1;

// Función para mostrar el menú y ejecutar ejercicios
function mostrarMenu() {
    while(true){
    var opcion = parseInt(prompt(
        "Seleccione un ejercicio (1-8):\n" +
        "1. Contador de Pares e Impares\n" +
        "2. Calculadora Factorial\n" +
        "3. Validador de Contraseña\n" +
        "4. Tabla de Multiplicar\n" +
        "5. Suma de Números Primos\n" +
        "6. Serie de Fibonacci\n" +
        "7. Convertidor de Temperatura\n" +
        "8. Calculadora de Potencia\n" +
        "9. Salir"
    ));

    if (opcion === 9) {
        cerrar();
        break; // Salir del bucle si se selecciona la opción "Cerrar"
    }

    if (opcion >= 1 && opcion <= 8) {
        ejecutarEjercicio(opcion);
    } else {
        alert("Opción no válida. Por favor, seleccione un número del 1 al 9.");
    }

    mostrarMenu();
    }
}


function ejecutarEjercicio(opcion) {
    switch (opcion) {
        case 1:
            ejercicio_1();
            break;
        case 2:
            ejercicio_2();
            break;
        case 3:
            ejercicio_3();
            break;
        case 4:
            ejercicio_4();
            break;
        case 5:
            ejercicio_5();
            break;
        case 6:
            ejercicio_6();
            break;
        case 7:
            ejercicio_7();
            break;
        case 8:
            ejercicio_8();
            break;
        case 9:
            cerrar();
            break;
        default:
            alert("Opción no válida. Por favor, seleccione un número del 1 al 9.");
            mostrarMenu(); // Volver a mostrar el menú
            break;

        }
    }



// Llama a la función mostrarMenu para comenzar
mostrarMenu();

// Resto del código de las funciones y ejercicios...

function ejercicio_1() {
    alert("contador de pares e impares:Este ejercicio toma un rango dado y cuenta cuantos numeros sonpares y cuantos impares");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 1? (Si/No)");
    if (respuesta && respuesta.toLowerCase() === "si") {
        var numero = parseInt(prompt("Ingrese un número para contar pares e impares:"));
        var contadorPares = 0;
        var contadorImpares = 0;

        for (var i = 1; i <= numero; i++) {
            if (i % 2 === 0) {
                contadorPares++;
            } else {
                contadorImpares++;
            }
        }

        alert(`En el rango desde 1 hasta ${numero}:\nNúmeros pares: ${contadorPares}\nNúmeros impares: ${contadorImpares}`);
        conteoEjercicios[0]++;
    }

}

function ejercicio_2() {
    alert("Calculadora vectorial:Es el producto de todos los números enteros positivos desde el 1 hasta n ");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 2? (Si/No)");
    if (respuesta && respuesta.toLowerCase() === "si") {
        var numero = parseInt(prompt("Ingrese un número positivo para calcular su factorial:"));

        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingrese un número válido y no negativo.");
            return;
        }

        var factorial = 1;
        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }

        alert(`El factorial de ${numero} es: ${factorial}`);
    }

    conteoEjercicios[1]++;

}

function ejercicio_3() {
    
    alert("Validador de contraseña: aquí se hacen comparaciones de tipo string");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 3? (Si/No)");

    if (respuesta && respuesta.toLowerCase() === "si") {
        var intentosMaximos = 3;
        var contraseñaCorrecta = "secreto123";

        for (var intento = 1; intento <= intentosMaximos; intento++) {
            var contraseñaIngresada = prompt(`Intento ${intento}: Ingrese su contraseña:`);

            if (contraseñaIngresada === contraseñaCorrecta) {
                alert("Acceso concedido");
                conteoEjercicios[2]++;
                return; // Salir de la función si la contraseña es correcta
            } else {
                alert("Acceso denegado. Por favor, intente nuevamente.");
            }
        }

        alert("Has agotado tus intentos. Acceso denegado.");
    }

}

function ejercicio_4() {
    alert("Tabla de multiplicar: En este ejercicio se genera la tabla de multiplicar a el unumero ingresado");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 4? (Si/No)");
    if (respuesta && respuesta.toLowerCase() === "si") {
        var numero = parseInt(prompt("Ingrese un número para generar la tabla de multiplicar:"));

        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }

        var tabla = "Tabla de Multiplicar del " + numero + ": \n";

        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            tabla += `  ${numero} x ${i} = ${resultado} \n `;
        }

        alert(tabla)

        conteoEjercicios[1]++;
    }

}

function ejercicio_5() {
    alert("Suma de Números Primos: Este programa calcula la suma de los primeros N números primos.");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 5? (Si/No)");

    if (respuesta && respuesta.toLowerCase() === "si") {
        var N = parseInt(prompt("Ingrese la cantidad de números primos para sumar:"));

        if (isNaN(N) || N <= 0) {
            alert("Por favor, ingrese un número válido y mayor que cero.");
            return;
        }

        function esPrimo(numero) {
            if (numero <= 1) {
                return false;
            }
            if (numero <= 3) {
                return true;
            }
            if (numero % 2 === 0 || numero % 3 === 0) {
                return false;
            }
            for (var i = 5; i * i <= numero; i += 6) {
                if (numero % i === 0 || numero % (i + 2) === 0) {
                    return false;
                }
            }
            return true;
        }

        var suma = 0;
        var contadorPrimos = 0;
        var numero = 2; // Comenzamos desde el primer número primo

        while (contadorPrimos < N) {
            if (esPrimo(numero)) {
                suma += numero;
                contadorPrimos++;
            }
            numero++;
        }

        alert(`La suma de los primeros ${N} números primos es: ${suma}`);
        conteoEjercicios[2]++;
    }

}

function ejercicio_6() {
    alert("Serie de Fibonacci: secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores.");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 6? (Si/No)");

    if (respuesta && respuesta.toLowerCase() === "si") {
        var termino = parseInt(prompt("Ingrese el término hasta el cual desea generar la secuencia de Fibonacci:"));

        if (termino <= 0) {
            alert("Por favor, ingrese un término válido mayor que 0.");
        } else {
            var fibonacciArray = generarFibonacci(termino);
            alert("La secuencia de Fibonacci es: " + fibonacciArray.join(", "));
            conteoEjercicios[5]++;
        }
    }
}

// Función para generar la secuencia de Fibonacci
function generarFibonacci(termino) {
    var fibonacciArray = [0, 1]; // Inicializamos con los primeros dos términos

    if (termino <= 0) {
        return []; // Si el término es menor o igual a 0, retornamos un arreglo vacío
    } else if (termino === 1) {
        return [0]; // Si el término es 1, retornamos solo el primer término
    } else if (termino === 2) {
        return fibonacciArray; // Si el término es 2, retornamos los primeros dos términos
    } else {
        // Generamos los términos adicionales de la secuencia
        for (var i = 2; i < termino; i++) {
            var nextTerm = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            fibonacciArray.push(nextTerm);
        }
        return fibonacciArray;
    }

}

function ejercicio_7() {
    alert("Convertidor de Temperatura: Este programa convierte temperaturas entre grados Celsius y Fahrenheit.");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 7? (Si/No)");
    if (respuesta && respuesta.toLowerCase() === "si") {
        var opcion = prompt("Seleccione la dirección de la conversión:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius");

        if (opcion === "1") {
            var celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
            var fahrenheit = (celsius * 9/5) + 32;
            alert(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit.`);
        } else if (opcion === "2") {
            var fahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));
            var celsius = (fahrenheit - 32) * 5/9;
            alert(`${fahrenheit} grados Fahrenheit son equivalentes a ${celsius} grados Celsius.`);
        } else {
            alert("Opción")
        }
    }

}

function ejercicio_8() {
    alert("Calculadora de Potencia: Este programa calcula la potencia de un número.");
    var respuesta = prompt("¿Desea ejecutar el ejercicio 8? (Si/No)");
    if (respuesta && respuesta.toLowerCase() === "si") {
        var base = parseFloat(prompt("Ingrese la base:"));
        var exponente = parseInt(prompt("Ingrese el exponente:"));

        var resultado = calcularPotencia(base, exponente);
        alert(`${base} elevado a la ${exponente} es igual a ${resultado}.`);
        conteoEjercicios[7]++;
    }
}

function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);

}

function cerrar() {
    programaActivo = false; // Establecer programaActivo en falso para salir del bucle
    console.log("Saliendo del programa...");
    mostrarConteoEjercicios();
}

function mostrarConteoEjercicios() {
    var ejerciciosMenosSeleccionados = [];
    for (var i = 0; i < conteoEjercicios.length; i++) {
        console.log(`Ejercicio ${i + 1}: Se ejecutó ${conteoEjercicios[i]} veces.`);
        if (ejercicioMasSeleccionado === -1 || conteoEjercicios[i] > conteoEjercicios[ejercicioMasSeleccionado]) {
            ejercicioMasSeleccionado = i;
        }
        if (ejercicioMenosSeleccionado === -1 || conteoEjercicios[i] < conteoEjercicios[ejercicioMenosSeleccionado]) {
            ejercicioMenosSeleccionado = i;
        }
    }

    for (var j = 0; j < conteoEjercicios.length; j++) {
        if (j !== ejercicioMasSeleccionado && conteoEjercicios[j] < conteoEjercicios[ejercicioMasSeleccionado]) {
            ejerciciosMenosSeleccionados.push(j + 1); // Agregar el número del ejercicio a la lista
        }
    }


    alert(`El ejercicio más seleccionado fue el ${ejercicioMasSeleccionado + 1}.`);
    alert(`El ejercicio menos seleccionado fue el ${ejercicioMenosSeleccionado + 1}.`);
    var confirmacion = confirm("¿Desea cerrar el programa?");
    if (confirmacion) {
        console.log("Saliendo del programa...");
        return;
    } else {
        mostrarMenu();
    }
}
