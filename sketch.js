var coin, coinImg;
var bonus, bonusImg;
var backgroundImg;
var gc1, gc1Img, gc2, gc2Img, gc3, gc3Img, gc5, gc5Img, gc6, gc6Img;
var sh1, sh1Img, sh2, sh2Img, sh3, sh3Img, sh4, sh4Img, sh5, sh5Img, sh6, sh6Img, sh7, sh7Img, sh8, sh8Img;
var ml1, ml1Img, ml2, ml2Img, ml3, ml3Img, ml4, ml4Img, tk1, tk1Img, tk2, tk2Img, tk3, tk3Img;

function preload(){
    coinImg = loadAnimation("coin.png");
    bonusImg = loadAnimation("bonus points.png");

    gc1Img = loadAnimation("USA/grand canyon1.png");
    gc2Img = loadAnimation("USA/grand canyon2.png");
    gc3Img = loadAnimation("USA/grand canyon3.png");
    gc4Img = loadAnimation("USA/grand canyon4.png");
    gc5Img = loadAnimation("USA/grand canyon5.png");
    gc6Img = loadAnimation("USA/grand canyon6.png");

    sh1Img = loadAnimation("UK/stonehenge1.png");
    sh2Img = loadAnimation("UK/stonehenge2.png");
    sh3Img = loadAnimation("UK/stonehenge3.png");
    sh4Img = loadAnimation("UK/stonehenge4.png");
    sh5Img = loadAnimation("UK/stonehenge5.png");
    sh6Img = loadAnimation("UK/stonehenge6.png");
    sh7Img = loadAnimation("UK/stonehenge7.png");
    sh8Img = loadAnimation("UK/stonehenge8.png");

    ml1Img = loadAnimation("Russia/mystical lake1.png");
    ml2Img = loadAnimation("Russia/mystical lake2.png");
    ml3Img = loadAnimation("Russia/mystical lake3.png");
    ml4Img = loadAnimation("Russia/mystical lake4.png");
}

function setup(){
    createCanvas(1500, 800);

    gc1 = createSprite(500, 400);
    gc1.addAnimation("background", gc1Img);

}

function draw(){
    background(0);

    if (keyCode === 39){
        gc1.changeAnimation("background", gc2Img);
        // gc1.changeImage("background", gc3Img);
        // gc1.changeImage("background", gc4Img);
        // gc1.changeImage("background", gc5Img);
        // gc1.changeImage("background", gc6Img);
    }

    drawSprites();

    grandCanyon();

    noStroke();
    textSize(45);
    fill("white");
    text("Any idea what this place is?", 350, 100);
}

function grandCanyon(){
    
}