let qrcode = require('../node_modules/qrcode-generator/qrcode.js');

let typeNumber = 12;
let errorCorrectionLevel = 'L';




document.querySelector('.submit-info').addEventListener('click', function (e) {
    e.preventDefault();
    createQRCode();
})

function createQRCode() {
    const userInfo = {
        firstName: document.querySelector('#first-name').value,
        lastName: document.querySelector('#last-name').value,
        email: document.querySelector('#email').value,
        twitter: document.querySelector('#twitter').value,
        github: document.querySelector('#github').value
    }
    // console.log(userInfo);
    if (userInfo.firstName === '' || userInfo.lastName === '' || userInfo.email === '') {

    } else {
        let qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(`First Name: ${userInfo.firstName}\nLast Name: ${userInfo.lastName}\nEmail: ${userInfo.email}\nTwitter: ${userInfo.twitter}\nGithub: ${userInfo.github}`);
        qr.make();
        document.getElementById('placeHolder').innerHTML = qr.createImgTag();
    }
}





