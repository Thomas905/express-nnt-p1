import mongoose from "mongoose";

const auteursSchema = mongoose.Schema({
    prenom: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
}, {collection: 'auteurs'});

export const auteurs = mongoose.model('auteurs', auteursSchema);