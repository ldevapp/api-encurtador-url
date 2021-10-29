import URLController from './controller/URLController';
import express, { Request, Response } from 'express';

const host = 'http://localhost';
const port = 5000;

const api = express();

api.use(express.json())

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(port, () => console.log(`Servidor iniciado em ${host}:${port}`));
