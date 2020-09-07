const express = require("express")

const router = express.Router()

router.get("/users", async (req, res, next) => {
    try {
        res.json({
            message: "This is the get-users endpoint"
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router