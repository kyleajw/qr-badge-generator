let qrcode = require('../node_modules/qrcode-generator/qrcode.js');

let typeNumber = 24;
let errorCorrectionLevel = 'L';


let qr = qrcode(typeNumber, errorCorrectionLevel);


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

        displayBadge(userInfo);
    }
}

function displayBadge(userData) {
    document.querySelector('.user-info').remove();
    qr.addData(`First Name: ${userData.firstName}\nLast Name: ${userData.lastName}\nEmail: ${userData.email}`);

    document.querySelector('.badge').innerHTML = `<h1 id="badge-full-name">${userData.firstName} ${userData.lastName}</h1>
    <h2 id="badge-email">${userData.email}</h2>`;
    if (userData.twitter != '') {
        document.querySelector('.badge').innerHTML += `<h2 id="badge-twitter">${userData.twitter}</h2>`;
        qr.addData(`\nTwitter: ${userData.twitter}`);
    }
    if (userData.github != '') {
        document.querySelector('.badge').innerHTML += `<h2 id="badge-github">${userData.github}</h2>`;
        qr.addData(`\nGithub: ${userData.github}`);
    }
    document.querySelector('.badge').innerHTML += `<div id="qr-placeholder"></div>`;
    document.querySelector('.badge').innerHTML += `<div id="bottom-block"></div>`;

    qr.make();
    document.getElementById('qr-placeholder').innerHTML = qr.createImgTag();


}



