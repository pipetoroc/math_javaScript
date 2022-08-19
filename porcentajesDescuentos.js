const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const optionDiscount = document.getElementById('cupon-list')
const pResult = document.querySelector('#result');


const button = document.querySelector('#calcular');
button.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento(){
  const price = parseFloat(inputPrice.value);
  let discount = Number(inputDiscount.value);
  let cupon = parseFloat(optionDiscount.value);

  if (!price || (!discount && !cupon)){
    pResult.innerText = 'Por favor escoge  el valor del articulo y descuento';
    return;
  }
  if(discount>=100){
    pResult.innerHTML = 'No te podemos dar el descuento del 100%';
    return;
  }
  if(cupon !=0){
    switch (cupon) {
      case 30:
        cupon = 30;
        break;
      case 50:
        cupon = 50;
        break;
        case 70:
          cupon = 70;
        break;
    }
  }
  const newPrice = (price * (100 - (discount+cupon)))/100; 
  
  pResult.innerText = 'El nuevo precio con descuento es: $ '+ newPrice; 
}