import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config';

async function userAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    const secret = process.env.SECRET;

    if (!authorization)
      return req.status(401).json({ message: "Token is required" });

    const [, token] = authorization.split(" ");

    try {
      await jwt.verify(token, secret);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token is required" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Token is required" });
  }
}

export default userAuth;
