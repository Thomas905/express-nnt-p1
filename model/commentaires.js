import mongoose from "mongoose";

const commentairesSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    dateCreation: {
        type: Date,
        required: true
    },
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'articles',
        required: true,
    },
});

export const commentaires = mongoose.model('commentaires', commentairesSchema);