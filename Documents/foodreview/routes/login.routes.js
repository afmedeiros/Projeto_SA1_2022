import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js'
import jwt from 'jsonwebtoken';

const login = express.Router();

//leva a rota de login
login.post('/', async (req, res) => {

    // Recebe as informações de LOGIN
    const { email, password } = req.body;

    // Buscar EMAIL no BD, se existente, e armazenar
    const registeredUser = await User.findOne(
        {where: {email}}
    ).catch(
        (err) => {
            console.log("Error", err);
        }
    )

        
    // Caso EMAIL inexistente, informar o usuário
    if (!registeredUser) {
        return res
            .status(400)
            .json({message: "Email ou Senha inválidos."})
    };
    
    // Caso EMAIL existente, verificar a SENHA do usuário
    if (!bcrypt.compareSync( password, registeredUser.password)) {
        return res
            .status(400)
            .json({message: "Email ou Senha inválidos."})
    }

    // Caso SENHA correta, gerar TOKEN de acesso
    const token = jwt.sign(
        //Payload: o que será armazenado no TOKEN
        {
            id: registeredUser.id,
            name: registeredUser.name,
            admin: registeredUser.admin
        },
        // Secret or private key
        process.env.JWT_SECRET,
        // Options (expiração em 1 hora)
        {
            expiresIn: '1h'
        }
        
    )

    res.json(
        {
            message: "Bem-Vindo",
            token: token
        }
    )

    }
);
export default login