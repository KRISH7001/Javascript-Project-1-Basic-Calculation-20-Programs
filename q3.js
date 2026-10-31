let message = "Hello, JavaScript!";
console.log(message);                     
if (typeof alert === "function") {
  alert(message);
}
if (typeof document !== "undefined") {

  let box = document.getElementById("output");
  if (box) box.innerHTML = message;
}