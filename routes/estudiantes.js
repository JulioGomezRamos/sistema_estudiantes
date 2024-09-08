import { conectar } from "../models/db_conectar.js";
import { Router } from 'express';

const router = Router();

var crud_estudiante = {};

// Función para leer estudiantes
crud_estudiante.leer = (req, res) => {
    conectar.query('SELECT * FROM estudiantes;', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { estudiantes: results });
        }
    });
};

// Función para crear, actualizar y eliminar estudiantes
crud_estudiante.cud = (req, res) => {
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo = req.body.txt_correo;
    const sangre = req.body.txt_sangre;
    const fecha_nacimiento = req.body.txt_fn;

    if (btn_crear) {
        conectar.query('INSERT INTO estudiantes SET ?', { carne, nombres, apellidos, direccion, telefono, correo, sangre, fecha_nacimiento }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    } else if (btn_actualizar) {
        conectar.query('UPDATE estudiantes SET ? WHERE id_estudiante = ?', [{ carne, nombres, apellidos, direccion, telefono, correo, sangre, fecha_nacimiento }, id], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    } else if (btn_borrar) {
        conectar.query('DELETE FROM estudiantes WHERE id_estudiante = ?', [id], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        });
    }
};

// Ruta para leer estudiantes
router.get('/', crud_estudiante.leer);

// Ruta para crear, actualizar y eliminar estudiantes
router.post('/estudiantes/cud', crud_estudiante.cud);

export default router;
