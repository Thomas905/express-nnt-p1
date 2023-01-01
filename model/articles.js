import mongoose from "mongoose";

const articlesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateCreation: {
        type: Date,
        required: true,
    },
    categorieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true,
    },
    auteurId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auteurs',
        required: true,
    },
    tags: [{
        type: String,
        required: true,
    }],
}, {collection: 'articles'});

export const articles = mongoose.model('articles', articlesSchema);