var numSelected = null;
var tileSelected = null;
var errors = 0;
var score = 0;
var difficulty = 1;
var pointsPrNumb = 50;
var board = [
    "---------",
    "3-9-25-8-",
    "58--69---",
    "-1---4--6",
    "--3---7--",
    "8--6---2-",
    "---97--38",
    "-4-58-6-9",
    "---------"
];
var solution = [
    "472318965",
    "369425187",
    "581769243",
    "715234896",
    "623891754",
    "894657321",
    "156972438",
    "247583619",
    "938146572"
];
window.onload = function () {
    setBoard();
};
function setBoard() {
    var _a, _b;
    for (var i = 1; i <= 9; i++) {
        var number = document.createElement("div");
        number.id = i.toString();
        number.innerText = i.toString();
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        (_a = document.getElementById("digits")) === null || _a === void 0 ? void 0 : _a.appendChild(number);
    }
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            var tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("borderline-hori");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("borderline-vert");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            (_b = document.getElementById("board")) === null || _b === void 0 ? void 0 : _b.appendChild(tile);
        }
    }
}
function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
function selectTile() {
    if (numSelected) {
        var coords = this.id.split("-");
        var r = parseInt(coords[0]);
        var c = parseInt(coords[1]);
        if (this.innerText == "" || solution[r][c] != this.innerText) {
            if (solution[r][c] == numSelected.id) {
                this.innerText = numSelected.id;
                this.classList.add("tile-right");
                this.classList.remove("tile-wrong");
                score += (pointsPrNumb * difficulty);
                document.getElementById("score").innerText = score.toString();
            }
            else {
                errors += 1;
                document.getElementById("errors").innerText = errors.toString();
                this.innerText = numSelected.id;
                this.classList.add("tile-wrong");
                if (errors >= 3) {
                    alert("Game Over");
                }
            }
        }
        else {
            return;
        }
    }
}
