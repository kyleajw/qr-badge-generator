import qrcode from './node_modules/qrcode-generator/qrcode';

qr = qrcode(4, 'L');
qr.addData('Hi');
qr.make();

document.getElementById('placeHolder').innerHTML = qr.createImgTag();