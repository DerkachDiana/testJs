function containerClickHandler(element) {
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

function renderShowButton() {
    const showButton = document.createElement('div');
    showButton.className = 'button-show';
    showButton.classList.add('button-show--show')

    return showButton;
}

function addToFavorites(button) {
    const favoritesContainer = document.getElementById('favorites-container');
    const photoItem = button.parentNode.cloneNode(true);

    favoritesContainer.appendChild(photoItem);
}

function removeFromFavorites(button) {
    const favoritesContainer = document.getElementById('favorites-container');
    const photoContainerId = button.parentNode.id;

    favoritesContainer.querySelector(`#${photoContainerId}`).remove();
}

