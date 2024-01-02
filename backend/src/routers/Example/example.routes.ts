import { Request, Response, Router } from "express";

const Route = Router();

Route.get("/test", (req: Request, res: Response) => {
  res.json({ message: "success" });
});

export { Route as ExampleRouter };
