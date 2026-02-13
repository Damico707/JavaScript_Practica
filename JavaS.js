let cargo = prompt ("Bienvenido, porfavor seleccione su cargo \n\n 1.Trainer \n 2.Coordinador")

if (cargo > 2 ) {
    console.log ("Ingrese un cargo valido porfavor")

}

switch (cargo) {
    case "1":
        console.log ("Bienvenido trainer");
    break;

    case"2"
}


// let info_Estudiantes = [
//     {
//         id: 111,
//         nombre: "Ana",
//         apellidos: "Ramirez Suarez",
//         direccion: "Cll 1 #11-11",
//         acudiente: "Patricia Suarez",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Graduado",
//         riesgo: "N/A"
//     },

//     {
//         id: 222,
//         nombre: "Emilio",
//         apellidos: "Calderon Moreno",
//         direccion: "Cll 2 #22-22",
//         acudiente: "Juan Calderon",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Inscrito",
//         riesgo: "N/A"
//     },

//     {
//         id: 333,
//         nombre: "Laura Tatiana",
//         apellidos: "Ramirez Suarez",
//         direccion: "Cll 3 #33-33",
//         acudiente: "Emilia Suarez",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "En proceso",
//         riesgo: "N/A"
//     },

//     {
//         id: 444,
//         nombre: "Sofia Alejandra",
//         apellidos: "Moreno Camacho",
//         direccion: "Cll 4 #44-44",
//         acudiente: "Heidi Camacho",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Cursando",
//         riesgo: "N/A"
//     },

//     {
//         id: 555,
//         nombre: "Juan David",
//         apellidos: "Parra Chacon",
//         direccion: "Cll 5 #55-55",
//         acudiente: "Maria Chacon",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Cursando",
//         riesgo: "N/A"
//     },

//     {
//         id: 666,
//         nombre: "Juan jose",
//         apellidos: "Silva Riaño",
//         direccion: "Cll 6 #66-66",
//         acudiente: "Monica Riaño",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Cursando",
//         riesgo: "N/A"
//     },

//     {
//         id: 777,
//         nombre: "Andrea",
//         apellidos: "Romero Calderon",
//         direccion: "Cll 7 #77-77",
//         acudiente: "Mamá Romero",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Aprobado",
//         riesgo: "N/A"
//     },

//     {
//         id: 888,
//         nombre: "Monica Tatiana",
//         apellidos: "Romero Calderon",
//         direccion: "Cll 8 #88-88",
//         acudiente: "Mamá Romero",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Aprobado",
//         riesgo: "N/A"
//     },

//     {
//         id: 999,
//         nombre: "Rafael",
//         apellidos: "Romero Calderon",
//         direccion: "Cll 2 #11-22",
//         acudiente: "Mamá Romero",
//         telefonoCelular: 12345,
//         telefonoFijo: 54321,
//         estado: "Expulsado",
//         riesgo: "N/A"
//     }
// ];

// // Guardar en localStorage
// localStorage.setItem("estudiantes", JSON.stringify(info_Estudiantes));

// // Recuperar datos
// let restore = JSON.parse(localStorage.getItem("estudiantes"));

// // Mostrar en consola  
// console.log(restore);

// function mostrarEstudiantes() {
//     if (estudiantes.length === 0) {
//         console.log("No hay estudiantes en el directorio.");
//         return;
//     }
//     console.log("📋 Lista de estudiantes:");
//     estudiantes.forEach((est, index) => {
//         console.log(`${index + 1}. ${est.nombre} ${est.apellidos} - Estado: ${est.estado}`);
//     });
// }