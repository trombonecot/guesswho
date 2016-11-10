/*jshint esversion: 6 */

import ImagesApi from './api/images-api.js';
import MockedData from './api/mocked-data-api.js';
import Enigma from './classes/enigma.js';

require('./libs/d3.js');
require('../css/main.css');

window.onload = function() { 

  const number = 5;
  const width = 600;
  const height = 600;

  const imagesApi = new ImagesApi();
  const enigma = new Enigma(number,'', width, height);
  
  const imageSrc = imagesApi.getImageMocked();

  const contenidor = document.getElementById("contenidor");
  const hintButton = document.getElementById("hint-button");
  const guessButton = document.getElementById("guess-button");
  const hintInput = document.getElementById("hint");
  const guessInput = document.getElementById("guess");

  const layer = d3.select("#contenidor").append("svg")
                        .attr("width", width)
                        .attr("height", height);

  layer.append("svg:image")
      .attr("xlink:href", imageSrc)
      .attr("width", width)
      .attr("height", height);

  
  enigma.setTile(4,2, true);

  let i = 0;
  let j= 0;
  const small_width = width/number;
  const small_height = height/number;

  const data = [
      {
          guess: ['donald trump'],
          hints: ['politician','republican','american','corrupt','sexist']
      }
  ];

  
  while( i < number){
    while (j <number){

      if (!enigma.getTile(i,j)){
        layer.append("rect").attr("x", i*small_width)
                          .attr("y", j*small_height)
                          .attr("id", i+'.'+j)
                          .attr("width", small_width)
                          .attr("height", small_height)
                          .attr("stroke-width",0)
                          .attr("fill", "black");
      }
      

      j += 1;
    }
    i += 1;
    j = 0;
  }

  contenidor.setAttribute("src", imageSrc);

  hintButton.onclick = function(){
    let text = hintInput.value;
    console.log(text);
    console.log(hintInput);

    if (checkHint(text, 0)){
      hintInput.className = "success";

      const rand1 = Math.floor((Math.random() * number));
      const rand2 = Math.floor((Math.random() * number));

      console.log(rand1);
      console.log(rand2);

      enigma.setTile(rand1,rand2, true);

      let element = document.getElementById(rand1+"."+rand2);
      console.log(element);
      element.parentNode.removeChild(element);

      
    }else{
      hintInput.className = "error";
    }
  };

  guessButton.onclick = function(){
    console.log("guess!");
  };


  let checkGuess = function(name, index){
    return data[index].guess === name;
  }

  let checkHint = function(name, index){
    let i = 0;
    console.log(data);
    const length = data[index].hints.length;
    while(i<length){
        if (data[index].hints[i] === name){
            return true
        }
        i += 1;
    }
    return false
  }

};
