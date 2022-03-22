import { Sequelize } from "sequelize";

const db = new Sequelize('prueba', 'root','scaniakbg578',{
    host: 'localhost',
    dialect:'mysql',
    port:3306,
    // logging:false
});


export default db;