// Create a database and collection with initial data
db = db.getSiblingDB('hello-world-db');

db.createCollection('exampleCollection');
db.exampleCollection.insertMany([
  { name: 'John Doe', age: 30 },
  { name: 'Jane Doe', age: 25 }
]);

print('Database and collection initialized successfully.');
