document.addEventListener("DOMContentLoaded", function () {
  var charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const random = Math.floor(Math.random() * charArr.length);
  var ch = charArr[random];
  document.body.addEventListener('keydown', function (e) {
    var keypress = String.fromCharCode(e.keyCode);
    if (keypress.toLowerCase() == ch.toLowerCase()) {
      var mypara = document.createElement("p");

      mypara.innerHTML = "Secret key is pressed";

      //Finally, append the element to the HTML body
      document.body.appendChild(mypara);
      ch = charArr[Math.floor(Math.random() * charArr.length)];
    }
  });
});
