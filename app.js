
const express = require('express');
const app = express();
const cnx = require('./cnx');
const weatherApi = require('./weatherApi');
const sql = require('mssql');

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Handling GET request
app.get('/', (req, res) => {
    res.send('Mariana running on this server')
    res.end()
})


// Método para obtener lista de ciudades.
// Se deja fija la cantidad de ciudades debido a que el json de openweathermap contiene millones de registros.
app.get('/getcities', (req, res) => {

    // const sql = require('mssql')

    // sql.on('error', err => {
    //     console.log(err);
    // })
    
    // sql.connect(cnx).then(pool => {
    //     // Query
        
    //     return pool.request()
    //         .query('select * from Cities')
    // }).then(result => {
    //     console.dir(result)
    // }).catch(err => {
    //   console.log(err);
    // });

    res.set('Access-Control-Allow-Origin', '*');

    res.json({
        cities: [{ id: 3435907, description: 'Buenos Aires' },
        { id: 3844419, description: 'Mendoza' },
        { id: 3433955, description: 'Ciudad Autonoma de Buenos Aires' },
        { id: 3838583, description: 'Rosario' }]
    })
    res.end()
})

// Método para obtener tiempo para una ciudad.
app.get('/getweather/:city/:history', (req, res) => {
    let city = req.params.city;
    let history = req.params.history;

    let url = weatherApi.rootUrl + "weather?id=" +  city + "&appid=" + weatherApi.apiKey +"&units="+ weatherApi.units;
    const fetch = require("node-fetch");

    fetch(url)
        .then((response) => response.json())
        .then(function(data){res.json({
                timestamp: data.dt,
                city: { id: data.id, description: data.name },
                temperature: data.main.temp,
                fellsLike: data.main.feels_like,
                history: []
            });
            res.end();
        })
        .catch((err) => console.log(err));

})

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));