class CategoryController {
    async createCategory(req, res) {
        const {title} = req.body
        console.log(title)
        res.json('ok')
    }
    async getCategories(req, res) {

    }
    async getOneCategory(req, res) {

    }
    async updateCategory(req, res) {

    }
    async deleteCategory(req, res) {

    }
}

module.exports = new CategoryController()