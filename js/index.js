//funcion de educacion
function home() {
	let principal = document.getElementsByClassName("contenedorHome")[0]; //necesitamos colocar la posicion para que sepa cual class traer
	principal.style.display = "flex" //Cambia los estilos de css  
	let segundo = document.getElementsByClassName("contenedorEducacion")[0]
	segundo.style.display = "none"
	let tercero = document.getElementsByClassName("contenedorCompetencias")[0]
	tercero.style.display = "none"
    let cuarto = document.getElementsByClassName("contenedorPortafolio")[0]
	cuarto.style.display = "none"
    let quinto = document.getElementsByClassName("contenedorContacto")[0]
	quinto.style.display = "none"
}

//funcion de educacion
function educacion() {
	let principal = document.getElementsByClassName("contenedorEducacion")[0]; //necesitamos colocar la posicion para que sepa cual class traer
	principal.style.display = "flex" //Cambia los estilos de css  
	let segundo = document.getElementsByClassName("contenedorHome")[0]
	segundo.style.display = "none"
	let tercero = document.getElementsByClassName("contenedorCompetencias")[0]
	tercero.style.display = "none"
    let cuarto = document.getElementsByClassName("contenedorPortafolio")[0]
	cuarto.style.display = "none"
    let quinto = document.getElementsByClassName("contenedorContacto")[0]
	quinto.style.display = "none"
}
//funcion de educacion
function competencias() {
	let principal = document.getElementsByClassName("contenedorCompetencias")[0]; //necesitamos colocar la posicion para que sepa cual class traer
	principal.style.display = "flex" //Cambia los estilos de css  
	let segundo = document.getElementsByClassName("contenedorEducacion")[0]
	segundo.style.display = "none"
	let tercero = document.getElementsByClassName("contenedorHome")[0]
	tercero.style.display = "none"
    let cuarto = document.getElementsByClassName("contenedorPortafolio")[0]
	cuarto.style.display = "none"
    let quinto = document.getElementsByClassName("contenedorContacto")[0]
	quinto.style.display = "none"
}
//funcion de educacion
function portafolio() {
	let principal = document.getElementsByClassName("contenedorPortafolio")[0]; //necesitamos colocar la posicion para que sepa cual class traer
	principal.style.display = "flex" //Cambia los estilos de css  
	let segundo = document.getElementsByClassName("contenedorCompetencias")[0]
	segundo.style.display = "none"
	let tercero = document.getElementsByClassName("contenedorEducacion")[0]
	tercero.style.display = "none"
    let cuarto = document.getElementsByClassName("contenedorHome")[0]
	cuarto.style.display = "none"
    let quinto = document.getElementsByClassName("contenedorContacto")[0]
	quinto.style.display = "none"
}
//funcion de educacion
function contacto() {
	let principal = document.getElementsByClassName("contenedorContacto")[0]; //necesitamos colocar la posicion para que sepa cual class traer
	principal.style.display = "flex" //Cambia los estilos de css  
	let segundo = document.getElementsByClassName("contenedorPortafolio")[0]
	segundo.style.display = "none"
	let tercero = document.getElementsByClassName("contenedorCompetencias")[0]
	tercero.style.display = "none"
    let cuarto = document.getElementsByClassName("contenedorEducacion")[0]
	cuarto.style.display = "none"
    let quinto = document.getElementsByClassName("contenedorHome")[0]
	quinto.style.display = "none"
}
