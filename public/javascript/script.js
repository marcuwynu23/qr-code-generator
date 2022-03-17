

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


