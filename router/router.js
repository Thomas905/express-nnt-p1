import express from 'express';
import dotenv from 'dotenv';

dotenv.config(process.cwd(), '.env');

const router = express.Router();

import { articles } from "../model/articles.js";

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
    article.save();
});

// UPDATE ARTICLE
router.put('/article/:id', (req, res) => {
    const id = req.params.id;
    const article = req.body;
  
    articles.findByIdAndUpdate(id, article, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
});

// GET AN ARTICLE
router.get('/article/:id', (req, res) => {
    const id = req.params.id;
  
    articles.findById(id, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
});

// DELETE AN ARTICLE
router.delete('/article/:id', (req, res) => {
    const id = req.params.id;
  
    articles.findByIdAndDelete(id, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  });

export default router;
