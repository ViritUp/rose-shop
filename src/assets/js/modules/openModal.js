export default function openModal(type) {

  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');
  modalWindow.setAttribute('data-modal', '');

  if (type == 'request-call') {
    modalWindow.classList.add('modal--request-call');
    modalWindow.innerHTML = `
      <div class="modal-wrapper">
        <button class="modal__close-btn" data-modal="close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967L6.53033 6.53033ZM5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L5.46967 5.46967ZM11.5303 1.53033C11.8232 1.23744 11.8232 0.762563 11.5303 0.46967C11.2374 0.176777 10.7626 0.176777 10.4697 0.46967L11.5303 1.53033ZM6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.53033 5.46967ZM10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L10.4697 11.5303ZM5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L5.46967 6.53033ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 6.53033L11.5303 1.53033L10.4697 0.46967L5.46967 5.46967L6.53033 6.53033ZM5.46967 6.53033L10.4697 11.5303L11.5303 10.4697L6.53033 5.46967L5.46967 6.53033ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z" fill="#505567"/>
          </svg>										
        </button>
        <h3 class="modal__title">Замовити дзвінок</h3>
        <div class="modal__text">Залишіть свій номер телефону і найближчим часом ми вам передзвонимо</div>
        <form class="modal-form">
          <div class="modal__input-wrapper">
            <label class="modal__label" for="phone">Телефон</label>
            <input class="modal__input modal__input--phone" type="text" id="phone" name="phone" placeholder="+38 (0__) ___ - __ - __">
          </div>
          <button class="modal__send-btn btn-blue btn-blue--full" type="submit">Надіслати</button>
        </form>
      </div>
    `;

  }

  document.body.appendChild(modalWindow);
  setTimeout(() => {
    modalWindow.classList.add('active');
  }, 10);
}
