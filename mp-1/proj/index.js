let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output")
function doAdd() {
  output.innerHTML = String(Number(one.value) + Number(two.value));
}
function doSub() {
  output.innerHTML = String(Number(one.value) - Number(two.value));
}
function doMult() {
  output.innerHTML = String(Number(one.value) * Number(two.value));
}
function doDiv() {
  output.innerHTML = String(Number(one.value) / Number(two.value));
}
function doPow() {
  let res = 1;
  for (let i = 0; i < Number(two.value); i++) {
    res *= Number(one.value);
  }
  output.innerHTML = String(res);
}
function doClear() {
  one.value = "";
  two.value = "";
  output.innerHTML = "";
}