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
    const photoItem = document.createElement('div');
    const photoElement = document.createElement('img');
    const favorietsButton = document.createElement('div');

    favorietsButton.classList.add('favoriets-button', 'favoriets-button--empty');
    photoItem.className = 'photo-container';
    photoElement.className = 'photo-item';
    photoElement.src = photo.url;

    photoItem.appendChild(photoElement);
    photoItem.appendChild(favorietsButton);

    return photoItem;
}