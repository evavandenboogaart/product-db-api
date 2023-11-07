import { Router, Request, Response } from "express";
import { HttpStatusCode } from "axios";

export = (() => {
  let router = Router();

  router.get('/generic', async (req: Request, res: Response) => {
    const status = 200;
    res.status(status).json({
      status,
      data: undefined
    });
  });

  router.get('/generic/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) res.status(HttpStatusCode.NotFound).json({
      status: HttpStatusCode.NotFound,
      data: undefined,
    });
    res.status(200).json({
      status,
      data: undefined
    });
  });

  return router;
})();