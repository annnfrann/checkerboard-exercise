// for (var i = 0; i < 81; i++) {
//   var newColor = Math.floor((Math.random() * 899999) + 99999)
//     var newDiv = document.createElement("div");
//     newDiv.style.backgroundColor = "#" + newColor;
//     newDiv.style.width = "11.1%";
//     newDiv.style.float = "left";
//     newDiv.style.paddingBottom = "11.1%";
//     document.getElementsByTagName("body")[0].appendChild(newDiv);
// }


// if (i%2 === 0) {
//   colorNumber1 + 3
// } else {
//   colorNumber2 + 3
// }
var colorNumber1 = 299000;
var colorNumber2 = 293000;

for (var i = 0; i < 81; i++) {
  if (i%2===0) {
    colorNumber1 += 100;
    console.log("first:", + colorNumber1);
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#" + colorNumber1;    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
  } else {
    colorNumber2 += 100;
    console.log("second:", + colorNumber2);
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#" + colorNumber2;    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
  }
}
