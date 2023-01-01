import express from 'express';
import dotenv from 'dotenv';

dotenv.config(process.cwd(), '.env');

const router = express.Router();

import { articles } from "../model/articles.js";
import { auteurs } from "../model/auteurs.js";

// GET ALL ARTICLES
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

// ADD AN ARTICLE
router.post('/article', function(req, res, next) {
    const article = new articles(req.body);
    article.save()
        .then(() => res.json('Article ajouté!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE ARTICLE
router.put('/article/:id', (req, res) => {
    const id = req.params.id;
    const article = req.body;
  
    articles.findByIdAndUpdate(id, article)
        .then(() => res.json('Article modifié!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET AN ARTICLE
router.get('/article/:id', (req, res) => {
    const id = req.params.id;
  
    articles.findById(id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE AN ARTICLE
router.delete('/article/:id', (req, res) => {
    const id = req.params.id;
  
    articles.findByIdAndDelete(id)
        .then(() => res.json('Article supprimé!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET ALL AUTEURS
router.get('/auteurs', function(req, res, next) {
    auteurs.find({}, function(err, authors) {
        if (err) {
            console.log(err);
            res.status(500).send
        } else {
            res.status(200).send(authors);
        }
    });
});

export default router;
