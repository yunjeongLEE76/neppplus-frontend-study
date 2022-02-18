const recommend = () => {
  const numberList = [];
  const getRandomNumber = () => Math.floor(Math.random() * 45) + 1;

  for (let i = 0; i < 6; i++) {
    let random = getRandomNumber();
    while (numberList.includes(random)) {
      random = getRandomNumber();
    }
    numberList.push(random);
  }
  numberList.sort((a, b) => a - b);

  const $lottoNumberList = document.querySelectorAll(".lotto-number");

  for (let i = 0; i < $lottoNumberList.length; i++) {
    $lottoNumberList[i].innerText = numberList[i];
    let colorClass = "";
    if (numberList[i] <= 10) {
      colorClass = "yellow";
    } else if (numberList[i] <= 20) {
      colorClass = "blue";
    } else if (numberList[i] <= 30) {
      colorClass = "red";
    } else if (numberList[i] <= 40) {
      colorClass = "gray";
    } else {
      colorClass = "green";
    }
    $lottoNumberList[i].classList = "lotto-number";
    $lottoNumberList[i].classList.add(colorClass);
  }
};
document.querySelector("#btnClick").addEventListener("click", recommend);
// const btnClick = document.querySelector("btnClick");
// btnClick.addEventListener("click", recommend);
