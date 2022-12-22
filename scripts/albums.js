function albumRouter(buttonElement) {
    if(buttonElement.classList.contains('button-show--hide')) {
        insertPhotos(buttonElement.parentNode.parentNode);
        return;
    }

    if(buttonElement.classList.contains('button-show--show')) {
        removePhotos(buttonElement.parentNode.parentNode);
        return;
    }
}

function insertAlbums(userContainer) {
    if(!userContainer.querySelector('.albums-container')){
        
        renderAlbums(userContainer);
    } 
}

function removeAlbums(userContainer) {
    userContainer.querySelector('.albums-container').remove();
}

function albumItemCreator(album) {
    const albumContainer = document.createElement('div');
    const albumItem = document.createElement('div');
    const showButton = renderShowButton()
    const albumTitle = document.createElement('div');

    albumContainer.dataset.id = album.id;

    albumItem.classList.add('album-item');
    albumContainer.classList.add('album-container', 'offset-left');

    albumTitle.innerText = album.title;
    

    albumItem.appendChild(showButton);
    albumItem.appendChild(albumTitle);
    albumContainer.appendChild(albumItem);

    return albumContainer;
}

async function renderAlbums(userContainer) {
    const albums = await getAlbums(userContainer.dataset.id);

    const albumsContainer = document.createElement('div');
    
    albumsContainer.classList.add('albums-container');
    
    albums.forEach((album) => {
        const albumContainer = albumItemCreator(album);
        
        albumsContainer.appendChild(albumContainer);
    })

    userContainer.appendChild(albumsContainer);

    }