const qrCode = require("qrcode")
const fs = require('fs')


const generateQR = async (path,text) => {
  try {
    await qrCode.toFile(path,text,(err)=>{
     if(err){
      console.error(err);
    }
  });
  } catch (err) {
    console.error(err)
  }
}

const imgPath = "public/image/qrcode.jpg";
module.exports = {
  qrGeneratorGET : (req,res) =>{
    return res.render("index.html",{
      isGenerated:fs.existsSync(imgPath)
    })
  },
  qrGeneratorPOST : (req,res) =>{
    generateQR(imgPath,req.body.text);
  }
};