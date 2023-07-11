var button = document.getElementById("generateButton")
var rowInput = document.getElementById("rows")
var columnInput = document.getElementById("columns")
var box = document.getElementById("box")
var par = document.getElementById("paragraph")
var spawnTable = 0;
button.addEventListener("click", showTable)


function showTable() {
  if (rowInput.value > 25) {
    par.innerHTML = "Choose a number below 25"

  }
  else if (columnInput.value > 25) {
    par.innerHTML = "Choose a number below 25"
  }
  else {
    box.innerHTML = ""
    //var makeTable = columnInput.value*rowInput.value;
    var row = rowInput.value
    var col = columnInput.value
    //var square = document.createElement("box")
    for (var i = 1; i <= row; i++) {
      for (var j = 1; j <= col; j++) {
        var square = document.createElement("div")
        square.classList.add("square")
        square.style.left = `${j * 38}px`
        square.style.top = `${i * 38}px`
        box.appendChild(square)
        square.innerHTML = j * i;
        if (i == j) {
          square.classList.add("perfectSquare")
        }



        // 1. check what is the row and column count, if both 0 then this will be 'X'
        // 2. check if you row = 0 then label
        // 3. column = 0 then label
      }
    }
    for (var i = 0; i <= row; i++) {
      var labelBox = document.createElement("div")
      labelBox.classList.add("label")
      box.appendChild(labelBox)
      labelBox.innerHTML = i
      labelBox.style.top = `${i * 38}px`
    }
    for (var j = 0; j <= col; j++) {
      var labelBox = document.createElement("div")
      labelBox.classList.add("label")
      box.appendChild(labelBox)
      labelBox.innerHTML = j
      labelBox.style.left = `${j * 38}px`
    }

  }
}




/*
these are wrong
0,0  1,0  2,0

0,1  1,1  2,1

0,2  1,2  2,2
*/