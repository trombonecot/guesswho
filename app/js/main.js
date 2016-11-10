/*jshint esversion: 6 */

import ImagesApi from './api/images-api.js';
import Enigma from './classes/enigma.js';

require('./libs/d3.js')

window.onload = function() { 

  const number = 5;
  const width = 600;
  const height = 600;

  const imagesApi = new ImagesApi();
  const enigma = new Enigma(number,'', width, height);
  const imageSrc = imagesApi.getImageMocked();

  let contenidor = document.getElementById("contenidor");

  const layer = d3.select("#contenidor").append("svg")
                        .attr("width", width)
                        .attr("height", height);

  layer.append("svg:image")
      .attr("xlink:href", imageSrc)
      .attr("width", width)
      .attr("height", height);

  
  enigma.setTile(4,2, true);

  console.log(!enigma.getTile(2,1));

  let i = 0;
  let j= 0;
  const small_width = width/number;
  const small_height = height/number;

  
  while( i < number){
    while (j <number){

      if (!enigma.getTile(i,j)){
        layer.append("rect").attr("x", i*small_width)
                          .attr("y", j*small_height)
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

};
