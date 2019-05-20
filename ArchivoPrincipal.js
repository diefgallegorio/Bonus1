const {cursos} = require('./objetos');
const fs = require('fs');
const {opciones, argv} = require ('./cliente');


//Funcion para listar los cursos con el setTimeOut
function pasarArray(i){
    setTimeout(function(){
        descripcion = `Nombre del curso: ${cursos[i].nombreCurso} \nEl ID del curso es: ( ${cursos[i].idCurso} ) \nIntensidad horaria de ${cursos[i].duracionCurso} horas en total. \nInversion: ${cursos[i].valorCurso}\n<======================================>`
        console.log(descripcion);
    },2000*i);
}
function listarCursos(){
    for (let i = 0; i < cursos.length; i++) {
        pasarArray(i);
    }
}



if(typeof(argv.i) == 'undefined'){
    //Si no han ingresado nada en argv
    listarCursos();
}else{
    //Si ingresaron algo en argv, se busca
    let informacionCurso = cursos.find(function(infoCurso){
        return infoCurso.idCurso == argv.i})
    if(typeof(informacionCurso) == 'undefined'){
        console.log('<===============================================> \n No se ha encontrado el ID del curso que digitó, intentelo de nuevo\n<===============================================>')
        listarCursos();
    }else{
        
        texto = 'Nombre: ' + argv.n + '\n' + 
                'Cedula: ' + argv.c + '\n' +
                'ID curso: ' + argv.i + '\n' + 
                'Nombre del curso: ' + informacionCurso.nombreCurso + '\n' +
                'Intensidad horaria de: ' + informacionCurso.duracionCurso + ' horas \n' +
                'Invesión: ' + informacionCurso.valorCurso;
        fs.writeFile('informacion.txt', texto, (err) =>{
            if (err) throw (err);
        console.log('\n\n\nEl usuario (' + argv.n + ') \nIdenficado con cedula (' + argv.c + '), \nSe ha inscrito en el curso (' + informacionCurso.nombreCurso + ')\nIntensidad total de ' + informacionCurso.duracionCurso + ' horas\nInversión total de $' + informacionCurso.valorCurso + '\n');
        console.log('¡¡Se ha creado el archivo!!');

        })   
    }
}


