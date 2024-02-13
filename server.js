const express =require('express')
const app =express()
const authorRouter =require('./routes/authors')
const blogRouter = require('./routes/blog')

app.use(express.json()) 

app.use('/api/authors',authorRouter)
app.use('/api/blog',blogRouter)


app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})
