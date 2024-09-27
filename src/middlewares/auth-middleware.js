const jwt = require("jsonwebtoken")
const users = require("../models/users")

module.exports = {
    ensureAuth: (req,res,next) => {
        const authHeader = req.headers.authorization

        if(!authHeader) return res.status(401).json({message:'Não autorizado!'})

        const token = authHeader.split(' ')[1]

        try {
            const { id } = jwt.verify(token, process.env.JWT_KEY)
            const user = users.getUserById(id)
            if (!user) return res.status(404).json({message:'Usuário não encontrado!'})
            req.user = user
            next()

        } catch (error) {
            return res.status(401).json({message:'Token inválido!'})
        }
    }
}