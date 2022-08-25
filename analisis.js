console.log(salarios)
//Analisis de Juanita
/*
function encontrarPersona (nombre){//recorriendo array con metodo for, se requiere validar el objeto con el indice para entrar al atributo name.
  for (let i = 0; i < salarios.length; i++) {
    
    if(salarios[i].name == nombre){
      return salarios[i];
    }
  }
}
function encontrarPersona (nombre){
  for (const persona of salarios) {
    persona.name == nombre;
    return persona ;
  }
}
*/
function encontrarPersona (personaEnBusqueda) {
  return (salarios.find (persona => persona.name  == personaEnBusqueda));
}

function medianaPorPersona (nombrePersona){
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  const salarios = trabajos.map(elemento => elemento.salario);
/*
  for (const year of trabajos) {//utilizando ciclo for y el metodo push para crear el array de salarios. tambien es posible realizarlo con el metodo map.
    salarios.push(year.salario);
  }
*/
  console.log(trabajos, salarios)
  const medianaSalarios = formulas.calcularMediana(salarios);

  return medianaSalarios;
}

//Proyeccion salarial
function proyeccionCrecimientoSalario (nombrePersona){
  const trabajo = encontrarPersona(nombrePersona).trabajos; //trabajo es un objeto y requerimos el valor salarial de trabajo

  let porcentajeCrecimiento = [];

  for (let i=1; i<trabajo.length; i++){
    const salarioActual = trabajo[i].salario;
    const salarioPasado = trabajo[i - 1].salario;
    const crecimiento = ((salarioActual - salarioPasado) / salarioPasado).toFixed(2);
    porcentajeCrecimiento.push(crecimiento);
  }
  console.log(porcentajeCrecimiento);
  const medianaPorcentajeCrecimiento = formulas.calcularMediana(porcentajeCrecimiento);

  console.log({porcentajeCrecimiento, medianaPorcentajeCrecimiento});
  const ultimoSalario = trabajo[trabajo.length-1].salario;
  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  console.log(nuevoSalario)
}
//Estudio de empresas --> reesctructurando informacion
const empresas = {};

for ( persona of salarios) {
  for ( trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]){
      empresas[trabajo.empresa] = {};
    }if(!empresas[trabajo.empresa][trabajo.year]){
      empresas[trabajo.empresa][trabajo.year]=[];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}
console.log({empresas})

 function calcularMedianaEmpresas (nombre, year){
  if(!empresas[nombre]){
    console.warn('La empresa no existe');
  }else if (!empresas[nombre][year]){
    console.warn('La empresa no dio salarios ese year')
  }else{
    return formulas.calcularMediana(empresas[nombre][year])
  }
}