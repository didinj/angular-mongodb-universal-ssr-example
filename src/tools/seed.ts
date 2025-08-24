// tools/seed.ts (run with tsx or ts-node)
import 'dotenv/config';
import { MongoClient } from 'mongodb';


async function run() {
  const client = new MongoClient(process.env['MONGODB_URI']!);
  await client.connect();
  const db = client.db();
  await db.collection('users').deleteMany({});
  await db.collection('users').insertMany([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' },
  ]);
  await client.close();
  console.log('Seeded users.');
}
run();
