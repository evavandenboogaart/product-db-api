import { Router, Request, Response } from "express";
import { HttpStatusCode } from "axios";
import setProduct from "../../src/products/patch/set/setProduct";

export = (() => {
  let router = Router();

  router.patch('/product', async (req: Request, res: Response) => {
    const id = req.body.id;
    if (!id) res.status(HttpStatusCode.NotFound).json({
      status: HttpStatusCode.NotFound,
    });
    const { status } = await setProduct(id, req.body);

    res.status(status).json({
      status,
    });
  });

  router.patch('/product/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) res.status(HttpStatusCode.NotFound).json({
      status: HttpStatusCode.NotFound,
      data: undefined,
    });
    const { status } = await setProduct(id, req.body);

    res.status(status).json({
      status,
    });
  });

  return router;
})();