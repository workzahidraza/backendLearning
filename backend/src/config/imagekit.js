const ImageKit = require("@imagekit/nodejs");


const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

module.exports = client;
