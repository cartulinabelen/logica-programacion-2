/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entrada: 
45.
Salida
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
Entrada:
 14.
Salida
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 
Pruébalo con los valores numéricos que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-2”*/

function conversionF() {
    while (true){
        let gradosC = parseInt(prompt("Ingrese grados Celsius: "));
        if (!isNaN(gradosC)){
            gradosF = (gradosC * 9) / 5 + 32;
            kelvin = gradosC + 273.15;
            alert(`Grados Fahrenheit: ${gradosF} y grados Kelvin: ${kelvin}`);
            break
        } else (alert ("no es un número"))

    }
}
conversionF();
