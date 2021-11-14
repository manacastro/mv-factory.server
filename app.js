
// Requiring module
const express = require('express');

// Creating express object
const app = express();

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
    res.send('Mariana '
        + 'running on this server')
    res.end()
})

// Método para obtener lista de ciudades.
// Se deja fija la cantidad de ciudades debido a que el json de openweathermap contiene millones de registros.
app.get('/getcities', (req, res) => {
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
    console.log(city + " - " + history)
    switch (city) {
        case '1':
            res.json({
                timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                city: { id: 1, description: 'Buenos Aires' },
                temperature: 56,
                fellsLike: 45,
                history: [{
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }, {
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }, {
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }]
            });
            res.end();

            break;
        case '2':
            res.json({
                timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                city: { id: 2, description: 'Cordoba' },
                temperature: 34,
                fellsLike: 87,
                history: [{
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }, {
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }, {
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }]
            });
            res.end();
            break;
        case '3':
            res.json({
                timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                city: { id: 3, description: 'Rosario' },
                temperature: 4,
                fellsLike: 8,
                history: [{
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }, {
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }, {
                    timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                    city: { id: 1, description: 'Buenos Aires', country:'Argentina' },
                    temperature: 56,
                    fellsLike: 45
                }]
            });
            res.end();
            break;

        default:
            res.json({
                timestamp: 'sábado, 13 de noviembre de 2021 21:28:20 GMT-03:00',
                city: { id: -1, description: 'None' },
                temperature: -1,
                fellsLike: -1,
                historySaved: false
            });
            res.end();
            break;
    }
})

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));