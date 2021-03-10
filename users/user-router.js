const express = require("express")
const Users = require("./user-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.get("/users", async (req, res, next) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        const { username, password, department } = req.body
        const user = await Users.findBy({ username }).first()

        if (user) {
            return res.status(409).json({
                message: "Username is already taken",
            })
        }

        const newUser = await Users.add({
            username,
            password: await bcrypt.hash(password, 14),
            department
        })

        res.status(201).json(newUser)
    } catch (err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        res.json({
            message: "This is the login endpoint"
        })
    } catch (err) {
        next(err)
    }
})

router.get("/logout", async (req, res, next) => {
    try {
        res.json({
            message: "This is the logout endpoint"
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router