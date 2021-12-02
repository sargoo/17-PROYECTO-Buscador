 const resultado = document.querySelector('#resultado');

eventListeners();

 function eventListeners (){
     document.addEventListener('DOMContentLoaded', () =>{
         mostrarAutos();
     })
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