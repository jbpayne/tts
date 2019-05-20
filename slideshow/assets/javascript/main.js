// A single object named slideshow that represents the data and functionality of a picture slideshow.
const slideshow = {

  // An array called photoList that contains the names of the photos as strings
  photoList: ['https://placekitten.com/200/300', 'https://placekitten.com/100/150', 'https://placekitten.com/400/600', 'https://placekitten.com/400/400', 'https://placekitten.com/300/300', 'https://placekitten.com/200/200'],

  // An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
  currentPhotoIndex: 0,

  //An empty property named playInterval
  playInterval: '',

  // A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
  nextPhoto() {
    const next = this.currentPhotoIndex + 1;
    this.photoList[next] ? this.log(this.photoList[this.currentPhotoIndex = next]) :
    this.pause();
  },

  // A prevPhoto() function that does the same thing, but backwards.
  prevPhoto() {
    const prev = this.currentPhotoIndex - 1;
    this.photoList[prev] ? this.log(this.photoList[this.currentPhotoIndex = prev]) :
    this.pause();
  },

  // A function getCurrentPhoto() that returns the current photo from the list.
  getCurrentPhoto() {
    return this.photoList[this.currentPhotoIndex];
  },

  // A pause() function that stops the slideshow (automatically if it gets to the end)
  pause() {
    clearInterval(this.playInterval);
    console.log('End of slideshow');
  },

  // Targeting the DOM
  log(img) {
    console.log(img);
  // Comment the line below if running in node
    document.getElementById('slideshow').innerHTML = `<img src='${img}'>`
  },

  // A play() function that moves to the next photo every 2000ms until the end.
  play() {
    this.log(this.photoList[this.currentPhotoIndex]);
    this.playInterval = setInterval(this.nextPhoto.bind(this), 2000);
  },
}

slideshow.play()