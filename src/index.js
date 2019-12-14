// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const result_set = document.querySelector(".result");
const num = document.querySelectorAll(".num");
const clearOutput = document.querySelector(".c1");
const equal = document.querySelector(".getResult");
const opButtons = document.querySelectorAll(".op");
let output = 0;
let result = 0;
let tmp = 0;
let op = "";
num.forEach(element => {
  element.addEventListener("click", numClick);
});
opButtons.forEach(element => {
  element.addEventListener("click", operation);
});
clearOutput.addEventListener("click", setClear);
equal.addEventListener("click", getResult);

function operation() {
  if (op === "") {
    result = tmp;
    tmp = 0;
    output = result;
    paintResult();
    op = this.value;
  } else {
    calculate();
    op = this.value;
    tmp = 0;
    output = result;
    paintResult();
  }
}
function getResult() {
  calculate();
  paintResult();
  output = 0;
  result = 0;
  tmp = 0;
  op = "";
}
function setClear() {
  output = 0;
  result = 0;
  tmp = 0;
  op = "";
  paintResult();
}
function calculate() {
  if (op === "+") {
    result = parseFloat(result) + parseFloat(tmp);
  } else if (op === "-") {
    result = parseFloat(result) - parseFloat(tmp);
  } else if (op === "*") {
    result = parseFloat(result) * parseFloat(tmp);
  } else if (op === "/") {
    result = parseFloat(result) / parseFloat(tmp);
  }
  output = result;
  tmp = 0;
}
function numClick() {
  if (tmp === 0) {
    tmp = this.value;
  } else {
    tmp = tmp.concat(this.value);
  }
  output = tmp;
  paintResult();
}

function paintResult() {
  result_set.value = output;
}
function init() {
  paintResult();
}

init();
