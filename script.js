let navLinks = document.querySelectorAll('.block-for-link > a');
let indicators = document.querySelectorAll('.indicator');
let logIndicators = document.querySelectorAll('.log-indicator');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let video = document.getElementById('video');
let overlay = document.getElementById('overlay');
let ourObjectsBlock = document.querySelectorAll('.carusel .imgs img');

let selectedIndicator = 0;
indicators[0].style.opacity = '50%';
let selectedLogIndicator = 0;
logIndicators[0].style.opacity = '50%';

navLinks.forEach(link => {
    link.addEventListener('focus', () => {
        let parent = link.parentElement;
        let polygon = document.createElement('img');
        polygon.src = 'img/Polygon 1.png';
        parent.appendChild(polygon);
    });

    link.addEventListener('blur', () => {
        let parent = link.parentElement;
        parent.innerHTML = '';
        parent.appendChild(link);
    });
});

leftArrow.addEventListener('click', () => {
    if(selectedIndicator === 0) {
        selectedIndicator = 2;
    } else {
        selectedIndicator--;
    }
    indicators.forEach(el => {
        el.style.opacity = '100%';
    });
    indicators[selectedIndicator].style.opacity = '50%';
});

rightArrow.addEventListener('click', () => {
    if(selectedIndicator === 2) {
        selectedIndicator = 0;
    } else {
        selectedIndicator++;
    }
    indicators.forEach(el => {
        el.style.opacity = '100%';
    });
    indicators[selectedIndicator].style.opacity = '50%';
});

overlay.addEventListener('click', () => {
  video.play();
  overlay.style.display = 'none';
});
video.addEventListener('pause', () => {
  overlay.style.display = 'flex';
});

document.querySelector('.log-left-arrow').addEventListener('click', () => {
    if(selectedLogIndicator === 0) {
        selectedLogIndicator = 2;
    } else {
        selectedLogIndicator--;
    }
    logIndicators.forEach(el => {
        el.style.opacity = '100%';
    });
    logIndicators[selectedLogIndicator].style.opacity = '50%';
});

document.querySelector('.log-right-arrow').addEventListener('click', () => {
    if(selectedLogIndicator === 2) {
        selectedLogIndicator = 0;
    } else {
        selectedLogIndicator++;
    }
    logIndicators.forEach(el => {
        el.style.opacity = '100%';
    });
    logIndicators[selectedLogIndicator].style.opacity = '50%';
});

ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10
    });

    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
      balloonContent: 'Пример метки'
    });

    myMap.geoObjects.add(myPlacemark);
  }

const openBtn = document.querySelector('.request-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const openBtns = document.querySelectorAll('a.callback');
const modal2 = document.getElementById('callbackModal');
const closeBtn2 = document.getElementById('closeCallbackModal');

openBtns.forEach(openBtn => {
    openBtn.addEventListener('click', () => {
        modal2.style.display = 'flex';
    });
})

closeBtn2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal2) {
    modal2.style.display = 'none';
  }
});