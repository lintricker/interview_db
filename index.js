const express = require('express')
const categoryRouter = require('./routes/category.routes')
const typeRouter = require('./routes/type.routes')
const complexityRouter = require('./routes/complexity.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', categoryRouter)
app.use('/api', typeRouter)
app.use('/api', complexityRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))