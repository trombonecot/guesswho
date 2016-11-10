/*jshint esversion: 6 */

class Enigma{

  constructor(number, src, width, height){
    this.number = number;
    this.width = width || 400;
    this.height = height || 400;
    this.src = src;

    var matrix = [];
    for(let i=0; i<number; i++) {
        matrix[i] = [];
        for(let j=0; j<number; j++) {
            matrix[i][j] = false;
        };
    };
    this.map = matrix;
  }

  getTile(x, y){
    return this.map[x][y];
  }

  setTile(x, y, value){
    this.map[x][y] = value;
  }
}

export default Enigma;