const db = require('../db')

class QuestionController {
    async createQuestion(req, res) {
        const {title, answer, category_id, type_id, complexity_id} = req.body
        const newQuestion = await db.query(`INSERT INTO question (title, answer, category_id, type_id, complexity_id) values ($1, $2, $3, $4, $5) RETURNING *`, [title, answer, category_id, type_id, complexity_id])
        res.json(newQuestion.rows[0])
    }
    async getQuestions(req, res) {
        const questions = await db.query('SELECT * FROM question')
        res.json(questions.rows)
    }
    async getOneQuestion(req, res) {
        const id = req.params.id
        const question = await db.query('SELECT * FROM question where id = $1', [id])
        res.json(question.rows[0])
    }  
    async getCategoryQuestions(req, res) {
        const category = req.query
        const question = await db.query('SELECT * FROM question where category_id = $1', [category])
        res.json(question.rows)
    }  
    async updateQuestion(req, res) {
        const {id, title, answer, category_id, type_id, complexity_id} = req.body
        const question = await db.query('UPDATE question set title = $1, answer = $2, category_id = $3, type_id = $4, complexity_id = $5 where id = $6 RETURNING *',
        [title, answer, category_id, type_id, complexity_id, id]
        )
        res.json(question.rows[0])
    }
    async deleteQuestion(req, res) {
        const id = req.params.id
        const question = await db.query('DELETE FROM question where id = $1', [id])
        res.json(question.rows[0])
    }
}

module.exports = new QuestionController()