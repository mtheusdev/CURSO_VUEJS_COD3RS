const bcrypt = require("bcrypt-nodejs")

module.exports = app =>{
    const { existisOrError, noExistisOrError, equalsOrError} = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) =>{
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        try{
            existisOrError(user.name, 'Nome não informado')
            existisOrError(user.email, 'E-mail não informado')
            existisOrError(user.password, 'Senha não informado')
            existisOrError(user.confirmPassword, 'Confirmação de senha invalida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')
            
            const userFromDB = await app.db('users').where({email: user.email}).first()

            if(!user.id){
                noExistisOrError(userFromDB, 'Usuário já cadastrado')
            }
            
        }catch(msg){
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id){
            app.db('users')
            .update(user)
            .where({id: user.id})
            .then( () => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }else{
            app.db('users')
            .insert(user)
            .then( () => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
        .select('id', 'name','email','admin')
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        if(req.params.id) {
            const id = req.params.id
            app.db('users')
            .select('id', 'name','email','admin')
            .where({id: id})
            .first()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
        } 
        else{
            return res.status(400).send('Id faltando')
        }
    }

    return {save, get, getById}
}