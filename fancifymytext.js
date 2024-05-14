const fancify = document.getElementById("idFancyShmancy");
const boring = document.getElementById("idBoringBetty");
fancify.addEventListener("change", fancifyOption);
boring.addEventListener("change", boringOption);


function sendAlert() {
  alert("Opps, You Just Changed Something LOL");
}


function makeTextBig() {
  document.getElementById("textArea").style.fontSize = "24px";
}


function fancifyOption() {
  document.getElementById("textArea").style.color = "blue";
  document.getElementById("textArea").style.fontWeight = "bold";
  document.getElementById("textArea").style.textDecoration = "underline";
}


function boringOption() {
  document.getElementById("textArea").style.color = "black";
  document.getElementById("textArea").style.fontWeight = "normal";
  document.getElementById("textAreaa").style.textDecoration = "none";
}


function moo() {

  var textarea = document.getElementById("textArea");
 
  var text = textarea.value.toUpperCase();
 
  var sentences = text.split(/([.!?]+)/);

 
  for (var i = 0; i < sentences.length; i += 2) {
    
    var sentence = sentences[i];

    
    if (/\s/.test(sentence)) {
      
      var words = sentence.split(/\s+/);
      
      words[words.length - 1] += "-Moo";
      
      sentences[i] = words.join(" ");
    }
  }

 
  text = sentences.join("");

  textarea.value = text;
}
