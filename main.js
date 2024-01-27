/* obtener los elementos por su id */
var nombreEmpresa = document.getElementById('nombreEmpresa');
var descripEmp = document.getElementById('descripEmp');
var fundador = document.getElementById('fundador');
var logo = document.getElementById('logo');
var sitiowp = document.getElementById('sitiowp');
var btncrear = document.getElementById('btncrear');
/* llamar la función crear cuando den click */
btncrear.addEventListener('click', crear);

/* función de crear */
function crear(){
  /* asignarle un valor a una propiedad de un objeto */
  companies.nombreEmpresa = nombreEmpresa.value;
  companies.descripEmp = descripEmp.value;
  companies.fundador = fundador.value;
  companies.logo = logo.value;
  companies.sitiowp = sitiowp.value;
  
  console.log(companies);
  
  /* enviar objeto al json */

  fetch("http://localhost:3000/companies", { 
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    }, body: JSON.stringify(companies)
  })

    .then(result => { return result.json() })
    .then(result => {
    console.log(result);
  })

  /* testeo 
  console.log(nombreEmpresa.value);
  console.log(descripEmp.value);
  console.log(fundador.value);
  console.log(logo.value);
  console.log(sitiowp.value);
  */

}

/* definición de un objeto */
const companies = {
  /* propiedades de un objeto */
  nombreEmpresa: "",
  descripEmp: "empresa",
  fundador: "fundador",
  logo: "logo",
  sitiowp: "sitiowp",
}

/* traer del json los datos en este caso de las companies */

function loadcompanies() {
  fetch("http://localhost:3000/companies"), {
    method:"GET",
    .then(result => { return result.json()})
    .then(result => {
    console.log(result);
    })
  }
}


  
