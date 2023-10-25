const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/gruposController');

router.post('/', grupoController.crearGrupo);

module.exports = router;