import { Router, Request, Response } from "express";
import { HttpStatusCode } from "axios";
import fetchAll from "../../src/products/fetch/fetchAll";
import fetchProduct from "../../src/products/fetch/fetchProduct";

export = (() => {
  let router = Router();

  router.get('/products', async (req: Request, res: Response) => {
    const { status, results} = await fetchAll();
    res.status(status).json({
      status,
      data: results
    });
  });

  router.get('/product/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) res.status(HttpStatusCode.NotFound).json({
      status: HttpStatusCode.NotFound,
      data: undefined,
    });
    const {status, result } = await fetchProduct(id);
    res.status(status).json({
      status,
      data: result
    });
  });

  return router;
})();