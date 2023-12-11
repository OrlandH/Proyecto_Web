const express = require('express')
const path = require('path');

//Importar Handlebars
const { engine }  = require('express-handlebars')

// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))

//Establecer path o ruta de la carpeta views
app.set('views',path.join(__dirname, 'views'))
//Establecer las configuracioness extra
app.engine('.hbs',engine({
    //Establecer el master page
    defaultLayout:'main',
    //Establecer el path de la carpeta layouts
    layoutsDir: path.join(app.get('views'),'layouts'),
    //Establecer el path de la carpeta partials
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
//Establecer el motor de plantillas
app.set('view engine','.hbs')


// Middlewares 
app.use(express.urlencoded({extended:false}))


// Variables globales

// Rutas 
app.use(require('./routers/index.routes.js'))

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))

//Exporar la variable app
module.exports = app