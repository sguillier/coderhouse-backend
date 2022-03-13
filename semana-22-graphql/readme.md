# Comentario

Solo la api de productos esta hecha con graphql en la ruta `/api/productos/graphql`

Testear los requerimientos en `/api/productos/graphql/graphiql`

Con los siguientes querys 


` query{ getProductoIdControler(id:8){`
`     nombre`
`   	precio`
`   	url`
`   }`
` }`


` query{ getProductosControler{`
`   	id`
`   	nombre`
`   	precio`
`   	url`
` 	}`
` }`


` mutation{`
`   postProductoControler(`
`     nuevoProducto:{`
`       nombre:"compu",`
`       precio:6990,`
`       url:"ninguna"`
`     },`
`     admin:true`
`   )  `
` }`


` mutation{`
`   putProductoIdControler(`
`     id:12, `
`     productoEditado:{`
`       nombre:"nuevo nombre",`
`       precio:552,`
`       url:"ninguna"`
`     },`
`     admin:true`
`   )`
` }`


` mutation{`
`   deleteProductoIdControler(id:10, admin:true)`
` }`


Los nombres de las funciones no son tan intuitivos pero se mantuvieron para respetar la consistencia con los otros endpoints.

