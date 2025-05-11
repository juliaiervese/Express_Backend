import mongoose from 'mongoose';


const { MONGO_URI, MONGO_DB_NAME } = process.env;


if (!MONGO_URI) {
  console.error('ENV var MONGO_URI não encontrada. Verifique seu .env');
  process.exit(1);
}

const connect = async () => {
  try {
 
    mongoose.set('strictQuery', true);

   
    await mongoose.connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,  
    });

    
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default { connect };
