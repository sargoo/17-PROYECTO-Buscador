 const resultado = document.querySelector('#resultado');
 const year = document.querySelector('#year');
 const maxYear = new Date().getFullYear(); //trae el año actual
 const minYear = maxYear - 10;

eventListeners();

 function eventListeners (){
     document.addEventListener('DOMContentLoaded', () =>{
         mostrarAutos();
     })

     selectYear();
 }

 function mostrarAutos(){
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto; 
       const autoHTML = document.createElement('p');
       autoHTML.textContent = `
       ${marca} ${modelo}  - ${year} -  ${precio} - ${puertas} puertas - ${color} - Transmisión: ${transmision}
       `
       resultado.appendChild(autoHTML);
    });
 }

 function selectYear(){
     for (let i = maxYear; i >= minYear; i-- ){
         const opcion = document.createElement('option');
         opcion.value = i; //le da a opcion el valor de i.
         opcion.textContent = i; //le agrega el contenido de i.
         year.appendChild(opcion); // enlaza cada opcion a year.

        
     }

 }