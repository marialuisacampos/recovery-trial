import express from "express";
import UsersController from "./controllers/UsersConstroller";
import VideosController from "./controllers/VideosController";
import TrainingsController from "./controllers/TrainingsController";

const router = express.Router();

router.post("/users", UsersController.create);
router.get("/users/:userEmail", UsersController.findOne);
router.get("/users", UsersController.findAll);
router.delete("/users/userEmail", UsersController.delete);
router.put("/users/userEmail", UsersController.update);

router.post("/videos", VideosController.create);
router.get("/videos/:video", VideosController.findOne);
router.get("/videos", VideosController.findAll);
router.put("/videos/:video", VideosController.update);
router.delete("/videos/:video", VideosController.delete);

router.post("/trainings", TrainingsController.create);
router.get("/trainings/:trainingCategory", TrainingsController.findOne);
router.get("/trainings", TrainingsController.findAll);
router.put("/trainings/:trainingCategory", TrainingsController.update);
router.delete("/trainings/:trainingCategory", TrainingsController.delete);

export { router };
