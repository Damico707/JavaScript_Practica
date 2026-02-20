

let info_estudiantes = [
    {
        id: "111",
        nombre: "Ana",
        apellidos: "Ramirez Suarez",
        direccion: "Cll 1 #11-11",
        acudiente: "Patricia Suarez",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Graduado",
        riesgo: "N/A"
    },

    {
        id: "222",
        nombre: "Emilio",
        apellidos: "Calderon Moreno",
        direccion: "Cll 2 #22-22",
        acudiente: "Juan Calderon",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Inscrito",
        riesgo: "N/A"
    },
    {
        id: "333",
        nombre: "Laura Tatiana",
        apellidos: "Ramirez Suarez",
        direccion: "Cll 3 #33-33",
        acudiente: "Emilia Suarez",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "En proceso",
        riesgo: "N/A"
    },
    {
        id: "444",
        nombre: "Sofia Alejandra",
        apellidos: "Moreno Camacho",
        direccion: "Cll 4 #44-44",
        acudiente: "Heidi Camacho",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Cursando",
        riesgo: "N/A"
    },
    {
        id: "555",
        nombre: "Juan David",
        apellidos: "Parra Chacon",
        direccion: "Cll 5 #55-55",
        acudiente: "Maria Chacon",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Cursando",
        riesgo: "N/A"
    },
    {
        id: "666",
        nombre: "Juan jose",
        apellidos: "Silva Riaño",
        direccion: "Cll 6 #66-66",
        acudiente: "Monica Riaño",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Cursando",
        riesgo: "N/A"
    },
    {
        id: "777",
        nombre: "Andrea",
        apellidos: "Romero Calderon",
        direccion: "Cll 7 #77-77",
        acudiente: "Mamá Romero",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Aprobado",
        riesgo: "N/A"
    },
    {
        id: "888",
        nombre: "Monica Tatiana",
        apellidos: "Romero Calderon",
        direccion: "Cll 8 #88-88",
        acudiente: "Mamá Romero",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Aprobado",
        riesgo: "N/A"
    },
    {
        id: "999",
        nombre: "Rafael",
        apellidos: "Romero Calderon",
        direccion: "Cll 2 #11-22",
        acudiente: "Mamá Romero",
        telefonoCelular: 12345,
        telefonoFijo: 54321,
        estado: "Expulsado",
        riesgo: "N/A"
    }
];

let notas_estudiantes = [
    {
        id: "111",
        nombre: "Ana Sofia Acevedo Hurtado",
        Python: "78",
        Java: "89",
        Git: "80"
    },
    {
        id: "222",
        nombre: "Emilio Gaviria Tornedo",
        Python: "85",
        Java: "90",
        Git: "88"
    },
    {
        id: "333",
        nombre: "Laura Tatiana Villamizar Ojeda",
        Python: "92",
        Java: "87",
        Git: "91"
    },
    {
        id: "444",
        nombre: "Sofia Alejandra Moreno Camacho",
        Python: "70",
        Java: "75",
        Git: "72"
    },
    {
        id: "555",
        nombre: "Juan David Parra Chachon",
        Python: "88",
        Java: "84",
        Git: "86"
    },
    {
        id: "666",
        nombre: "Juan jose Silva Riaño",
        Python: "60",
        Java: "65",
        Git: "63"
    },
    {
        id: "777",
        nombre: "Andrea Camila Romero Calderon",
        Python: "95",
        Java: "93",
        Git: "97"
    },
    {
        id: "888",
        nombre: "Monica Tatiana Romero Calderon",
        Python: "89",
        Java: "90",
        Git: "92"
    },
    {
        id: "999",
        nombre: "Rafael Romero Calderon",
        Python: "40",
        Java: "50",
        Git: "45"
    }
];
let cargo = prompt ("Bienvenido, seleccione su cargo \n\n 1. Camper \n 2. Trainer \n 3. Coordinador \n 0. Salir del programa")

    switch (cargo) {
        
        case "1":
            while (cargo !=="0"){
            cargo = prompt ("Bienvenido, seleccione su cargo \n\n 1. Camper \n 2. Trainer \n 3. Coordinador \n 0. Salir del programa")

            console.log ("Bienvenido camper");   
                let identificacion = prompt ("Porfavor ingrese su ID para ver sus notas");
                let camper = notas_estudiantes.find(e => e.id === identificacion); 
                while ( camper === undefined ){
                    identificacion = prompt ("Id no valido, Intente nuevamente");
                    camper = notas_estudiantes.find(e => e.id === identificacion);
                }
                alert ("Bienvenid@  " + camper.nombre)
                console.table (camper)
            }
        break;

        case"2":
            console.log("Bienvenido trainer");
            let trainer= "trainer"
        break;

        case"3":
            console.log("Bienvenido Coordinador");
            let coordinador= "coordinador"
            break;

            default:
                console.log ("Ingrese un cargo valido")
        case"0":
            alert("saliendo...");
            break;
break
    }