/*jshint esversion: 6 */

class MockedDataApi {

  constructor(hola){
    this.data = [
        {
            guess: ['donald trump'],
            hints: ['politician','republican','american','corrupt','sexist']
        }
    ];
  }

  checkGuess(name, index){
    return this.data[index].guess === name;
  }

  checkHint(name, index){
    let i = 0;
    const length = this.data[index].hints.length;
    while(i<length){
        if (this.data[index].hints[i] === name){
            return true
        }
    }
    return false
  }

}

export default MockedDataApi;