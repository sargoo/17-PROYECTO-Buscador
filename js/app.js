 const resultado = document.querySelector('#resultado');
 const year = document.querySelector('#year');
 const marca = document.querySelector('#marca');
 const minimo = document.querySelector('#minimo');
 const maximo = document.querySelector('#maximo');
 const puertas = document.querySelector('#puertas');
 const Transmision = document.querySelector('#Transmision');
 const color = document.querySelector('#color');
 const maxYear = new Date().getFullYear(); //trae el año actual
 const minYear = maxYear - 10;

 //objeto creado a partir de la busqueda

 const datosBusqueda = {
     marca: '',
     year: '',
     minimo: '',
     maximo: '',
     puertas: '',
     transmision: '',
     color: ''
 }

eventListeners();

 function eventListeners(){
    document.addEventListener('DOMContentLoaded', () =>{
        mostrarAutos(autos);
    })

    selectYear();
    marca.addEventListener('change', e =>{
        datosBusqueda.marca = e.target.value;
        filtrarAuto();
        })
    year.addEventListener('change', e =>{
        datosBusqueda.year = parseInt(e.target.value);
        filtrarAuto();
        })
    minimo.addEventListener('change', e =>{
        datosBusqueda.minimo = parseInt(e.target.value);
        filtrarAuto();
        })
    maximo.addEventListener('change', e =>{
        datosBusqueda.maximo = parseInt(e.target.value);
        filtrarAuto();
        })
    puertas.addEventListener('change', e =>{
        datosBusqueda.puertas = parseInt(e.target.value);
        filtrarAuto();
        })
    transmision.addEventListener('change', e =>{
        datosBusqueda.transmision = e.target.value;
        filtrarAuto();
        })
    color.addEventListener('change', e =>{
        datosBusqueda.color = e.target.value;
        filtrarAuto();
        })        
 }

 function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto; 
       const autoHTML = document.createElement('p');
       autoHTML.textContent = `
       ${marca} - ${modelo} - ${year} - precio: $${precio} - ${puertas} puertas - ${color} - Transmisión: ${transmision}
       `
       resultado.appendChild(autoHTML);
    });
 }

 function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

 function selectYear(){
     for (let i = maxYear; i >= minYear; i-- ){
         const opcion = document.createElement('option');
         opcion.value = i; //le da a opcion el valor de i.
         opcion.textContent = i; //le agrega el contenido de i.
         year.appendChild(opcion); // enlaza cada opcion a year.  
     }
 }

 function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);    
    }else{
        sinResultados();
    }  
 }

 function sinResultados(){
     limpiarHTML();
     const sinResultados = document.createElement('div');
     sinResultados.classList.add('alerta', 'error');
     sinResultados.textContent ='No hay resultados para esa busqueda, por favor intenta con otros filtros de busqueda';
     resultado.appendChild(sinResultados);
 }

 function filtrarMarca(auto){
        const {marca} = datosBusqueda;
        if (marca) {
            return auto.marca === marca;
           }
           return auto;
     }
 

 function filtrarYear(auto){
    const {year} = datosBusqueda;
    if (year) {
        return auto.year === year;
       }
       return auto;
 }

 function filtrarPrecioMin(auto){
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
       }
       return auto;
}

function filtrarPrecioMax(auto){
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
       }
       return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
       }
       return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
       }
       return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color;
       }
       return auto;
}

