import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local',
    );
}

let cachedClient = global._mongoClient;
let cachedDb = global._mongoDb;

if (!cachedClient) cachedClient = global._mongoClient = null;
if (!cachedDb) cachedDb = global._mongoDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = new MongoClient(uri, {});

    await client.connect();
    const dbName = process.env.MONGODB_DB || 'my-portfolio';
    const db = client.db(dbName);

    cachedClient = global._mongoClient = client;
    cachedDb = global._mongoDb = db;

    return { client, db };
}
