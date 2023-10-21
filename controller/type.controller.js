const db = require('../db')

class TypeController {
    async createType(req, res) {
        const {title} = req.body
        const newType = await db.query(`INSERT INTO question_type (title) values ($1) RETURNING *`, [title])
        res.json(newType.rows[0])
    }
    async getTypes(req, res) {
        const types = await db.query('SELECT * FROM question_type')
        res.json(types.rows)
    }
    async getOneType(req, res) {
        const id = req.params.id
        const type = await db.query('SELECT * FROM question_type where id = $1', [id])
        res.json(type.rows[0])
    }
    async updateType(req, res) {
        const {id, title} = req.body
        const type = await db.query('UPDATE question_type set title = $1 where id = $2 RETURNING *',
        [title, id]
        )
        res.json(type.rows[0])
    }
    async deleteType(req, res) {
        const id = req.params.id
        const type = await db.query('DELETE FROM question_type where id = $1', [id])
        res.json(type.rows[0])
    }
}

module.exports = new TypeController()