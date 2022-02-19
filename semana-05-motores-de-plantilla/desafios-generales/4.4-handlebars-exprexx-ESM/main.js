// ESTO SOLO ES UNA NOTA
// DESARROLLO MUY INCONCLUSO
// COMPAÑERO EXPLICA COMO USAR HANDLEBARS CON EXPRESS COMO MODULO
// MEZCLAR ESTO CON EL EJEMPLO DE HANDLEBARS-EXPRESS ANTERIOR


import handlebars from 'express-handlebars'

app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'default',
    layoutDir: "/views/layouts",
  }))
  
  app.set('view engine', 'hbs');
  app.set('views', path.join(process.cwd(), 'public/views'));
  