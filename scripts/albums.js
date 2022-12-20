async function renderAlbums(userContainer) {
    const albums = await getAlbums(userContainer.id);
    console.log(albums);
    const albumsContainer = document.createElement('div');

    albums.forEach((album) => {
        const albumItem = document.createElement('div');
        const showButton = document.createElement('div');
        const albumTitle = document.createElement('div');

        albumItem.id = album.id;

        showButton.className = 'button-show';
        showButton.classList.add('button-show--more');

        albumTitle.innerHTML = album.title;
        console.log(albumTitle);
        albumItem.appendChild(showButton);
        albumItem.appendChild(albumTitle);
        // albumsContainer.appendChild(albumContainer);

        userContainer.appendChild(albumItem);
    })

    
    console.log(userContainer);
}