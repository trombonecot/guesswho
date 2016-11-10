


class ImagesApi {

  constructor() {
    this.name = 'Images';
  }

  getImage(name){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://www.faroo.com/api?q='+name+'&start=1&length=10&l=en&src=web&f=json', false);
    xhr.send();
    console.log(xhr.status);
    console.log(xhr);
  }



}

export default ImagesApi;
