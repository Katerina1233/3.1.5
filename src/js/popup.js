document.addEventListener('DOMContentLoaded', function () {

  // ============================
  // ЭЛЕМЕНТЫ
  // ============================

  // Боковое меню
  var sideMenu = document.querySelector('.side-menu');
  var openMenuBtn = document.querySelector('.header__burger');
  var closeMenuBtn = document.querySelector('.button--close-menu');

  // Модалка "Обратная связь"
  var feedbackModal = document.querySelector('.feedback');
  var feedbackOpenBtns = document.querySelectorAll('.button--feedback');
  var feedbackCloseBtn = document.querySelector('.button--close-feedback');

  // Модалка "Заказать звонок"
  var callbackModal = document.querySelector('.callback');
  var callbackOpenBtns = document.querySelectorAll('.button--call');
  var callbackCloseBtn = document.querySelector('.button--close-callback');


  // ============================
  // ФУНКЦИИ
  // ============================

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  function closeAllModals() {
    if (feedbackModal) feedbackModal.classList.remove('open');
    if (callbackModal) callbackModal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }


  // ============================
  // БОКОВОЕ МЕНЮ
  // ============================

  if (openMenuBtn && sideMenu) {
    openMenuBtn.addEventListener('click', function () {
      sideMenu.classList.add('open');
      document.body.classList.add('no-scroll');
    });
  }

  if (closeMenuBtn && sideMenu) {
    closeMenuBtn.addEventListener('click', function () {
      sideMenu.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  }


  // ============================
  // МОДАЛКА ОБРАТНОЙ СВЯЗИ
  // ============================

  feedbackOpenBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeAllModals();
      openModal(feedbackModal);
    });
  });

  if (feedbackCloseBtn) {
    feedbackCloseBtn.addEventListener('click', function () {
      closeModal(feedbackModal);
    });
  }


  // ============================
  // МОДАЛКА ЗАКАЗА ЗВОНКА
  // ============================

  callbackOpenBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeAllModals();
      openModal(callbackModal);
    });
  });

  if (callbackCloseBtn) {
    callbackCloseBtn.addEventListener('click', function () {
      closeModal(callbackModal);
    });
  }


  // ============================
  // ЗАКРЫТИЕ ПО КЛИКУ ВНЕ
  // ============================

  document.addEventListener('click', function (e) {

    // Закрытие бокового меню
    if (
      sideMenu &&
      sideMenu.classList.contains('open') &&
      !e.target.closest('.side-menu') &&
      !e.target.closest('.header__burger')
    ) {
      sideMenu.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }

    // Закрытие feedback
    if (
      feedbackModal &&
      feedbackModal.classList.contains('open') &&
      !e.target.closest('.feedback__main') &&
      !e.target.closest('.button--feedback')
    ) {
      closeModal(feedbackModal);
    }

    // Закрытие callback
    if (
      callbackModal &&
      callbackModal.classList.contains('open') &&
      !e.target.closest('.callback__main') &&
      !e.target.closest('.button--call')
    ) {
      closeModal(callbackModal);
    }
  });

});