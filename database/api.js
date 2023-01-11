// création de la bdd
use api

// création de la collection auteurs
db.createCollection("auteurs",{validator:{$jsonSchema:{bsonType:"object",required:["nom","prenom"],properties:{"_id":{bsonType: "objectId",description: "ID de l'auteur"},"nom":{"bsonType":"string","description":"nom"}, "prenom":{"bsonType":"string","description":"prenom"}}}}})

// création de la collection commentaires
db.createCollection("commentaires",{validator:{$jsonSchema:{bsonType:"object",required:["description","dateCreation"],properties:{"_id":{bsonType: "objectId",description: "ID du commentaire"},"description":{"bsonType":"string","description":"description"}, "dateCreation":{"bsonType":"date","description":"date de création du commentaire"}, "articleId":{"bsonType":"objectId","description":"article du commentaire"}}}}})

// création de la collection categories
db.createCollection("categories",{validator:{$jsonSchema:{bsonType:"object",required:["libelle"],properties:{"_id":{bsonType: "objectId",description: "ID de la catégorie"},"libelle":{"bsonType":"string","description":"libellé de la catégorie"}}}}})

// création de la collection articles
db.createCollection("articles",{validator:{$jsonSchema:{bsonType:"object",required:["title","description","dateCreation"],properties:{"_id":{bsonType: "objectId",description: "ID de l'article"},"title":{"bsonType":"string","description":"titre de l'article"},"description":{"bsonType":"string","description":"description de l'article"},"dateCreation":{"bsonType":"date","description":"date de création de l'article"},"categorieId":{"bsonType":"objectId","description":"catégorie de l'article"},"auteurId":{"bsonType":"objectId","description":"auteur de l'article"},"tags":{"bsonType":"array","items":{"bsonType":"object","properties":{"libelle":{"bsonType":"string","description":"libelle du tag"}}}}}}}})

// créer l'index du titre de l'article
db.articles.createIndex( { "title": 1 }, { unique: true } )

// créer l'index du titre de la catégorie
db.categories.createIndex( { "libelle": 1 }, { unique: true } )

// créer l'index du libellé des tags
db.articles.createIndex({ "tags.libelle": 1 }, { unique: true })

// créer un auteur :
db.auteurs.insertMany([{"nom":"moi", "prenom":"encore moi"}, {"nom":"belle", "prenom" : "maison"}])

// créer une catégorie :
db.categories.insertMany([{"libelle":"football"}, {"libelle":"musique"}])

// créer un article :
db.articles.insertOne({
    _id: ObjectId(),
    title: "Article 1",
    description: "Description de l'article 1",
    dateCreation: new Date(),
    categorieId: ObjectId("63bdbb3bb861d2df98d1adf2"),
    auteurId: ObjectId("63bdb8bbb861d2df98d1adea"),
    tags: [{libelle: "tag1"}, {libelle: "tag2"}]
});

db.articles.insertOne({
    _id: ObjectId(),
    title: "Article 2",
    description: "Description de l'article 2",
    dateCreation: new Date(),
    categorieId: ObjectId("63bdbb3bb861d2df98d1adf2"),
    auteurId: ObjectId("63bdb8bbb861d2df98d1adea"),
    tags: [{libelle: "tag3"}, {libelle: "tag4"}]
});

// créer un commentaire :
db.commentaires.insertOne({
    _id: ObjectId(),
    description: "Commentaire 1",
    dateCreation: new Date(),
    articleId: ObjectId("63bdbb3bb861d2df98d1adf2")
});

db.commentaires.insertOne({
    _id: ObjectId(),
    description: "Commentaire 2",
    dateCreation: new Date(),
    articleId: ObjectId("63bdbb3bb861d2df98d1adf2")
});