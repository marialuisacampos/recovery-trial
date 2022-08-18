import { Request, Response } from "express";
import {UserModel} from '../database/models/VideosModel';

class VideosController {
  async findAll(req: Request, res: Response) {
    const videos = await UserModel.findAll({
      where: {
        
      }
    });
    return  
  }
  async findOne(req: Request, res: Response) {}
  async create(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}

export default new VideosController();
