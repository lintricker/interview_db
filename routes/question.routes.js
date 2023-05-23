const Router = require('express')
const router = new Router()
const questionController = require('../controller/question.controller')

router.post('/question', questionController.createQuestion)
router.get('/question', questionController.getQuestions)
router.get('/question/:id', questionController.getOneQuestion)
router.put('/question', questionController.updateQuestion)
router.delete('/question/:id', questionController.deleteQuestion)
router.get('/question/fil', questionController.getCategoryQuestions)

module.exports = router