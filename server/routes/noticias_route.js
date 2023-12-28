"use strict";

const express = require("express");
const noticiasController = require("../controllers/noticias_controller");
const router = express.Router();

router.get('/:id', noticiasController.getNoticia);
router.get('/dia/:dia', noticiasController.getNoticiasDelDia);
router.get('/', noticiasController.getNoticias);
router.post('/', noticiasController.addNoticia);
router.put('/:id', noticiasController.updateNoticia);
router.delete('/:id', noticiasController.deleteNoticia);
module.exports = router;