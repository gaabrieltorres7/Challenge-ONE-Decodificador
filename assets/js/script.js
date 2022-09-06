document.querySelector("#output-text").style.display = "none";
document.querySelector("#btn-copy").style.display = "none";

var img = document.querySelector("#background-img");
var outputText = document.querySelector("#output-text");
var caution = document.querySelector(".caution");

const btnCopy = document.querySelector("#btn-copy");
const btn1 = document.querySelector("#encrypt");
const btn2 = document.querySelector("#descrypt");
const input = document.querySelector("#input-text");

function encrypt() {
  let e = input.value.replace(/e/g, "enter");
  let o = e.replace(/o/g, "ober");
  let i = o.replace(/i/g, "imes");
  let a = i.replace(/a/g, "ai");
  let u = a.replace(/u/g, "ufat");
  let encrypted = u;
  switchRightContainer(encrypted);
}

function descrypt() {
  let e = input.value.replace(/enter/g, "e");
  let o = e.replace(/ober/g, "o");
  let i = o.replace(/imes/g, "i");
  let a = i.replace(/ai/g, "a");
  let u = a.replace(/ufat/, "u");
  let descrypted = u;
  switchRightContainer(descrypted);
}

btn1.addEventListener("click", () => {
  if (input.value == "") {
    alert("You need to write something before click to encrypt.");
  } else {
    encrypt();
    input.value = "";
    input.focus();
  }
});

btn2.addEventListener("click", () => {
  if (input.value == "") {
    alert("You need to write something before click to descrypt.");
  } else {
    descrypt();
    input.value = "";
    input.focus();
  }
});

btnCopy.addEventListener("click", () => {
  copyText();
});

function switchRightContainer(input) {
  img.style.display = "none";
  outputText.style.display = "block";
  outputText.innerText = input;
  caution.style.display = "none";
  btnCopy.style.display = "block";
  btnCopy.innerText = "Copy";
}

function copyText() {
  outputText.select();
  document.execCommand("copy");
  outputText.innerText = "Text Copied!";
  setInterval(() => {
    location.reload();
  }, 1500);
  input.focus();
}

function escreve(placeholder) {
  const array = placeholder.getAttribute("placeholder").split("");
  placeholder.setAttribute("placeholder", "");
  array.forEach((letra, i) => {
    setTimeout(() => {
      placeholder.setAttribute("placeholder", letra);
    }, 300 * i);
  });
}

const placeholder = document.getElementById("input-text");
escreve(placeholder);
