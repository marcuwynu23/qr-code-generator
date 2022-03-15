//IMPORTS  
const path = require("path")
const session = require("express-session")
const express = require("express")
const qrCode = require("./qrCode");



//CREATE APP
const app = express()

//VIEW ENGINE CONFIG
const nunjucks = require("nunjucks");
nunjucks.configure(path.resolve(__dirname,'view'),{
  express:app,
  autoscape:true,
  noCache:false,
  watch:true
});


app.use(express.json());
app.use(express.urlencoded({extended: true}));

//SESSION CONFIG
app.use(session({
  secret:"secret of the star",
  saveUninitialized: false,
  resave: false
}));

app.get('/',qrCode.qrGeneratorGET);
app.post('/',qrCode.qrGeneratorPOST);

//STATIC CONFIG
app.use(express.static(path.join(__dirname,'public')))

//SERVER CONFIG
var PORT = 9000;
app.listen(process.env.PORT | PORT,(err)=>{
  if(!err){
    console.log(`listening on port ${PORT}`);
  }else{
     process.exit(0);
  }
});
