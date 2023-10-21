const db = require('../db')

class CategoryController {
    async createCategory(req, res) {
        const {title} = req.body
        const newCategory = await db.query('INSERT INTO category (title) values ($1) RETURNING *', [title])
        res.json(newCategory.rows[0])
    }
    async getCategories(req, res) {
        const categories = await db.query('SELECT * FROM category')
        res.json(categories.rows)
    }
    async getOneCategory(req, res) {
        const id = req.params.id
        const category = await db.query('SELECT * FROM category where id = $1', [id])
        res.json(category.rows[0])
    }
    async updateCategory(req, res) {
        const {id, title} = req.body
        const category = await db.query('UPDATE category set title = $1 where id = $2 RETURNING *',
        [title, id]
        )
        res.json(category.rows[0])
    }
    async deleteCategory(req, res) {
        const id = req.params.id
        const category = await db.query('DELETE FROM category where id = $1', [id])
        res.json(category.rows[0])
    }
}

module.exports = new CategoryController()