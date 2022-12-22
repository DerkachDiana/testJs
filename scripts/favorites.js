function favoritesRouter(button) {
    if(button.parentNode.parentNode.id === 'favorites-container' && button.classList.contains('favorites-button')) {
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

function addToFavorites(button) {
    isEmptyComponentShow() && toggleEmptyComponent();
    
    const photoItem = button.parentNode.cloneNode(true);
    const infobox = photoItem.querySelector('.photo-container__infobox--catalog');

    infobox.classList.remove('photo-container__infobox--catalog');
    infobox.classList.add('photo-container__infobox--favorites');

    favoritesContainer.appendChild(photoItem);
}

function removeFromFavorites(button) {
    const photoContainerId = button.parentNode.id;

    favoritesContainer.querySelector(`#${photoContainerId}`).remove();
    isFavoritesEmpty() && toggleEmptyComponent();
}

function makeFavoriteButtonEmptyInCatalog(button) {
    const photoContainerId = button.parentNode.id;

    if(!catalogContainer.querySelector(`#${photoContainerId}`)) {
        return;
    }
    const photoInContainer = catalogContainer.querySelector(`#${photoContainerId}`);

    photoInContainer.querySelector('.favorites-button').classList.remove('favorites-button--active');
    photoInContainer.querySelector('.favorites-button').classList.add('favorites-button--empty');
}

function isFavoritesEmpty() {
    return Boolean(!favoritesContainer.querySelector('.photo-container')); 
}

function isEmptyComponentShow() {
    return Boolean(favoritesContainer.querySelector('.empty-background--show'));
}

function toggleEmptyComponent(){
    const emptyBackgroundComponent = favoritesContainer.querySelector('.empty-background-container');
    emptyBackgroundComponent.classList.toggle('empty-background--show');
    emptyBackgroundComponent.classList.toggle('empty-background--hide');
};

function renderEmptyComponent() {
    const emptyBackground = document.createElement('div');
    favoritesContainer.appendChild(emptyBackground); 

    emptyBackground.classList.add('empty-background', 'empty-background--show');
}