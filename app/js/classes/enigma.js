class Enigma{

  constructor(number, src){
    this.number = number;
    this.src = src;

    var matrix = [];
    for(let i=0; i<number; i++) {
        matrix[i] = [];
        for(let j=0; j<number; j++) {
            matrix[i][j] = false;
        }
    }

    this.map = matrix;
  }

  discoverTile(x, y){
    this.map[x][y] = true;
  }



}