import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import productGetCalls from './expressComissions/product/get';
import productPostCalls from './expressComissions/product/post';
import productPatchCalls from './expressComissions/product/patch';
import productDeleteCalls from './expressComissions/product/delete';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/permission', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(productGetCalls);
app.use(productPostCalls);
app.use(productPatchCalls);
app.use(productDeleteCalls);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});