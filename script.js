for (var i = 0; i < 81; i++) {
  var newColor = Math.floor((Math.random() * 899999) + 99999)
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#" + newColor;
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
}
