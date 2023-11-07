import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import genericGetCalls from './expressComissions/generic/get';
import genericPostCalls from './expressComissions/generic/post';
import genericPatchCalls from './expressComissions/generic/patch';
import genericDeleteCalls from './expressComissions/generic/delete';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/permission', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(genericGetCalls);
app.use(genericPostCalls);
app.use(genericPatchCalls);
app.use(genericDeleteCalls);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});