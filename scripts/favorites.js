function favoritesRouter(button) {
    if(button.parentNode.parentNode.id === 'favorites-container') {
        makeFavoriteButtonEmptyInCatalog(button);
        removeFromFavorites(button);
        return;
    }

    if(button.parentNode.parentNode.classList.contains('photos-container')){
        button.classList.toggle('favorites-button--empty');
        button.classList.toggle('favorites-button--active');

        if(button.classList.contains('favorites-button--active')) {
            addToFavorites(button);
            return;
        }
    
        removeFromFavorites(button);
    }
}

function renderEmptyComponent() {
    const emptyBackground = document.createElement('div');
    favoritesContainer.appendChild(emptyBackground); 

    emptyBackground.classList.add('empty-background', 'empty-background--show');
}

function addToFavorites(button) {
    const photoItem = button.parentNode.cloneNode(true);
    const infobox = photoItem.querySelector('.photo-container__infobox--catalog');

    infobox.classList.remove('photo-container__infobox--catalog');
    infobox.classList.add('photo-container__infobox--favorites');

    favoritesContainer.appendChild(photoItem);
}

function removeFromFavorites(button) {
    const photoContainerId = button.parentNode.id;

    favoritesContainer.querySelector(`#${photoContainerId}`).remove();
}

function makeFavoriteButtonEmptyInCatalog(button) {
    const photoContainerId = button.parentNode.id;
    const photoInContainer = catalogContainer.querySelector(`#${photoContainerId}`);

    photoInContainer.querySelector('.favorites-button').classList.toggle('favorites-button--active');
    photoInContainer.querySelector('.favorites-button').classList.toggle('favorites-button--empty');
}

renderEmptyComponent();