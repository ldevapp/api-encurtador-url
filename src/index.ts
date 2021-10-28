import express, { Request, Response } from 'express';

const host = 'http://localhost';
const port = 5000;

const api = express();

api.get('/test', (req: Request, res: Response) => {
    res.json({ success: true });
});

api.listen(port, () => console.log(`Servidor iniciado em ${host}:${port}`));
