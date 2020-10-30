import express from 'express';
import routes from './routes';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar.
// Query Params: Páginação, filtros, ordenação

app.use(routes);

// localhost:3333/users
app.listen(3333);