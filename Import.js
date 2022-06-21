const mongoose = require('mongoose');
// const kunUz=require('./kunUz')
const model = require('./modelKun');
const dotenv = require('dotenv');

dotenv.config({path: './config.env',});

/////////////////////
const axios = require('axios')
const cheerio = require('cheerio')
const url = process.env.URL_KUN
const articles = []


 
  
  console.log(articles)
  axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    
  
    $('.news', html).each( function(){ //<-- cannot be a function expression
        const title = $(this).find('a').text()
        const Url = $(this).find('a').attr('href')
        const img=$(this).find('img').attr('src')
        const url='https://kun.uz'+Url;
        articles.push({
            title,
            url,
            img,
        })
    })

 //////////////////////// import ///////////////////////////////
    const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
      mongoose.connect(DB, {})
        .then(() => {
          console.log('DB connected');
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });

      // databasega malumotlarni polniy qoshadi
      const addData = async () => {
        try {
          const add = await model.create(articles);
          console.log('Norm saqlandi');
        } catch (err) {
          console.log('Saqlashda xato qilding');
        }
      };


      // console.log(articles)
      // databasedan malumotlarni polniy uchiradi
      const deleteData = async () => {
        try {
          const deleted = await model.deleteMany();
          console.log('Top-toza boldi');
          process.exit()
        } catch (err) {
          console.log('Uchirishda xato qilding');
        }
      };

      if(process.argv[2]==='--add'){
        addData()
      }
      if(process.argv[2]==='--delete'){
        deleteData()
      }
      console.log(process.argv)

    
  }).catch(err => console.log(err))


  
  

