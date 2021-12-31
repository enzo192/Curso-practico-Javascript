// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// programa con información manual

// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
    
// }

// const promedioLista1 = (sumaLista1 / lista1.length);


//Programa con function

function calcularMediaAritmetica(lista) {
    //ejemplo con ciclo FOR

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
    }

    // Ejemplo con metodo REDUCE de los arrays

    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento) {
    //         return valorAcumulado + nuevoElemento;
    //     }
    // )

    //ejemplo con for of
    // for(let i of lista) sumaLista+=i;

    const promedioLista = (sumaLista / lista.length);

    return promedioLista;
}

function onclickButtonPromedio() {

    const inputPromedio = document.getElementById("inputPromedio");
    const inputValor = inputPromedio.value;

    let listaArray = JSON.parse(`[${inputValor}]`);  // convierto un array de texto a un array de números

    const promedio = calcularMediaAritmetica(listaArray);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El promedio es: " + promedio;
    
}