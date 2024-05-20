const fs = require('fs')

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    console.log(citas)
}


const registrar = (nombre, edad, tipo, color, enfermedad) => {

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    const id = Math.floor(Math.random() *100). toString()
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log('Ingresa todos los datos')
        return
    }
    citas.push({id, nombre, edad, tipo, color, enfermedad})
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log(citas)

}

//Borrar todo 

const eliminar = () => {
fs.writeFileSync('citas.json', '[]')
}


module.exports = {registrar, leer, eliminar}