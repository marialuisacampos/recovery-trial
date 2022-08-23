import {compare} from "bcrypt";
import { Request, Response, NextFunction } from "express";
import { UserModel } from "../database/models/UserModel";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

class AuthController {
    async store(req: Request, res: Response, next: NextFunction){
        console.log(req.body);
        const {email, senha} = req.body;
        const secret = process.env.SECRET;


        const user = await UserModel.findOne({
            where:{
                email: email
            }
        });

        if(!user) return res.status(204).json({messagem: "user not found"});

        const userPassword = user.getDataValue('senha');
        const userId = user.getDataValue('id')

        const isValidPassword = await compare(senha, userPassword);

        if(!isValidPassword) return res.status(204).json({message:'user not found'});

        const token = jwt.sign({id: userId}, secret, {
            expiresIn: '7d'
        });
        
        return res.status(200).json({user, token});
    }
}

export default new AuthController;