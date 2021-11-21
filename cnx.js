const cnx = {
    user:'sa',
    password:'Mica1702',
    server:"localhost\\SQLMANA",
    database:'Weather',
    port: 62458,
    requestTimeout: 300000,
    option:{
        trustedconnection: true,
        enableArithAbort: true,
        encrypt: false
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

module.exports = cnx;