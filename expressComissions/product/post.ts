import { Router, Request, Response } from "express";
import { createProduct } from "../../src/products";
import { HttpStatusCode } from "axios";

export = (() => {
    let router = Router();

    router.post('/create-product', async (req: Request, res: Response) => {
        const id = req.body.id;
        if (id) {
            const { status } = await createProduct(req.body);
    
            res.status(status).json({
                status: status,
            });
        } else {
            res.status(HttpStatusCode.BadRequest).json({
                status: HttpStatusCode.BadRequest,
                data: { error: "Missing field 'id' in request" }
            });
        }
    });

    return router;
})();