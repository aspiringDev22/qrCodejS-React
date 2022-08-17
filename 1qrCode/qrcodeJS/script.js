const container = document.querySelector(".container");
const inputEl = document.querySelector("form input");
const generatorBtn = document.querySelector("form button");
const qrImg = document.querySelector("img");

generatorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputVal = inputEl.value;
  //   console.log(inputVal);
  if (!inputVal || inputVal.keycode === "32") return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;
  //   generatorBtn.innerHTML = "Generating QR";
  qrImg.classList.add("active");
  //   generatorBtn.innerHTML = "Generate QR Code";
});

inputEl.addEventListener("keyup", () => {
  if (!inputEl.value) {
    qrImg.classList.remove("active");
  }
});
