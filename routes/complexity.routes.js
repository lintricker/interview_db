const Router = require('express')
const router = new Router()
const complexityController = require('../controller/complexity.controller')

router.post('/complexity', complexityController.createComplexity)
router.get('/complexity', complexityController.getComplexities)
router.get('/complexity/:id', complexityController.getOneComplexity)
router.put('/complexity', complexityController.updateComplexity)
router.delete('/complexity/:id', complexityController.deleteComplexity)


module.exports = router