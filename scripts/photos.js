function insertPhotos(albumContainer) {
    if(!albumContainer.querySelector('.photos-container')){
        renderPhotos(albumContainer);
    }
}

function removePhotos(albumContainer) {
    albumContainer.querySelector('.photos-container').remove();
}

async function renderPhotos(albumContainer) {
    const photos = await getPhotos(albumContainer.dataset.id);
    const photosContainer = document.createElement('div');

    photosContainer.classList.add('photos-container', 'offset-left');
    
    photos.forEach(photo => {
        const photoItem = photoItemCreator(photo);

        photosContainer.appendChild(photoItem);
    });
    albumContainer.appendChild(photosContainer);
}

function isPhotoInFavorites(photoId) {
    const favoritesChildren = Array.from(favoritesContainer.children);

    return Boolean(favoritesChildren.find((elem) => elem.id === photoId));
}

function photoItemCreator(photo) {
    const photoContainer = document.createElement('div');
    const favoritesButton = document.createElement('div');
    const infoBox = document.createElement('div');
    const photoElement = document.createElement('img');
    
    favoritesButton.classList.add('favorites-button');
    photoContainer.classList.add('photo-container');
    infoBox.classList.add('photo-container__infobox--catalog');
    photoElement.classList.add('photo-item');

    photoContainer.id = 'photo-' + photo.id;

    isPhotoInFavorites(photoContainer.id) ? favoritesButton.classList.add('favorites-button--active')
    : favoritesButton.classList.add('favorites-button--empty');
    
    infoBox.innerText = photo.title;
    photoElement.src = photo.url;

    photoContainer.appendChild(photoElement);
    photoContainer.appendChild(favoritesButton);
    photoContainer.appendChild(infoBox);

    return photoContainer;
}