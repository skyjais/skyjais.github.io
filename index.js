function copyToClipboard() {
  var textToCopy = "akajais001@gmail.com";

  var tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("Text copied to clipboard");
}
