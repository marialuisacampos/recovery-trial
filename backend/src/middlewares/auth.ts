import {Request, Response, NextFunction, response } from 'express';
import jwt from 'jsonwebtoken';

async function userAuth(req: Request, res: Response, next: NextFunction) {
    try { 
        
        const {authorization} = req.headers;
        const secret = process.env.SECRET;

        if(!authorization) return req.status(401).json({message:'token is required'});

        const [ ,token] = authorization.split(' ');

        try {
            await jwt.verify(token, '1234123');
            next();
        } catch (error) {
            return res.status(401).json({message:'Token is required'});
        }
        // if (!token) return res.status(401).end();

        //await jwt.verify(token, secret, (err, data)=>{
            
        //})

    } catch (error) {
        return error;
    }
}

export default userAuth;