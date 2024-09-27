const users = require("../models/users")

module.exports = {
    // POST /auth/register
    register: (req,res) => {
        const { name, email, password } = req.body
        if(typeof name !=='string' || typeof email !=='string' || typeof password !=='string') {
            return res.status(400).json({message:'Todos os campos são obrigatórios!'})
        }

        const existingUser = users.getUserByEmail(email)
        if(existingUser) return res.status(400).json({message:'E-mail já cadastrado'})

        const newUser = users.createUser(name, email, password)
        res.status(201).json(newUser)
    }
    // POST /auth/login
}