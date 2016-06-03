var body = document.body;

var holder = document.createElement("div");
holder.style.height = "100vh";
holder.style.width = "100vw";
body.appendChild(holder);
body.style.margin = "0px";


function flash(){
holder.innerHTML = ""
for (var i = 0; i < 81; i++) {
  var newColor = Math.floor((Math.random() * 899999) + 99999)
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#" + newColor;
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    holder.appendChild(newDiv);
  }
  setTimeout(flash, 2000)
}

flash()
