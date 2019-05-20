const opciones = {
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    },
    id:{
        demand: true,
        alias: 'i'
    }
}



const argv = require('yargs')
            .command('inscribir','Inscribirme en un curso', opciones)
            .argv

module.exports={
    opciones,
    argv
}
