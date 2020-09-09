const body = document.querySelector('body');
const bgImgSection = document.querySelector('#backgroundImg');
const darkImgUrl = './bgChange/imgs/darkMode/';
const whiteImgUrl = './bgChange/imgs/whiteMode/';

// bgImgSection.style.backgroundImage = url();

/*
function randomDayImg() {
    let bgImges = [];
    const imgNum = 20;
    for(let i = 1; i < imgNum + 1; i++) {
        if(i < 10) {
            i = `0${i}`;
        }
        bgImges.push(`day${i}.jpg`);
    }
    const randomNum = Math.floor(Math.random() * bgImges.length);
    let bgImg = bgImges[randomNum];
    return bgImg;
}
*/

function randomDarkImg() {
    let bgImges = [];
    const imgNum = 20;
    for(let i = 1; i < imgNum + 1; i++) {
        if(i < 10) {
            i = `0${i}`;
        }
        bgImges.push(`dark${i}.jpg`);
    }
    const randomNum = Math.floor(Math.random() * bgImges.length);
    let bgImg = bgImges[randomNum];
    return bgImg;
}
function changeBgImg() {
    bgImgSection.style.backgroundImage = `url('${darkImgUrl}${randomDarkImg()}')`;
    bgImgSection.style.backgroundSize = 'cover';
    body.style.color = 'white';
};

window.onload = changeBgImg;

// changeBgImg();