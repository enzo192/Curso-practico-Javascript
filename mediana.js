// if (lista1 es par?) {
//     necesitamos dos elementos 
//     el promedio
//     mediana 
// } else {
//     es inpar, por lo tanto el dato de la mitad
//     de lista1 es la mediana.
// }

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = (sumaLista / lista.length);

    return promedioLista;
}

let listas = [
    50, 20, 60, 10, 5
];

const mitadListas = parseInt(listas.length / 2);

function comparar ( a, b ){ return a - b; } //funcion para comparar numeros y ordenarlos
listas.sort(comparar); // orden de acuerdo a la funcion anterior

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(listas.length)) {
    const elemento1 = listas[mitadListas - 1];
    const elemento2 = listas[mitadListas];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = promedioElemento1y2;

} else {
    mediana = listas[mitadListas];
};



//calcular mediana para cualquier lista

// // ordenar la lista que nos den 

// // Un array de elementos numéricos, usando una función de comparación:
// var arr = [ 40, 1, 5, 200 ];
// function comparar ( a, b ){ return a - b; }
// arr.sort( comparar );  // [ 1, 5, 40, 200 ]

// //Lo mismo pero usando una función anónima normal:
// var arr = [ 40, 1, 5, 200 ];
// arr.sort(function(a,b){return a - b;});  // [ 1, 5, 40, 200 ]

// //Lo mismo escrito más compacto mediante una función flecha:
// var arr = [ 40, 1, 5, 200 ];
// arr.sort((a,b)=>a-b);  // [ 1, 5, 40, 200 ]