import { Router, Request, Response } from "express";
import { createUser } from "../../src";

export = (() => {
    let router = Router();

    router.post('/createGeneric', async (req: Request, res: Response) => {
        const { discordUserId } = req.body;
        const { status } = await createUser(discordUserId);

        res.status(status).json({
            status,
        });
    });

    return router;
})();