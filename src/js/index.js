import '../scss/style.scss';
import './popup';
import './valid';

import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css';

// =========================
// КНОПКА "ЧИТАТЬ ДАЛЕЕ" — БЛОК РЕМОНТА
// =========================

var repairBlock = document.querySelector('.repair-block__description');
var repairBlockReadMoreBtn = document.querySelector('.repair-block__read-more-button');
var repairBlockReadMoreText = repairBlockReadMoreBtn ? repairBlockReadMoreBtn.querySelector('.read-more-button__text') : null;
var repairBlockReadMoreImg = repairBlockReadMoreBtn ? repairBlockReadMoreBtn.querySelector('.read-more-button__image') : null;

function toggleExpandBlock(block, textNode, imgNode, openedText, closedText) {
  if (!block || !textNode || !imgNode) return;

  var isExpanded = block.classList.toggle('expanded');
  imgNode.classList.toggle('expanded', isExpanded);
  textNode.textContent = isExpanded ? closedText : openedText;
}

function checkRepairBlockButtonVisibility() {
  if (!repairBlock || !repairBlockReadMoreBtn) return;

  if (repairBlock.scrollHeight > repairBlock.clientHeight) {
    repairBlockReadMoreBtn.style.display = 'flex';
  } else {
    repairBlockReadMoreBtn.style.display = 'none';
  }
}

if (repairBlockReadMoreBtn) {
  repairBlockReadMoreBtn.addEventListener('click', function () {
    toggleExpandBlock(
      repairBlock,
      repairBlockReadMoreText,
      repairBlockReadMoreImg,
      'Читать далее',
      'Скрыть'
    );
  });
}

// =========================
// СТАРТ
// =========================

window.addEventListener('load', function () {
  checkRepairBlockButtonVisibility();
  initSwipers();
});

window.addEventListener('resize', function () {
  checkRepairBlockButtonVisibility();
});

// =========================
//активный пункт
// =========================

const services = document.querySelectorAll('.services-list__service');

services.forEach(item => {
  item.addEventListener('click', () => {

    services.forEach(el => el.classList.remove('services-list__service--checked'));

    item.classList.add('services-list__service--checked');
  });
});

// =========================
//прокрутка мышкой (drag-scroll)
// =========================

const slider = document.querySelector('.services-list');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});