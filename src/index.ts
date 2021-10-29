import URLController from './controller/URLController';
import express, { Request, Response } from 'express';
import { MongoConnection } from './database/MongoConnection';

const host = 'http://localhost';
const port = 5000;

const api = express();

api.use(express.json())

const database= new MongoConnection();
database.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(port, () => console.log(`Servidor iniciado em ${host}:${port}`));
