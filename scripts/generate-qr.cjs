const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

const qrItems = [
  {
    name: "sibo-testi-qr",
    url: "https://etiklab.net/blog/sibo-testi",
  },
  {
    name: "gastropanel-testi-qr",
    url: "https://etiklab.net/blog/gastropanel-testi",
  },
  {
    name: "ure-nefes-testi-qr",
    url: "https://etiklab.net/blog/ure-nefes-testi",
  },
  {
    name: "idrar-yolu-enfeksiyonu-qr",
    url: "https://etiklab.net/blog/idrar-yolu-enfeksiyonu",
  },
  {
    name: "whatsapp-qr",
    url: "https://wa.me/905338403273",
  },
];

const outputDir = path.join(__dirname, "..", "qr-codes");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function generateQRCodes() {
  for (const item of qrItems) {
    const filePath = path.join(outputDir, `${item.name}.png`);

    await QRCode.toFile(filePath, item.url, {
      type: "png",
      width: 1200,
      margin: 2,
      errorCorrectionLevel: "H",
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    console.log(`Created: ${filePath}`);
  }
}

generateQRCodes();
