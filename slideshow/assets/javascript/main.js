// A single object named slideshow that represents the data and functionality of a picture slideshow.
const slideshow = {

// An array called photoList that contains the names of the photos as strings
  photoList: ['https://placekitten.com/200/300', 'https://placekitten.com/100/150', 'https://placekitten.com/400/600'],

  // An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
  currentPhotoIndex: 0,

  // A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
  nextPhoto() {
    const next = this.currentPhotoIndex + 1;
    this.photoList[next] ? this.log(undefined, this.photoList[this.currentPhotoIndex = next]) : 
    this.log('End of slideshow');
  },

// A prevPhoto() function that does the same thing, but backwards.
  prevPhoto() {
    const prev = this.currentPhotoIndex -1;
    this.photoList[prev] ? this.log(undefined, this.photoList[this.currentPhotoIndex = prev]) : 
    this.log('End of slideshow');
  },

// A function getCurrentPhoto() that returns the current photo from the list.
  getCurrentPhoto() {
    return this.photoList[this.currentPhotoIndex];
  },

// Targeting the DOM
  seconds: 0,
  log(text, img) {
    setTimeout((function() {console.log(text ? text: img); if (img) {document.getElementById('slideshow').innerHTML = `<img src='${img}'>`}}), this.seconds * 2000);
    this.seconds++;
  }
}

console.log("\ngetCurrantphoto = \n" + slideshow.getCurrentPhoto());
console.log("\nnextPhoto = ")
slideshow.nextPhoto();
console.log("\ngetCurrantphoto = \n" + slideshow.getCurrentPhoto());
console.log("\nnextPhoto = ")
slideshow.nextPhoto();
console.log("\ngetCurrantphoto = \n" + slideshow.getCurrentPhoto());
console.log("\nnextPhoto = ")
slideshow.nextPhoto();
console.log("\ngetCurrantphoto = \n" + slideshow.getCurrentPhoto());
console.log("\nprevPhoto = ")
slideshow.prevPhoto();
console.log("\ngetCurrantphoto = \n" + slideshow.getCurrentPhoto());
console.log("\nprevPhoto = ")
slideshow.prevPhoto();
console.log("\ngetCurrantphoto = \n" + slideshow.getCurrentPhoto());
console.log("\nprevPhoto = ")
slideshow.prevPhoto();
console.log("\ngetCurrantphoto = \n" + slideshow.getCurrentPhoto());
