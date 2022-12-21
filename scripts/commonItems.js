function containerClickHandler(element) {
    if(!(element.classList.contains('button-show') || element.classList.contains('favorites-button'))) {
        return;
    }

    if(element.classList.contains('favorites-button')) {
        favoritesButtonClickHandler(element);  
    }

    element.classList.toggle('button-show--show');
    element.classList.toggle('button-show--hide');

    if(element.classList.contains('button-show--hide')) {
        insertRouter(element);
        return;
    }

    if(element.classList.contains('button-show--show')) {
        removeRouter(element);
        return;
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
    console.log(favoritesContainer);
    favoritesContainer.querySelector(`#${photoContainerId}`).remove();
}

function favoritesButtonClickHandler(button) {
    button.classList.toggle('favorites-button--empty');
    button.classList.toggle('favorites-button--active');

    if(button.classList.contains('favorites-button--active')) {
        addToFavorites(button);
        return;
    }

    removeFromFavorites(button);
}

