const express = require("express")

const userRouter = require("./users/user-router")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use("/api", userRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong. Please try again later."
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})