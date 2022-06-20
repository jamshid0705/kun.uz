// const axios = require('axios')
// const cheerio = require('cheerio')

// const dotenv = require('dotenv'); // globalni o'zgaruvchilarga saqlash
// dotenv.config({ path: './config.env' });

// const url = process.env.URL_KUN



//   axios(url).then(response => {
//     const html = response.data
//     const $ = cheerio.load(html)
//     const articles = []
  
//     $('.news', html).each( function(){ //<-- cannot be a function expression
//         const title = $(this).find('a').text()
//         const Url = $(this).find('a').attr('href')
//         const img=$(this).find('img').attr('src')
//         const url='https://kun.uz'+Url;
//         articles.push({
//             title,
//             url,
//             img,
//         })
//     })
//   }).catch(err => console.log(err))
  


module.exports=articles