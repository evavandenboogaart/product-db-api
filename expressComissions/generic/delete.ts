import { Router, Request, Response } from "express";
import { HttpStatusCode } from "axios";

export = (() => {
  let router = Router();

  router.delete('/generic', async (req: Request, res: Response) => {
    let status = 200;

    res.status(status).json({
      status,
    });
  });

  router.delete('/generic/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) res.status(HttpStatusCode.NotFound).json({
      status: HttpStatusCode.NotFound,
      data: undefined,
    });
    let status = 200;

    res.status(status).json({
      status,
    });
  });

  return router;
})();