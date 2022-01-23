class Rover{
    constructor(gridDimension = 10){
        this.currentPosition = [0, 0]
        this.direction = 'N',
        this.gridDimension = gridDimension
    }
    
    moveRover(instructions){
        const splitInstructions = instructions.split("");
        this.processInstructions(splitInstructions);
    }
    //This function processes instructions and executes functions based on these instructions.
    //There are 3 possible instructions.
    processInstructions(instructions, direction){
        for (var i = 0; i < instructions.length; i++){
            if(instructions[i] == 'L'){
                rotateLeft(direction)
            }
            if(instructions[i] == 'R'){
                rotateRight(direction)
            }
            if(instructions[i] == 'M'){
                moveBasedOnCurrentDirection()
            }
        }
    }
    //This rotates the rover left based on which direction it is currently facing. 
    rotateLeft(){
        let direction = this.direction
        switch(direction){
            case 'N':
                direction = 'W'
                return this.direction = direction
            case 'W':
                direction = 'S'
                return this.direction = direction
            case 'S':
                direction = 'E'
                return this.direction = direction
            case 'E':
                direction = 'N'
                return this.direction = direction
            
            default:
                return this.direction = direction;    
        }
    }
    //This rotates the rover right based on which direction it is currently facing.
    rotateRight(){
        let direction = this.direction
        switch(direction){
            case 'N':
                direction = 'E'
                return this.direction = direction
            case 'E':
                direction = 'S'
                return this.direction = direction
            case 'S':
                direction = 'W'
                return this.direction = direction
            case 'W':
                direction = 'N'
                return this.direction = direction           
        }
    }

    moveUp() {
        let [x, y] = this.currentPosition;
        if (y === this.currentGrid - 1) y = 0;
        else y = ++y;
        this.currentPosition = [x, y];
    }
    moveDown() {
        let [x, y] = this.currentPosition;
        if (y === 0) y = this.currentGrid - 1;
        else y = --y;
        this.currentPosition = [x, y];
    }
    moveLeft() {
        let [x, y] = this.currentPosition;
        if (x === 0) x = this.currentGrid - 1;
        else x = --x;
        this.currentPosition = [x, y];
      }
    moveRight() {
        let [x, y] = this.currentPosition;
        if (x === this.gridDimension - 1) x = 0;
        else x = ++x;
        this.currentPosition = [x, y];
    }
    //This will move the rover based on the direction it is currently facing.
    moveBasedOnCurrentDirection(){
        const moveDirection = this.direction
        switch(moveDirection){
            case 'N':
                moveUp();
            case 'S':
                moveDown();
            case 'E':
                moveRight();
            case 'W':
                moveLeft();            
        }
    }
}
module.exports = {
    Rover
}
