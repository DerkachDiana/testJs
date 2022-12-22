function containerClickHandler(element) {
    if(element.classList.contains('photo-item')) {
        photoClickHandler(element);
    }

    if(!(element.classList.contains('button-show') || element.classList.contains('favorites-button'))) {
        return;
    }

    if(element.classList.contains('favorites-button')) {
        favoritesRouter(element);  
    }
    const parentContainer = element.parentNode;

    element.classList.toggle('button-show--show');
    element.classList.toggle('button-show--hide');

    if(parentContainer.classList.contains('user-item')) {
        userRouter(element);
    }

    if(parentContainer.classList.contains('album-item')) {
        albumRouter(element);
    }
}

function photoClickHandler(photo) {
    const image = document.createElement('img');
    image.src = photo.src;

    image.classList.add('modal__img');

    modalImageContainer.appendChild(image);
    modal.classList.remove('modal--hide');
}

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