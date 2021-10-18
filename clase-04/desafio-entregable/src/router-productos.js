
const { Router } = require('express');
const routerProductos = Router();
let arrayProductos = [];


routerProductos.get('/', (req, res) => {
    res.json(arrayProductos);
});


routerProductos.post('/', (req, res) => {
    // Recojemos nuevo objeto
    const nuevoProducto = req.body
    
    // Definimos nuevo Id y lo incluimos al objeto recibido
    const Ids = arrayProductos.map(e => e.id)
    const nuevoId = Math.max(...Ids, 0) + 1
    nuevoProducto['id'] = nuevoId

    // Incluimos el nuevo producto en array
    arrayProductos.push(nuevoProducto)
    
    //Devolvemos nuevo producto con nuevo id
    res.json(nuevoProducto);
});



routerProductos.put('/:num', (req, res) => {
    // Recojemos valores
    const num = parseInt(req.params.num)
    const nuevoProducto = {...req.body,id:num}
    
    if(arrayProductos.find(p => p.id===num)){
        // Reemplazamos el producto editado
        arrayProductos = arrayProductos.map( p => p.id==num?nuevoProducto:p )
        
        //Devolvemos producto editado
        res.json(nuevoProducto);
    }else{
        res.json({error:'Producto No Encontrado'});
    }

});


routerProductos.delete('/:num', (req, res) => {
    // Recojemos valores
    const num = parseInt(req.params.num)

    if(arrayProductos.find(p => p.id===num)){
        // Eliminamos el producto editado
        arrayProductos = arrayProductos.filter( p => p.id!==num )
    
        //Msg de exito
        res.json(`Producto id:${num} eliminado con exito`);
    }else{
        res.json({error:'Producto No Encontrado'});
    }
});


module.exports = routerProductos;


