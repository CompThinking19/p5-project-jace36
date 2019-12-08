let bg;
let y = 0;
//this is for the background, without it the background will not load at all

var gif_loadImg, gif_createImg;

function setup() {
  //I'm not sure if this is the correct parameters for the picture but hopefully it works
  gif_loadImg =
  loadImage("kirby.gif");
  gif_createImg =
  createImg("kirby.gif");
  //I'm hoping this will still allow the gif to move and not come up as a picture
  //this did not like my saved picture so I had to use a link to where I got the background
    bg = loadImage('https://i.imgur.com/8mUeio1.jpg');
    createCanvas(1600,900);
    //this sets up the backgrounds parameter
  }

function draw() {
  image(gif_loadImg, 50, 50);
  //this will allow the gif to follow the user's mouse
  //however, since the gif is a square it will sort of lag a little in front of the mouse or before it
  //which shouldn't be a problem aslong as the gif still moves with the mouse
  gif_createImg.position(mouseX, mouseY);
    background(bg);
}
