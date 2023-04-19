const Router = require('express')
const router = new Router()
const questionController = require('../controller/question.controller')

router.post('/question', questionController.createQuestion)
router.get('/question', questionController.getQuestions)
router.get('/question/:id', questionController.getOneQuestion)
//router.get('/question/', questionController.getCategoryQuestions)
router.put('/question', questionController.updateQuestion)
router.delete('/question/:id', questionController.deleteQuestion)


module.exports = router