

const model=require('./modelKun')

const getKUN = async (req, res) => {
  try {

   
    const data=await model.find()

    res.status(200).json({
      status: 'success',
      results: data.length,
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
module.exports={getKUN}