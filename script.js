let slide, slide2, slide3, slide4, slide5, slide6, slide7 = 1;
let wonderGame = [];
let lozko = [];
let snake = [];
let kolko = [];
let weather = [];
let todo = [];
let waz = [];
let time = 2000;

wonderGame = loadImg("images/wonder_game/wonder", 13)
lozko = loadImg("images/lozko_dla_chorego/lozko", 12)
snake = loadImg("images/snake/snake", 6)
kolko = loadImg("images/kolko/kolko", 4)
weather = loadImg("images/weather/weather", 3)
todo = loadImg("images/todo/todo", 3)
waz = loadImg("images/waz/waz", 3)

function loadImg(path, size) {
    let temp = [];
    for(let i = 1; i <= size; i++) {
        if(i < 10) {
            temp[i] = `${path}0${i}.jpg`
        } else {
            temp[i] = `${path}${i}.jpg`
        }
    }
    return temp;
}

function changeImg() {
    document.slide.src = wonderGame[slide];
    document.slide2.src = lozko[slide2];
    document.slide3.src = snake[slide3];
    document.slide4.src = kolko[slide4];
    document.slide5.src = weather[slide5];
    document.slide6.src = todo[slide6];
    document.slide7.src = waz[slide7];

    if(slide < wonderGame.length - 1) {
        slide++;
    } else {
        slide = 1;
    }
    if(slide2 < lozko.length - 1) {
        slide2++;
    } else {
        slide2 = 1;
    }
    if(slide3 < snake.length - 1) {
        slide3++;
    } else {
        slide3 = 1;
    }
    if(slide4 < kolko.length - 1) {
        slide4++;
    } else {
        slide4 = 1;
    }
    if(slide5 < weather.length - 1) {
        slide5++;
    } else {
        slide5 = 1;
    }
    if(slide6 < todo.length - 1) {
        slide6++;
    } else {
        slide6 = 1;
    }
    if(slide7 < waz.length - 1) {
        slide7++;
    } else {
        slide7 = 1;
    }
    
    setTimeout("changeImg()", time)
}

window.onload = changeImg();