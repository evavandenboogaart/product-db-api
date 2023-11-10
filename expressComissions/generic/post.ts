import { Router, Request, Response } from "express";
import { createGeneric } from "../../src";

export = (() => {
    let router = Router();

    router.post('/createGeneric', async (req: Request, res: Response) => {
        const { discordUserId } = req.body;
        const { status } = await createGeneric(discordUserId);

        res.status(status).json({
            status,
        });
    });

    return router;
})();