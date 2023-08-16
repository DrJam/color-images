const fs = require('fs');
const config = require('./config.json');

const Jimp = require('jimp');

const makeImage = (color) => {
    new Jimp(config.width, config.height, color, (err, image) => {
        if (err) {
            console.error(err);
        } else {
            image.write(`./output/${color}.png`, (err) => {
                if (err) console.error(err);
            });
        }
    });
}

config.colors.forEach(color => {
    makeImage(color);
});