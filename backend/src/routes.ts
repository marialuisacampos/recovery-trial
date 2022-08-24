import express from "express";
import UsersController from "./controllers/UsersConstroller";
import VideosController from "./controllers/VideosController";
import AuthController from "./controllers/AuthController";
import userAuth from "./middlewares/auth";
import EmailController from "./controllers/EmailController";

const router = express.Router();

//rota de cadastro
router.post("/users/singUp", UsersController.create);
//rota de login
router.post("/users/login", AuthController.store);
//rota de atualização de senha
router.put(
  "/users/password/:userEmail",
  userAuth,
  UsersController.updatePassword
);
//rota de atualização de dados do usuário
router.put("/users/update/", userAuth, UsersController.update);
//rota responsável por pegar as infos de sessão do usuário logado
router.get("/users/:userEmail", userAuth, UsersController.findOne);

//rotas não utilizadas no momento
router.get("/users", UsersController.findAll);
router.delete("/users/:userEmail", UsersController.delete);

//rota retorna um vídeo específico de uma categoria específica
router.get("/videos/:tag/:id", userAuth, VideosController.findOne);
//rota retorna todos os vídeos de uma categoria específica
router.get("/videos/:tag", userAuth, VideosController.findAll);


//rota para enviar email
router.post("/email/send", EmailController.sendmail);

export { router };
