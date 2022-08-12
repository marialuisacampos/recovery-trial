import { Request, Response } from "express";

class UserController {
  async findAll(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {}
  async create(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}

export default new UserController();
