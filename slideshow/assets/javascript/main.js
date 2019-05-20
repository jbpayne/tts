const slideshow = {
  photoList: ['https://placekitten.com/200/300', 'https://placekitten.com/100/150', 'https://placekitten.com/400/600'],
  currentPhotoIndex: 0,
  nextPhoto() {
    const next = this.currentPhotoIndex + 1;
    this.photoList[next] ? console.log(this.photoList[this.currentPhotoIndex = next]) : 
    console.log('End of slideshow');
  },
  prevPhoto() {
    const prev = this.currentPhotoIndex -1;
    this.photoList[prev] ? console.log(this.photoList[this.currentPhotoIndex = prev]) : 
    console.log('End of slideshow');
  },
  getCurrentPhoto() {
    return this.photoList[this.currentPhotoIndex];
  }
}

console.log("getCurrantphoto = " + slideshow.getCurrentPhoto());
slideshow.nextPhoto();
console.log("getCurrantphoto = " + slideshow.getCurrentPhoto());
slideshow.nextPhoto();
console.log("getCurrantphoto = " + slideshow.getCurrentPhoto());
slideshow.nextPhoto();
console.log("getCurrantphoto = " + slideshow.getCurrentPhoto());
slideshow.prevPhoto();
console.log("getCurrantphoto = " + slideshow.getCurrentPhoto());
slideshow.prevPhoto();
console.log("getCurrantphoto = " + slideshow.getCurrentPhoto());
slideshow.prevPhoto();
console.log("getCurrantphoto = " + slideshow.getCurrentPhoto());
slideshow.prevPhoto();
