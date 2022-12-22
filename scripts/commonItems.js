function renderShowButton() {
    const showButton = document.createElement('div');
    showButton.className = 'button-show';
    showButton.classList.add('button-show--show')

    return showButton;
}

function closeModal() {
    modal.classList.add('modal--hide');
    modalImageContainer.querySelector('.modal__img').remove();
}

globalContainer.addEventListener('click', (e) => {
    containerClickHandler(e.target);
});

closeModalButton.addEventListener('click', closeModal);