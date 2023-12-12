//Importar rutas de express
const {Router} = require('express')


//Instanciar routes
const router = Router()

const {renderIndex, renderLogin} = require('../controllers/index.controllers.js')


router.get('/',renderIndex)
router.get('/login',renderLogin)


module.exports = router