import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { userEmail } = req.params;
    const user = await UserModel.findOne({
      where: {
        email: userEmail,
      },
    });
    return user ? res.status(200).json(user) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const {
      nome,
      email,
      senha,
      telefone,
      idade,
      sexo,
      p_atividade_fisica,
      fraqueza_muscular,
      dificuldade_respiratoria,
      perda_de_memoria,
      acidente_em_12_meses,
      hipertensao,
      diabetes,
      doenca_cardiovasculares,
      doencas_pulmonares,
      ultimo_acesso,
    } = req.body;

    const user = await UserModel.create({
      nome,
      email,
      senha,
      telefone,
      idade,
      sexo,
      p_atividade_fisica,
      fraqueza_muscular,
      dificuldade_respiratoria,
      perda_de_memoria,
      acidente_em_12_meses,
      hipertensao,
      diabetes,
      doenca_cardiovasculares,
      doencas_pulmonares,
      ultimo_acesso,
    });
    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { userEmail } = req.params;
    await UserModel.update(req.body, { where: { email: userEmail } });
    return res.status(204);
  }

  async delete(req: Request, res: Response) {
    const { userEmail } = req.params;
    await UserModel.destroy({ where: { email: userEmail } });
  }
}

export default new UserController();
