const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');

const COLLECTION = 'categories';

const getAll = async () => {   // traer todas las categorias
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();  //retorna toda la coleccion de categorias y lo muestra como un array
}

const getById = async (id) => {  //traer categoria por id
    const collection = await Database(COLLECTION);
    const objectId = new ObjectId(id)
    return await collection.findOne({ _id: objectId });
}

const create = async (category) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(category);
    return result.insertedId;
}

const update = async (id, category) => {
    const collection = await Database(COLLECTION);
    const { _id, ...updateData } = category;
    return collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
}

const deleteCategory = async (id, category) => {
    const collection = await Database(COLLECTION);
    return collection.deleteOne({ _id: new ObjectId(id) }, { ...category })
}

module.exports.CategoriesService = {
    getAll,
    getById,
    create,
    update,
    deleteCategory
}