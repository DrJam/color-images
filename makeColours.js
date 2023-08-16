const fs = require('fs');
const config = require('./config.json');

const Jimp = require('jimp');
const { startsWith } = require('lodash');

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
    if (!startsWith(color, '#')) {
        color = `#${color}`;
    }
    if (!color.match(/^#[0-9a-f]{6}$/i)) {
        console.error(`Invalid color: ${color}`);
        return;
    }

    makeImage(color);
});