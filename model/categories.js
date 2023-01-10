import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    libelle: {
        type: String,
        required: true,
    },
}, {collection: 'categories'});

export const categories = mongoose.model('categories', categoriesSchema);