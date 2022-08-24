const formulas = {};

// Calcular promedio
 formulas.sumaArray = function sumaArray (acumulador, elemento){//se declara la callback function que se pasa al metodo reduce
  return (acumulador + elemento);
}
 formulas.promedio = function promedio (array){
  const sumaLista = array.reduce(formulas.sumaArray);//El metodo reduce acepta una funcion donde va la logica de la suma.
  const promedio = sumaLista/2
  return (promedio)
}
//Ordenar array
 formulas.sortArray = function sortArray (array){
  const arraySorted = array.sort((a, b)=> a-b);//El metodo sort recibe dos parametros a y b, realiza el cambio si le especificamos que a debe ser menor a b.
  return arraySorted;
}
//Funcion es par o impar
 formulas.isEven = function isEven(array){
  if (array.length % 2 ===0){
    return true;
  }else{
   return false;
  }
}
//calcular mediana
 formulas.calcularMediana = function calcularMediana (arrayUnsorted){
  const array = formulas.sortArray(arrayUnsorted);
  const arrayEsPar = formulas.isEven(array);

  if(arrayEsPar){
    const mitadArray1 = Math.floor(array.length/2);
    const mitadArray2 = Math.floor(array.length/2)-1;

    // const medianaArrayPar = (array[mitadArray1] + array[mitadArray2])/2;
    const medianaArrayPar = formulas.promedio([array[mitadArray1], array[mitadArray2]]);
    return medianaArrayPar;
  }else{
    const mitadArray = Math.floor(array.length/2);
    const medianaArrayImpar = array[mitadArray];
    return medianaArrayImpar;
  }
}
//Ordenar array bidimensional para calcular moda, partiendo de objeto.
 formulas.sortArrayBidimensional = function sortArrayBidimensional (array){
  const arraySorted = array.sort((a, b) => a[1]-b[1]);//El metodo sort recibe dos parametros a y b, realiza el cambio si le especificamos que a debe ser menor a b, lo podemos usar para ordenar array bidimensional enviandole el indice del elemento a y b que sera el value del objeto.
  return arraySorted;
}
//Calcular Moda
 formulas.calcularModa = function calcularModa (array){
  const arrayCount = {};//Se declara un objeto vacio para enviarle como key el elemento y value el numero de veces que se encuentra en el arreglo.

  for (let i=0; i<array.length; i++){
    //Se recorren todos los elementos del array y se guarda en una variable los elementos.
    const elemento = array[i];
    //Se pregunta si existe el elemento en el objeto(arrayCount[elemento]), si existe se le suma uno al value del objeto.
    if(arrayCount[elemento]){
      arrayCount[elemento] += 1;
    }else{
      arrayCount[elemento] =1;
    }
  }
  const listaCount = Object.entries(arrayCount);
  const listaCountSorted = sortArrayBidimensional(listaCount);
  const listaCountSortedMax = listaCountSorted[listaCountSorted.length-1];

  const moda = listaCountSortedMax[0];
  return `La moda es : ${moda} que repite ${listaCountSortedMax[1]} veces`;
}