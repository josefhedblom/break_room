import { Router } from "express";
import isValidToken from "../../middleware/authentication/verifyToken.middleware";
import { validationRequestResults } from "../../middleware/validationErrorHandler/validationErrors.middleware";
import {
  userRegisterValidationCheck,
  userLoginValidationCheck,
} from "../../middleware/userValidation/userValidationCheck.middleware";

import {
  createUser,
  verifyUser,
  loginUser,
  logoutUser,
  deleteUser,
  account,
} from "../../controllers/user.controller";

const Route = Router();
Route.get("/account/", isValidToken, account);
Route.get("/verifi-email", verifyUser);
Route.post("/signup", userRegisterValidationCheck, validationRequestResults, createUser);
Route.post("/login", userLoginValidationCheck, validationRequestResults, loginUser);
Route.get("/logout", logoutUser);
Route.delete("/:userId", deleteUser);

export { Route as UserRouter };
