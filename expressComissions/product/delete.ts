import { Router, Request, Response } from "express";
import { HttpStatusCode } from "axios";
import deleteProduct from "../../src/products/patch/delete/deleteProduct";

export = (() => {
  let router = Router();

  router.delete('/product', async (req: Request, res: Response) => {
    const id = req.body.id;
    if (!id) res.status(HttpStatusCode.NotFound).json({
      status: HttpStatusCode.NotFound,
    });
    const { status } = await deleteProduct(id);

    res.status(status).json({
      status,
    });
  });

  router.delete('/product/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) res.status(HttpStatusCode.NotFound).json({
      status: HttpStatusCode.NotFound,
    });
    const { status } = await deleteProduct(id);

    res.status(status).json({
      status,
    });
  });

  return router;
})();