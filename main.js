song = "";

function preload()
{
    song = loadSound("music.mp3");
    song = loadSound("golden.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCanvas(VIDEO);
    video.hide();
}

function draw()
{
    Image(video, 0, 0, 600, 500);
}
