import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
import exp from 'constants';
import { json } from 'body-parser';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});

app.listen(3011, () => {
  console.log('Server started on http://localhost:3011');
});