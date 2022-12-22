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

function photoItemCreator(photo) {
    const photoContainer = document.createElement('div');
    const photoElement = document.createElement('img');
    const favoritesButton = document.createElement('div');
    const infoBox = document.createElement('div');

    photoContainer.id = 'photo-' + photo.id;
    infoBox.innerText = photo.title;

    favoritesButton.classList.add('favorites-button', 'favorites-button--empty');
    photoContainer.classList.add('photo-container');
    infoBox.classList.add('photo-container__infobox--catalog')
    photoElement.className = 'photo-item';

    photoElement.src = photo.url;

    photoContainer.appendChild(photoElement);
    photoContainer.appendChild(favoritesButton);
    photoContainer.appendChild(infoBox);

    return photoContainer;
}