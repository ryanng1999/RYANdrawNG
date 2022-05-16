var images = [
  "./images/brooklynbridge.jpg",
  "./images/chinatown.png",
  "./images/railroadtracks.jpg",
  "./images/brightliner.png",
  "./images/1960sdiner.jpg",
  "./images/essentialworkers.png",
  "./images/shaul.png",
  "./images/freemoney.png",
  "./images/horses.jpg",
  "./images/birds.png",
  "./images/afternoonwalk.png",
  "./images/QCClibrary.png"
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
