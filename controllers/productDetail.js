const productDetailData = require('../data/productDetail.json')

exports.getProductDetail = async (req, res, next) => {
    try {
      res.status(200).json({
          data: productDetailData
      });
    } catch (error) {
      res.status(500).json({ 
          error: error 
      });
    }
}