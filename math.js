function perimetroCuadrado (){
    const lado = document.getElementById('lado')
    const valueLado = parseFloat(lado.value)

    const perimetro = (valueLado*4)

    document.getElementById('resultadoPerimetroCuadrado').innerHTML = 'El perimetro del cuadrado es: ' +perimetro
}

function areaCuadrado (){
    const lado = document.getElementById('lado')
    const valueLado = parseFloat(lado.value)

    const areaCuadrado = (valueLado * valueLado)

    document.getElementById('resultadoAreaCuadrado').innerHTML = 'El area del cuadrado es: '+areaCuadrado;
}

function perimetroTriangulo (){
    const ladoTriangulo1 = document.getElementById('lado1');
    const valueLadoTriangulo1 = parseFloat(ladoTriangulo1.value);
    const ladoTriangulo2 = document.getElementById('lado2');
    const valueLadoTriangulo2 = parseFloat(ladoTriangulo2.value);
    const baseTriangulo = document.getElementById('base');
    const valueBaseTriangulo = parseFloat(baseTriangulo.value);

    const perimetroTriangulo = valueLadoTriangulo1 + valueLadoTriangulo2 + valueBaseTriangulo;

    document.getElementById('resultadoPerimetroTriangulo').innerHTML = 'El perimetro del triangulo es: '+perimetroTriangulo;
}
function  areaTriangulo (){
    const ladoTriangulo1 = document.getElementById('lado1');
    const valueLadoTriangulo1 = parseFloat(ladoTriangulo1.value);
    const ladoTriangulo2 = document.getElementById('lado2');
    const valueLadoTriangulo2 = parseFloat(ladoTriangulo2.value);
    const baseTriangulo = document.getElementById('base');
    const valueBaseTriangulo = parseFloat(baseTriangulo.value);

    if(valueLadoTriangulo1 === valueLadoTriangulo2 && valueBaseTriangulo === valueLadoTriangulo1){
        const alturaTriangulo = (valueLadoTriangulo1*Math.sqrt(3))/2;
        const areaTriangulo = ((valueBaseTriangulo * alturaTriangulo)/2).toFixed(2);
        
        document.getElementById('resultadoAreaTriangulo').innerHTML = 'El triangulo tiene todos los lados iguales, es un triangulo equilatero, su area es: '+areaTriangulo;
    }else{
        const alturaTriangulo = Math.sqrt((valueLadoTriangulo1**2) - (valueBaseTriangulo**2) /4 );
        const areaTriangulo = ((valueBaseTriangulo * alturaTriangulo)/2).toFixed(2);

        document.getElementById('resultadoAreaTriangulo').innerHTML = 'El triangulo es un triangulo iscoceles, su area es: '+areaTriangulo;
    }
}
function perimetroCirculo (){
    const radio = document.getElementById('radio')
    const valueRadio = parseFloat(radio.value);

    const perimetroCirculo = (2 * Math.PI * valueRadio).toFixed(2);

    document.getElementById('resultadoPerimetroCirculo').innerHTML = 'El perimetro del circulo es: '+perimetroCirculo;
}
function areaCirculo (){
    const radio=document.getElementById('radio');
    const valueRadio = parseFloat(radio.value);

    const areaCirculo = (Math.PI*valueRadio**2).toFixed(2);
    document.getElementById('resultadoAreaCirculo').innerText = 'El area del circulo es: ' +areaCirculo;
}


