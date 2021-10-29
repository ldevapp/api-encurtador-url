import { Request, Response } from 'express';
import shortId from 'shortid';
import { config } from '../config/Constants';

class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {

        const { originURL } = req.body;
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;

        res.json({ originURL, hash, shortURL });
    }

    public async redirect(req: Request, res: Response): Promise<void> {

        const { hash } = req.params;

        const url = {
            "originURL": "https://cloud.mongodb.com/v2/617b286997ea8d3a89978c9a#metrics/replicaSet/617b29c1dbfe0e16f2e32014/explorer",
            "hash": "vfLKv0CDH",
            "shortURL": "http://localhost:5000/vfLKv0CDH",
        }

        res.redirect(url.originURL);
    }
}

export default URLController;