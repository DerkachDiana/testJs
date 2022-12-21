async function albumContainerHandler(elements) {
    if(!elements.closest('.button-show')) {
        return;
    }

    const albumContainer = elements.closest('.albums-container');
    const photosContainer = elements.parentNode.parentNode.querySelector('.photos-container');
    const buttonShow = elements.closest('.button-show');
    const album = buttonShow.parentNode;
    const parentsContainerName = buttonShow.parentNode.parentNode.className;

    if(parentsContainerName === 'albums-container') {
        setShowLessButton(buttonShow); 
    }
    
    if(photosContainer){
        photosContainer.remove();
    }

    if(elements.closest('.button-show--less') && !photosContainer && parentsContainerName === 'albums-container') {
        console.log(album.id)
        const photos = await getPhotos(album.id);
        console.log(photos)
        const photosContainer = renderPhotos(photos)

        albumContainer.appendChild(photosContainer);
    }    
}

function renderPhotos(photos) {
    console.log('one');
   const photosContainer = document.createElement('div');

   photosContainer.className = 'photos-container';
  
   photos.forEach(photo => {
       const photoItem = renderPhotoItem(photo);

       photosContainer.appendChild(photoItem);
   });

   return photosContainer;
}

function renderPhotoItem(photo) {
    const photoElement = document.createElement('img');
    photoElement.className = 'photo-item';
    photoElement.src = photo.url;

    return photoElement;
}


function renderAlbumItem(album) {
    const albumItem = document.createElement('div');
    const showButton = renderShowButton()
    const albumTitle = document.createElement('div');

    albumItem.id = album.id;

    albumItem.classList.add('rendered-item');
    albumItem.classList.add('album-padding');

    albumTitle.innerHTML = album.title;

    albumItem.appendChild(showButton);
    albumItem.appendChild(albumTitle);

    return albumItem;
}

async function renderAlbums(userContainer) {
    const albums = await getAlbums(userContainer.id);
    const albumsContainer = document.createElement('div');

    albumsContainer.className = 'albums-container';

    albums.forEach((album) => {
        const albumItem = renderAlbumItem(album);
        albumsContainer.appendChild(albumItem);
    })

    userContainer.appendChild(albumsContainer);

    }