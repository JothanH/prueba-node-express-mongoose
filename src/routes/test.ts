import { Router, Request, Response } from "express";
import { Test } from "../models/test.model";


const testRoutes = Router();

//Nota: usar Type casting para las rutas Sección 33 video 510 del curso de NOdejs


testRoutes.post('/datos', (req: Request, res: Response) => {

    const test = {
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        activo: req.body.activo
    }

    Test.create(test).then(testDb => {

        res.json({
            ok: true,
            test: testDb
        });

    }).catch(err => {

        res.json({
            ok: false,
            error: err
        });
    });
});

testRoutes.get('/datos', (req: Request, res: Response) => {

    Test.find().then(datos => {

        res.json({
            ok: true,
            mensaje: 'datos traídos con éxito',
            datos: datos
        });
    });

});

testRoutes.get('/holaNodemon', (req: Request, res: Response) => {

    res.json({
        ok: true,
        message: 'Hola con nodemon'
    });

})

testRoutes.put('/datos', (req: Request, res: Response) => {

    const test = {
        id: req.body.id,
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        activo: req.body.activo
    }

    Test.findByIdAndUpdate({ _id: test.id }, {
        nombre: test.nombre,
        cantidad: test.cantidad,
        activo: test.activo
    }).then(answ => {
        res.json({
            ok: true,
            mensaje: 'datos actualizados con éxito'
        });
    }).catch(err => {

        res.json({
            ok: false,
            error: err
        });
    });
});

testRoutes.delete('/datos/:id', (req: Request, res: Response) => {


    const id = req.params.id;


    Test.findByIdAndDelete(id).then(answ => {

        res.json({
            ok: true,
            mensaje: 'datos borrados con éxito'
        });
    }).catch(err => {
        res.json({
            ok: false,
            error: err
        });
    });

});



export default testRoutes;
