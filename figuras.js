//////////////////// codigo del cuadrado

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado) {
    return lado * 4;
}


// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();




/////////////////// codigo del triangulo

// console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const BaseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + BaseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");


// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + BaseTriangulo;
// console.log("La perimetro del triangulo es de: " + perimetroTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
}


// const areaTriangulo = (BaseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triangulo es: " + areaTriangulo + "cm^2");
function areaTriangulo(base, lado1) {
    const altura = Math.sqrt(((base/2) * (base/2)) + (lado1 * lado1));
    return (base * altura) / 2;
}
console.groupEnd();


//////////////////////// codigo del Circulo

console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el html
//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);
    
    const area = areaCuadrado(value);
    alert(area);
}

//Trinagulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("inputBase");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputBase");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado1");
    const value2 = parseInt(input2.value);
    
    const area = areaTriangulo(value1,value2);
    alert(area);
} 