const qrCode = require("qrcode")
const fs = require('fs')
const generateQR = async (path,text) => {
  try {
    await qrCode.toFile(path,text,(err)=>{
      console.log(err);
    });
  } catch (err) {
    console.error(err)
  }
}


const qrGeneratorGET = (req,res) =>{
  let json_data = JSON.stringify({
  "isGenerated" : fs.existsSync("public/qrcode.jpg")  
  })
  return res.render("index.html",{content: json_data})
}

const qrGeneratorPOST = (req,res) =>{
  let path = "public/qrcode.jpg";
  generateQR(path,req.body.url);
  let json_data = JSON.stringify({
    "isGenerated" : true  
  })
  return res.render("index.html",{content: json_data})
}



module.exports = {
  qrGeneratorGET : qrGeneratorGET,
  qrGeneratorPOST : qrGeneratorPOST

};