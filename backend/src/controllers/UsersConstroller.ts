import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";
import bcrypt from "bcrypt";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send({ message: "vazio" });
  }

  async findOne(req: Request, res: Response) {
    const { userEmail } = req.params;
    const user = await UserModel.findOne({
      where: {
        email: userEmail,
      },
    });

    if (!user) return res.status(204).json({ message: "user not found" });

    return user ? res.status(200).json(user) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    try {
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
      } = req.body;

      const isAlreadyUsed = await UserModel.findOne({
        where: {
          email: email,
        },
      });

      if (isAlreadyUsed)
        return res.status(400).json({ message: "email already used" });

      const passwordHash = await bcrypt.hash(senha, 8);

      const user = await UserModel.create({
        nome,
        email,
        senha: passwordHash,
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
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: "Bad Request" });
    }
  }

  async updatePassword(req: Request, res: Response) {
    try {
      const { userEmail } = req.params;
      const { senha } = req.body;
      const senhaHash = await bcrypt.hash(senha, 8);

      await UserModel.update(
        {
          senha: senhaHash,
        },
        {
          where: {
            email: userEmail,
          },
        }
      );
      return res.status(200).json({ message: "Password Updated" });
    } catch (error) {
      return res.status(400).json({ message: "Bad request" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id, email, nome, telefone } = req.body;

      const newUser = await UserModel.update(
        {
          nome: nome,
          email: email,
          telefone: telefone,
        },
        {
          where: {
            id: id,
          },
        }
      );

      return res.status(200).json({ message: "user updated successfully" });
    } catch (error) {
      return res.status(400).json({ message: "Bad request" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { userEmail } = req.params;
      await UserModel.destroy({ where: { email: userEmail } });
      return res.status(204).json({ message: "Password Updated" });
    } catch (error) {
      return res.status(400).json({ message: "Bad Request" });
    }
  }
}

export default new UserController();
