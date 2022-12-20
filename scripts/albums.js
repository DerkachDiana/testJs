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