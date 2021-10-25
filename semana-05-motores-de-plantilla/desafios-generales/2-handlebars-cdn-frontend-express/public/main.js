
const render = async () => {
    // const plantilla = `
    // <h1>Datos Personales</h1>
    // <ul>
    //     <li>{{nombre}}</li>
    //     <li>{{apellido}}</li>
    //     <li>{{edad}}</li>
    //     <li>{{email}}</li>
    //     <li>{{telefono}}</li>
    // </ul>
    // `

    const txt = await fetch('./plantilla.txt')
    const plantilla = await txt.text()
    
    const template = Handlebars.compile(plantilla); // compila la plantilla

    const data = {
        nombre: 'Seba',
        apellido: 'Guillier',
        edad: '39',
        email: 'sebastian@correo.com',
        telefono: '123456789'
    }

    const html = template(data); // genera el html
    document.querySelector('span').innerHTML = html; // inyecta el resultado en la vista
}
render()