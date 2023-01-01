import express from 'express';
import dotenv from 'dotenv';

dotenv.config(process.cwd(), '.env');

const router = express.Router();

import { articles } from "../model/articles.js";

router.get('/articles', function(req, res, next) {
    articles.find({}, function(err, articles) {
        if (err) {
            console.log(err);
            res.status(500).send
        } else {
            res.status(200).send(articles);
        }
    });
});

router.post('/article', function(req, res, next) {
    const article = new articles(req.body);
    console.log(article);
     article.save();
});

export default router;
