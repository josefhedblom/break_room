import { Router } from "express";
import isValidToken from "../../middleware/authentication/verifyToken.middleware";
import { create, deleteTime, breaks } from "../../controllers/time.controller";
import { validationRequestResults } from "../../middleware/validationErrorHandler/validationErrors.middleware";

const Route = Router();
Route.get("/", isValidToken, breaks);
Route.post("/new", isValidToken, validationRequestResults, create);
Route.delete("/:timeId", isValidToken, deleteTime);

export { Route as TimeRouter };
