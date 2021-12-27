////////////así es el programa funcionando con valores fijos

// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = ((precioOriginal * porcentajePrecioConDescuento)/100);

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

/////////////ahora el mismo programa pero con funciones

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ((precio * porcentajePrecioConDescuento)/100);

    return precioConDescuento;

}

function onClickButtonPriceDiscount(params) {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseInt(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = parseInt(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es de: $" + precioConDescuento;
    
}