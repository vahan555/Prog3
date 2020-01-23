let matrix = []; // Մատրիցի ստեղծում
let rows = 50; // Տողերի քանակ
let columns = 70; // Սյուների քանակ
// stex zangvacnery verjum Arr barov
var grassArr = [];
var grassEaterArr = [];
var predatorArr = []
var witcherArr = []
var knightArr = []
var side = 40;


function setup() {


for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random() * 100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
}
if (a >= 20 && a < 40) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
}
else if (a >= 40 && a < 50) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
}
else if (a >= 50 && a < 70) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
}
else if (a >= 70 && a < 90) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
}
else if (a >= 90 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
}
}
}
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

//pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
            else if (matrix[y][x] == 3) {
                var pr = new Predator(x,y,3);
                predatorArr.push(pr);   
            }
            else if (matrix[y][x] == 4) {
                var wr = new Witcher(x,y,4);
                witcherArr.push(wr);   
            }
            else if (matrix[y][x] == 5) {
                var kn = new Knight(x,y,5);
                knightArr.push(kn);   
            }
        }
    }
    console.log(witcherArr)
 
}
//draw uxaki nerkuma
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }

    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
     for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (var i in witcherArr) {
        witcherArr[i].move();
        witcherArr[i].eat();
        witcherArr[i].create();
        witcherArr[i].die();
    }
    for (var i in knightArr) {
        knightArr[i].move();
        knightArr[i].eat();
        knightArr[i].mul();
        knightArr[i].die();
    }

}