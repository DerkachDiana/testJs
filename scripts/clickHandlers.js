function containerClickHandler(element) {
    if(element.classList.contains('photo-item')) {
        photoClickHandler(element);

        return;
    }

    if(!(element.classList.contains('button-show') || element.classList.contains('favorites-button'))) {
        return;
    }

    if(element.classList.contains('favorites-button')) {
        favoritesRouter(element);  

        return;
    }
    const parentContainer = element.parentNode;

    element.classList.toggle('button-show--show');
    element.classList.toggle('button-show--hide');

    if(parentContainer.classList.contains('user-item')) {
        userRouter(element);

        return;
    }

    if(parentContainer.classList.contains('album-item')) {
        albumRouter(element);
        
        return;
    }
}

function photoClickHandler(photo) {
    const image = document.createElement('img');
    image.src = photo.src;

    image.classList.add('modal__img');
    modal.classList.remove('modal--hide');

    modalImageContainer.appendChild(image);
}