var Witcher = require("./livingcreature")

class Witcher extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 20;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)

    }
    move() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy--;


        }

    }
    eat() {
        var Cell = this.chooseCell(3)
        var Cell1 = this.chooseCell(5)
        var Cells = Cell.concat(Cell1)
        console.log(Cells)
        var newCell = random(Cells)
        if (newCell) {
            console.log(newCell)
            var newX = newCell[0];
            var newY = newCell[1];
            console.log(newX,newY)
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
    
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            for(var i in knightArr){
                if (newX == knightArr[i].x && newY == knightArr[i].y) {
                    knightArr.splice(i, 1);
                    break;
                }
            }
    
    
            this.y = newY;
            this.x = newX;
            this.energy += 2;
    
        }
    }
    create() {
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            if (this.energy >= 23) {
                var eater = new GrassEater(newCell[0], newCell[1], 2);
                grassEaterArr.push(eater);
                matrix[newCell[1]][newCell[0]] = 2
            }
            this.energy--;
        }

    }
    die() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in witcherArr) {
                if (this.x == witcherArr[i].x && this.y == witcherArr[i].y) {
                    witcherArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}