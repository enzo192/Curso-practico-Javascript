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

// function onClickButtonPriceDiscount(params) {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = parseInt(inputPrice.value);

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = parseInt(inputDiscount.value);

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//     const ResultP = document.getElementById("ResultP");
//     ResultP.innerText = "El precio con descuento es de: $" + precioConDescuento;

// }


//////////////////////// ahora con cupones

//opc 1

// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;
  
//     let descuento;
  
//      switch(couponValue) {
//        case coupons[0]: // "JuanDC_es_Batman"
//          descuento = 15;
//        break;
//        case coupons[1]: // "pero_no_le_digas_a_nadie"
//          descuento = 30;
//        break;
//        case coupons[2]: // "es_un_secreto"
//          descuento = 25;
//        break;
//      }
  
  
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//   }

  //opc 2

  const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón (" + couponValue + ") no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }
  
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

