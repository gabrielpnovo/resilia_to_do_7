import express from 'express';
import routes from './routes/operacoesRoutes.js'

const app = express();

app.use(express.json())

routes(app);

export default app