const mongoString = "mongodb+srv://grzegoz2004:Transformers1002@cos.5ftvstb.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');
const client = new MongoClient(mongoString);
async function main() {
    try {
    await client.connect();
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
     }
    
}
main();