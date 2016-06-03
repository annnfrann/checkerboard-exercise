//make this "refresh every 2 seconds without refreshing the page"


for (var i = 0; i < 81; i++) {
  var newColor = Math.random()* 1000000;
  newColor = newColor.toFixed(0);
  console.log(newColor);
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#" + newColor;
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
}
