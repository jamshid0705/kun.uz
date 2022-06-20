
const dotenv = require('dotenv'); // globalni o'zgaruvchilarga saqlash
dotenv.config({ path: './config.env' });

const app=require('./app')

const mongoose = require('mongoose');


const dbKun = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(dbKun, {})
  .then(() => {
    console.log('Databasega ulandi');
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(+process.env.PORT, () => console.log(`server running on PORT`))