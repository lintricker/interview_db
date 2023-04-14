const express = require('express')
const categoryRouter = require('./routes/category.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('api', categoryRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))