// Configuracion del acceso a Postgres

const { Pool } = require('pg') // Pool de peticiones al servidor

//Se establece la conexion a la base de datos de Postgres
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async(req, res) => {
    //res.send("Usuarios BD");
    const response = await pool.query('SELECT * FROM users');
    //console.log(response.rows); // Muestro el resultado por consola
    //res.send('Usuarios BD OK');
    //Mandar el resultado al navegador mediante JSON
    res.status(200).json(response.rows);
}

const getUserById = async(req, res) => {
    //res.send('User ID ' + req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE ID=$1', [req.params.id]);
    res.json(response.rows);

}

const createUser = async(req, res) => {
    //console.log(req.body);
    const { name, email } = req.body;
    // Otra forma de hacer la línea anterior
    // name = req.body.name;
    // email = req.body.email;

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: "Usuario agregado",
        body: {
            user: { name, email }
        }
    })
}

const updateUser = async(req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users set name=$1,email=$2 WHERE ID=$3', [name,
        email,
        id
    ]);
    console.log(response);
    res.json("Usuario Modificado");

}

const deleteUser = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE ID=$1', [id]);
    console.log(response);
    res.json('Usuario Eliminado');

}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}