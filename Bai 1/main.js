function find_square_number() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let SquareArray = [];
  for (let i = a; i < b; i++) {
    if (isSquare(i) == true) {
      SquareArray.push(i);
    }
  }
  let result = document.getElementById("result");
  result.innerHTML = "Các số chính phương trong khoảng từ " + a + " đến " + b + ": <br>" + SquareArray.join(" ");
}
function isSquare(i) {
  return Math.sqrt(i) % 1 == 0;
}

