import { Router } from 'express';
import { Request } from 'express-serve-static-core';
import { authMiddleware } from '../middleware/authentication';

const credentialsRouter = Router();

credentialsRouter.get("/", authMiddleware, (req: Request & { user: {} },res) => {
    console.log(req?.user);
    res.send(req.user)
})

export { credentialsRouter };