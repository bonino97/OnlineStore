import { MongoClient } from 'mongodb';

class Database {
  async initDatabase() {
    const MONGO_DB =
      process.env.DATABASE || 'mongodb://localhost:27017/online-shop';

    const client = await MongoClient.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();

    if (client.isConnected()) {
      console.log(`Database: Online => Name: ${db.databaseName}`);
    }

    return db;
  }
}

export default Database;
