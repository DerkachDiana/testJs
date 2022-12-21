function usersContainerHandler(elements) {
    if(!elements.closest('.button-show')) {
        return;
    }

    const userContainer = elements.closest('.user-container');
    const albumsContainer = elements.parentNode.parentNode.querySelector('.albums-container');
    const buttonShow = elements.closest('.button-show');
    const parentsContainerName = buttonShow.parentNode.parentNode.className;

    if(parentsContainerName === 'user-container') {
        setShowLessButton(buttonShow); 
    }
    
    if(albumsContainer){
       albumsContainer.remove();
    }

    if(elements.closest('.button-show--less') && !albumsContainer) {
        renderAlbums(userContainer);
    }    
}

async function renderUsers() {
    const users = await getUsers();
    const usersContainer = document.getElementById('users-container');

    users.forEach((user) => {
        const userContainer = document.createElement('div');
        const userItem = document.createElement('div');
        const showButton = renderShowButton();
        const userName = document.createElement('div');

        userContainer.id = user.id;

        userContainer.className = 'user-container';
        userItem.className = 'rendered-item';

        userName.innerHTML = user.name;

        userItem.appendChild(showButton);
        userItem.appendChild(userName);
        userContainer.appendChild(userItem);
        usersContainer.appendChild(userContainer);
    });

    usersContainer.addEventListener('click', (e) => {
        usersContainerHandler(e.target);
        albumContainerHandler(e.target);
    })
}

renderUsers()