const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// definimos carpetas con nestros archivos estáticos
app.use(express.static('static'));
app.use(express.static('assets'));
app.use(express.static('node_modules/bootstrap/dist'))

// configuramos el motor de templates (nunjucks)
nunjucks.configure('views', {
    express: app,
    autoescape: true,
    watch:true
});



// array imagenes de frutas
const frutas = [
    {
        nombre: 'banana',
        url:'banana.png'
    }, 
    {
        nombre: 'cebollas',
        url:'cebollas.png'
    },
    { 
        nombre: 'lechuga',
        url:'lechuga.png'
    },
    { 
        nombre: 'papas',
        url:'papas.png'
    },
    { 
        nombre: 'pimenton',
        url:'pimenton.png'
    },
    { 
        nombre: 'tomate',
        url:'tomate.png'
    }]



    app.get('/', async (req, res) => {
        res.render('index.html', {frutas})
    })
    
    app.listen(3000, () => console.log('Servidor en puerto 3000'))
    
