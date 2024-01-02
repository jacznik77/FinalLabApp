"use strict";

const express = require("express");
const noticiasController = require("../controllers/noticias_controller");
const router = express.Router();
const {
    getNoticia,
    getNoticiasDelDia,
    getNoticias,
    addNoticia,
    updateNoticia,
    deleteNoticia,
    getCantidadNoticias
} = noticiasController;

/* Métodos GET */
router.get('/total/', getCantidadNoticias);
router.get('/:id', getNoticia);
router.get('/dia/:dia', getNoticiasDelDia);
router.get('/', getNoticias);

/* Métodos POST */
router.post('/', addNoticia);

/* Métodos PUT */
router.put('/:id', updateNoticia);

/* Métodos DELETE */
router.delete('/:id', deleteNoticia);

module.exports = router;