class TicTacToe {
  
    constructor() {
        this.firstSymbol = "x";
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.endGame = 0;
    }
  
  
    getCurrentPlayerSymbol() {
        return this.firstSymbol;
    }
  
  
    changePlayerSymbol() {
        return this.firstSymbol === "x" ? "o" : "x";
    }
  
  
    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.firstSymbol;
            this.firstSymbol = this.changePlayerSymbol();
            }
    }
  
  
    isFinished() {
        this.getWinner();
        this.isDraw();
        return this.endGame === 0 ? false : true;
    }

  
    checkIfWin(symbol) {
        if (
            this.field[0].every(elem => elem === symbol)                                                || 
            this.field[1].every(elem => elem === symbol)                                                || 
            this.field[2].every(elem => elem === symbol)                                                || 
            (this.field[0][0] === symbol && this.field[1][1] === symbol && this.field[2][2] === symbol) || 
            (this.field[0][2] === symbol && this.field[1][1] === symbol && this.field[2][0] === symbol) || 
            (this.field[0][0] === symbol && this.field[1][0] === symbol && this.field[2][0] === symbol) || 
            (this.field[0][1] === symbol && this.field[1][1] === symbol && this.field[2][1] === symbol) || 
            (this.field[0][2] === symbol && this.field[1][2] === symbol && this.field[2][2] === symbol)
        ) {
            return symbol;
        }
    }
  
  
    getWinner() {
        if (this.checkIfWin("x") === 'x') {
            this.endGame = 1;
            return "x";
        } else if (this.checkIfWin("o") === 'o') {
            this.endGame = 1;
            return "o";
        } else {
            return null;
        }
    }
  

    noMoreTurns() {
        if (
            this.field[0].includes(null) ||
            this.field[1].includes(null) ||
            this.field[2].includes(null)
        ) {
            return false;
        } else {
            return true;
        }
    }
  
  
    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            this.endGame = 2;
            return true;
        } else {
            return false;
        }
    }

  
    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
  }
  
  module.exports = TicTacToe;
