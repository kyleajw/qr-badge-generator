import * as qr from 'qrcode-generator';

qr = qrcode(4, 'L');
qr.addData('Hi');
qr.make();

document.getElementById('placeHolder').innerHTML = qr.createImgTag();