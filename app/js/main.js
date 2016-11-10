import ImagesApi from './api/images-api.js';
import Enigma from './classes/enigma.js';

window.onload = function() { 

  const imagesApi = new ImagesApi();
  const imageSrc = imagesApi.getImageMocked();

  let contenidor = document.getElementById("contenidor");
  contenidor.setAttribute("src", imageSrc);

};
