import Server from "./classes/server";
import testRoutes from "./routes/test";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from 'express';
import colors from "colors";


const server = new Server();
colors.enable();

//Body parser
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

//Rutas de la app
server.app.use('/test', testRoutes);

//Conexión  de Base de datos
const URI = 'mongodb://localhost:27017/sennova-test';

let options: mongoose.ConnectOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

mongoose.connect(URI, options, (err) => {

    if (err) {
        console.log("\n");
        console.log("****************************".bgRed);
        console.log("Mongo no se pudo conectar".red);
        console.log("****************************".bgRed);
        console.log("\n");
        console.log(err);

        throw err;
    }
    console.log("\n");
    console.log("*****************************".bgGreen);
    console.log("Mongo conectado correctamente".italic.green);
    console.log("*****************************".bgGreen);
    console.log("\n");
});


//Levantar express
server.start(() => {
    console.log("\n");
    console.log(`Servidor corriendo el puerto ${server.port}`.italic.grey);

});
