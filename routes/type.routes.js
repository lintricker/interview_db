const Router = require('express')
const router = new Router()
const typeController = require('../controller/type.controller')

router.post('/type', typeController.createType)
router.get('/type', typeController.getTypes)
router.get('/type/:id', typeController.getOneType)
router.put('/type', typeController.updateType)
router.delete('/type/:id', typeController.deleteType)


module.exports = router