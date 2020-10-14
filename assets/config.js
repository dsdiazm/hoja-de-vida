'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Darwin Smith Diaz Martinez",
	profesion: "Desarrollador de software Junior",
	correo: "darwindiaz.rtg@gmail.com",
	telefono: "+57 3102496517",
	perfil: "Auditor ISO 17020, ISO 17024, Inspector de redes de gas combustible, actitud de liderazgo y solucion de problemas con alto nivel de presion",
	habilidades: {
		comunicativas:[`comunicacion acertiva, `,'manejo de plataformas multimedia y ', 'manejo de herramientas asincronicas'],
		gestion: ['Liderazgo, ','Evaluación de Proyectos, ','Responsabilidad, ','Estrategias de Gestión, ','Análisis para toma de Decisiones'],
		tecnicas: ['Análisis de datos, ','Python (WEB / ETL), ','FullStack MEAN, ','Javascript, ','Bases de Datos SQL, ','MySQL - PlSQL, ', 'MongoDB - NoSQL', 'Office']
	},
	hobbies: ['Escuchar Música, ', 'Tocar Guitarra, ', 'desarrollo de simuladores en 3D,', 'componer canciones,', 'Escribir poesia y ', 'realizar testing hacking']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://pixabay.com/get/51e8d0444e50b108feda8460da29317e1739dae25a5979_1920.jpg";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}