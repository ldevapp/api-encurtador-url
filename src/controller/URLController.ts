import { URLModel } from '../database/models/URL';
import { Request, Response } from 'express';
import shortId from 'shortid';
import { config } from '../config/Constants';

class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {

        // Verifica se já existe URL no banco
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL });
        if(url){
            res.json(url);
            return
        }

        // Cria hash para URL
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;

        // Salva URL no banco
        const newUrl = await URLModel.create({ hash, shortURL, originURL });

        // Retorna url
        res.json(newUrl);
    }

    public async redirect(req: Request, res: Response): Promise<void> {

        const { hash } = req.params;

        const url = await URLModel.findOne({ hash });
        if(url){
            res.redirect(url.originURL);
            return
        }

        res.status(400).json({ error: 'URL not found.'});
        
    }
}

export default URLController;