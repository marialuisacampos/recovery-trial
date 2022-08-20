import { Request, Response } from "express";
import {UserModel} from '../database/models/VideosModel';
import userAuth from "../middlewares/auth";

class VideosController {
  async findAll(req: Request, res: Response) {
    const tag = req.params
    // const videos = await UserModel.findAll({
    //   where: {
    //     categoria: tag
    //   }
    // });
    const videos = await UserModel.findAll();
    return videos.length > 0 ?
      res.status(200).json(videos)
      : res.status(204).send({message:'Bancao vazio!'});
  }

  async findOne(req: Request, res: Response) {
    const videoid = req.params.video
    const video = await UserModel.findOne({
      where:{
        videoId: videoid 
      }
    })
    return video 
      ? res.status(200).json(video) 
      : res.status(204).json({message: "Usuário não encontrado!"});
  }

  async create(req: Request, res: Response) {}
  
  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}

}

export default new VideosController();
