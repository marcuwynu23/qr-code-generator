
var qrCodeImage = document.getElementById("qr-code")
var container = document.getElementById("img-container")



if(container.dataset.imgreq !== ''){
  let imgreq = JSON.parse(container.dataset.imgreq);
  console.log(imgreq);
  if(imgreq.isGenerated){
    qrCodeImage.hidden = false;
  }
}



let generateText = document.getElementById("generate-text");
let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click",function(){
  $.ajax({
    url: "/",
    type: "POST",
    dataType: 'json',
    data: {"text" : generateText.value}
});
  window.location.reload();
});


