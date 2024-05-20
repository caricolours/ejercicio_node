const {leer, eliminar, registrar} = require('./operaciones.js')

const [accion, id, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)


if(accion === 'registrar'){
    registrar(id, nombre, edad, tipo, color, enfermedad)
}

if(accion === 'leer'){
    leer()
}

if(accion === 'eliminar'){
    eliminar('citas.json')
}