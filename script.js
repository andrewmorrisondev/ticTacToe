let displayTeamTurn = document.getElementById('span').innerHTML;
const restartButton = document.getElementById('infoPanel');

const itemOne = document.getElementById('item1');
const itemTwo = document.getElementById('item2');
const itemThree = document.getElementById('item3');
const itemFour = document.getElementById('item4');
const itemFive = document.getElementById('item5');
const itemSix = document.getElementById('item6');
const itemSeven = document.getElementById('item7');
const itemEight = document.getElementById('item8');
const itemNine = document.getElementById('item9');
const win = new Audio("ticTacToe04092020.wav");

const clickBox = (event) => {
  if (document.getElementById("span").innerHTML === "X's") {
    if (event.toElement.innerHTML === "") {
      document.getElementById("span").innerHTML = "O's";
      event.toElement.innerHTML = "X";
    } else {
      alert("That is not a valid move!");
      console.log(itemOne.textContent + itemTwo.textContent + itemThree.textContent);
    }
  } else {
    if (event.toElement.innerHTML === "") {
    document.getElementById("span").innerHTML = "X's";
    event.toElement.innerHTML = "O";
  } else {
      alert("That is not a valid move!");
  }
  }
  checkGame();
}
const checkGame = (event) => {
  if (itemOne.textContent + itemTwo.textContent + itemThree.textContent === "XXX" ||itemFour.textContent + itemFive.textContent + itemSix.textContent === "XXX" || itemSeven.textContent + itemEight.textContent + itemNine.textContent === "XXX" || itemOne.textContent + itemFour.textContent + itemSeven.textContent === "XXX" || itemTwo.textContent + itemFive.textContent + itemEight.textContent === "XXX" || itemThree.textContent + itemSix.textContent + itemNine.textContent === "XXX" || itemOne.textContent + itemFive.textContent + itemNine.textContent === "XXX" || itemThree.textContent + itemFive.textContent + itemSeven.textContent === "XXX") {  
    document.getElementById('textInfo').innerHTML = "X Wins!";
    win.play();
  }
  if (itemOne.textContent + itemTwo.textContent + itemThree.textContent === "OOO" || itemFour.textContent + itemFive.textContent + itemSix.textContent === "OOO" || itemSeven.textContent + itemEight.textContent + itemNine.textContent === "OOO" || itemOne.textContent + itemFour.textContent + itemSeven.textContent === "OOO" || itemTwo.textContent + itemFive.textContent + itemEight.textContent === "OOO" || itemThree.textContent + itemSix.textContent + itemNine.textContent === "OOO" || itemOne.textContent + itemFive.textContent + itemNine.textContent === "OOO" || itemThree.textContent + itemFive.textContent + itemSeven.textContent === "OOO") {
    document.getElementById('textInfo').innerHTML = "O Wins!";
    win.play();
  }
  if (itemOne.textContent && itemTwo.textContent && itemThree.textContent && itemFour.textContent && itemFive.textContent && itemSix.textContent && itemSeven.textContent && itemEight.textContent && itemNine.textContent !== " ") {
    document.getElementById('textInfo').innerHTML = "Draw!";
  }
}
const restartGame = (event) => {
  location.reload(false);
}

restartButton.addEventListener('click', restartGame);

itemOne.addEventListener('click', clickBox);
itemTwo.addEventListener('click', clickBox);
itemThree.addEventListener('click', clickBox);
itemFour.addEventListener('click', clickBox);
itemFive.addEventListener('click', clickBox);
itemSix.addEventListener('click', clickBox);
itemSeven.addEventListener('click', clickBox);
itemEight.addEventListener('click', clickBox);
itemNine.addEventListener('click', clickBox);
