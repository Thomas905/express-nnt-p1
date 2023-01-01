// création de la bdd
use api

// création de la collection auteurs
db.createCollection("auteurs",{validator:{$jsonSchema:{bsonType:"object",required:["nom","prenom"],properties:{"_id":{bsonType: "objectId",description: "ID de l'auteur"},"nom":{"bsonType":"string","description":"nom"}, "prenom":{"bsonType":"string","description":"prenom"}}}}})

// création de la collection commentaires
db.createCollection("commentaires",{validator:{$jsonSchema:{bsonType:"object",required:["description","dateCreation"],properties:{"_id":{bsonType: "objectId",description: "ID du commentaire"},"description":{"bsonType":"string","description":"description"}, "dateCreation":{"bsonType":"date","description":"date de création du commentaire"}}}}})

// création de la collection categories
db.createCollection("categories",{validator:{$jsonSchema:{bsonType:"object",required:["libelle"],properties:{"_id":{bsonType: "objectId",description: "ID de la catégorie"},"libelle":{"bsonType":"string","description":"libellé de la catégorie"}}}}})

// création de la collection articles
db.createCollection("articles",{validator:{$jsonSchema:{bsonType:"object",required:["title","description","dateCreation"],properties:{"_id":{bsonType: "objectId",description: "ID de l'article"},"title":{"bsonType":"string","description":"titre de l'article"},"description":{"bsonType":"string","description":"description de l'article"},"dateCreation":{"bsonType":"date","description":"date de création de l'article"},"tags":{"bsonType":"array","items":{"bsonType":"string"}}}}}})

// créer l'index du titre de l'article
db.articles.createIndex( { "title": 1 }, { unique: true } )

// créer l'index du titre de la catégorie
db.categories.createIndex( { "libelle": 1 }, { unique: true } )