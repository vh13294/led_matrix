import Jimp from 'jimp';

const white = '#FFFFFF';
new Jimp(6, 8, white, (err, image) => {
    const black = 0x000000;
    image.setPixelColor(black, 0, 6);
    image.setPixelColor(black, 1, 5);
    image.setPixelColor(black, 1, 7);
    image.setPixelColor(black, 2, 7);
    image.setPixelColor(black, 3, 7);
    image.setPixelColor(black, 3, 6);
    image.setPixelColor(black, 2, 5);
    image.setPixelColor(black, 3, 5);
    image.setPixelColor(black, 3, 4);
    image.setPixelColor(black, 3, 3);
    image.setPixelColor(black, 2, 2);
    image.setPixelColor(black, 1, 1);
    image.setPixelColor(black, 1, 0);
    image.setPixelColor(black, 2, 0);
    image.setPixelColor(black, 3, 0);
    image.setPixelColor(black, 4, 0);
    image.setPixelColor(black, 0, 3);
    image.setPixelColor(black, 1, 3);
    image.setPixelColor(black, 2, 3);
    image.setPixelColor(black, 3, 3);
    image.setPixelColor(black, 4, 3);
    image.setPixelColor(black, 5, 3);

    image.writeAsync('image.png');
});