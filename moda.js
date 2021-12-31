
// creo el array de elementos
// const lista1 = [
//     1,
//     1,
//     2,
//     4,
//     2,
//     2,
//     5
// ];

// const lista1Count = {};

// uso el metodo .map para recorrer el array y me cuente cuantas veces se repite el mismo valor
// proporcionando la información en un nuevo array con arrays dentro
// lista1.map(
//     function (elemento) {
//         if (lista1Count[elemento]) {
//             //lista1Count[elemento] = lista1Count[elemento] + 1;
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1;
//         }  
//     }
// );

// se combierte en arrays de arrays y se ordena para saber cual es que mayor o el que mas se repite 
function comparar(A, B) {return A[1] - B[1]};
// const lista1Array = Object.entries(lista1Count).sort(comparar);

// la moda es el ultimo elemento del array
// const moda = lista1Array[lista1Array.length - 1];


function calcularModa(listas) {

    const listasCount = {};

    listas.map(
        function (elemento) {
            if (listasCount[elemento]) {
                //lista1Count[elemento] = lista1Count[elemento] + 1;
                listasCount[elemento] += 1;
            } else {
                listasCount[elemento] = 1;
            }  
        }
    );
    const listasArray = Object.entries(listasCount).sort(comparar);

    const moda = listasArray[listasArray.length - 1];

    return moda;
    
}

function onclickButtonModa() {
    const inputModa = document.getElementById("inputModa");
    const inputValor = inputModa.value;

    const valoresArray = inputValor.split(',');

    const modaCualquierArray = calcularModa(valoresArray);

    const resultM = document.getElementById("ResultM");
    resultM.innerText = "La Moda es: " + modaCualquierArray[0];

};
