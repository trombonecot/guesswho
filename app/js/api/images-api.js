


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

  getImageMocked(name){
    return 'https://ugc.kn3.net/i/origin/https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/02/08/donald-trump-3.jpg'  
  }



}

export default ImagesApi;
