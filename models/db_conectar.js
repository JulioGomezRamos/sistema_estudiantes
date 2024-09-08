import mysql from 'mysql';

var conectar = mysql.createConnection({
    host     : 'localhost',
    user     : 'jgomez',
    password : '3278', 
    database : 'db_estudiantes'
});

conectar.connect(function(err) {
    if (err) {
        console.error('Error en la conexión: ' + err.stack);
        return;
    }
    console.log('Conexión exitosa ID: ' + conectar.threadId);
});

export { conectar };
