const db = require('../db')

class ComplexityController {
    async createComplexity(req, res) {
        const {title} = req.body
        const newComplexity = await db.query(`INSERT INTO complexity (title) values ($1) RETURNING *`, [title])
        res.json(newComplexity.rows[0])
    }
    async getComplexities(req, res) {
        const complexities = await db.query('SELECT * FROM complexity')
        res.json(complexities.rows)
    }
    async getOneComplexity(req, res) {
        const id = req.params.id
        const complexity = await db.query('SELECT * FROM complexity where id = $1', [id])
        res.json(complexity.rows[0])
    }
    async updateComplexity(req, res) {
        const {id, title} = req.body
        const complexity = await db.query('UPDATE complexity set title = $1 where id = $2 RETURNING *',
        [title, id]
        )
        res.json(complexity.rows[0])
    }
    async deleteComplexity(req, res) {
        const id = req.params.id
        const complexity = await db.query('DELETE FROM complexity where id = $1', [id])
        res.json(complexity.rows[0])
    }
}

module.exports = new ComplexityController()