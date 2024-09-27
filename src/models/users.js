const uuid = require('uuid').v4 //versao baseada em valores aleatorios
const bcrypt = require('bcrypt')

const users = [
    { id: '1', name: 'Isaac Pontes', email: 'isaac@gmail.com', password: '123456'},
    { id: '2', name: 'John Doe', email: 'john@gmail.com', password: '456789'}
]

module.exports = {
    // obter todos os usuários
    getAllUsers: () => users,
    // obter usuario pelo id
    getUserById: (id) => users.find(user => user.id === id),
    // obter usuario pelo email
    getUserByEmail: (email) => users.find(user => user.email === email),
    // criar usuario
    createUser: (name, email, password) => {
        const newUser = {
            id: uuid(),
            name,
            email,
            password: bcrypt.hashSync(password,10)
        }
        users.push(newUser)
        return newUser
    }
}