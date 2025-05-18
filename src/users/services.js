const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');

const COLLECTION = 'users';

const getAll = async () => {   // traer todos los productos
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();  //retorna toda la coleccion de producto y lo muestra como un array
}

const getById = async (id) => {  //traer algo por id
    const collection = await Database(COLLECTION);
    const objectId = new ObjectId(id)
    return await collection.findOne({ _id: objectId });
}

const create = async (user) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(user);
    return result.insertedId;
}

const update = async (id, user) => {
    const collection = await Database(COLLECTION);
    const { _id, ...updateData } = user;
    return collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
}

const deleteUser = async (id, user) => {
    const collection = await Database(COLLECTION);
    return collection.deleteOne({ _id: new ObjectId(id) }, { ...user });
}

//update
//delete

module.exports.UsersService = {
    getAll,
    getById,
    create,
    update,
    deleteUser
}