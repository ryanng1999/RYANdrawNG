var images = [
  "./images/Neutronized.jpg",
  "./images/DolaSunInspired.jpeg",
  "./images/WonderfulChristmastime.png",
  "./images/R211.png",
  "./images/R40Slant.jpg",
  "./images/R32.jpg",
  "./images/Spidey.png",
  "./images/CollegeLife.jpeg",
  "./images/DiningRoom.jpeg",
  "./images/deGrom.jpg",
  "./images/Chelsea.jpg"
];

var num = 0;  // num holds the current image

function nextImage()
{
  var slider = document.getElementById('ImageSlider');
  num++;

  // is the image's new position greater or equal to the amount of images used?
  if(num >= images.length)  // images is the defined arary
  {
    num = 0;
    // if the condition is true, num is defined to hold to first image of the slider
  }
  slider.src = images[num];
}

function previousImage()
{
  var slider = document.getElementById('ImageSlider');
  num--;

  // is the image's new position before or after the first image?
  if(num < 0) // images is the defined array
  {
    num = images.length-1;
    // if the condition is true, num is defined to hold to last image of the slider
  }
  slider.src = images[num];
}
