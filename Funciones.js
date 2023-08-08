

// funciones//

function restar(Num1, Num2)
{
    return Num1 - Num2;
}

console.log(restar(6,3))

// Anonymous Functions //

const SumarDosNumeros = function(Numero1,Numero2)
{
    return Numero1 + Numero2;
}

console.log(SumarDosNumeros(4,7))

//Arrow Functions//

/** recibe parametros
 *  @param {numero 1} n1
 *  @param {numero 2}n2
 * @returns
 */

const multplicarDosNumeros = (n1,n2) =>{
    return n1*n2;
}

console.log(multplicarDosNumeros(4,7))

// no recibe parametros//

const multiDos = () =>{
    return 1*0;
}

/**
 *  
 * @param {numero a multplicar} n1
 */

const multiTres = n1 =>{
    return n1*10;
}

/**
 * se realiza de inmediato la operacion, no se incluye el return. 
 * @param {numero 1} n1 
 * @param {numero 2} n2 
 * @returns 
 */
const multiCuatro = (n1,n2) => n1*n2;



// CALLBACK FUNCTION //

/**
 * 
 * @param {numero uno} NumberOne
 * @param {numero 2} NumberTwo
 * @param {la funcion que recibe, lo que hara, llamada callback function} operacion
 */

const operacionesMatematicas = (NumberOne, NumberTwo, operacion) =>
{
    return operacion(NumberOne,NumberTwo);
}

console.log(operacionesMatematicas(2,5,multiCuatro));


//ARREGLOS //

let userData = ['Juan', 1234,'@gmail.com'];

const userDataTwo = [{name:'Juan', pass:1234, mail:'@gmail.com'}];


/**
 * 
 * Length.  Longitud (cantidad de datos)
 * 
 * index   Posicion en el arreglo
 * 
 * push.   Ingresar un dato (al final)
 * 
 * pop.    Sacar el ultimo dato
 */

// hacer dos funciones tipo flecha, luego un callback function, usando los items anteriores// 

let CrearVector = [];

const LlenarVectorNumerosPares = (CrearVector) =>
{
    for(i=2; i <= 20; i +=2)
    {
    CrearVector.push(i);
    }
    return CrearVector;
}
console.log(LlenarVectorNumerosPares(CrearVector));


