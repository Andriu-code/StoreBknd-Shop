const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');

const COLLECTION = 'orders';

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    const objectId = new ObjectId(id)
    return await collection.findOne({ _id: objectId });
}

const create = async (order) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(order);
    return result.insertedId;
}

const update = async (id, order) => {
    const collection = await Database(COLLECTION);
    const { _id, ...updateData } = order;
    return collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
}

const deleteOrder = async (id, order) => {
    const collection = await Database(COLLECTION);
    return collection.deleteOne({ _id: new ObjectId(id) }, { ...order })
}

module.exports.OrdersService = {
    getAll,
    getById,
    create,
    update,
    deleteOrder
}