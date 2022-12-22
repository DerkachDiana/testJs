function userRouter(buttonElement) {
    if(buttonElement.classList.contains('button-show--hide')) {
        insertAlbums(buttonElement.parentNode.parentNode);
        return;
    }

    if(buttonElement.classList.contains('button-show--show')) {
        removeAlbums(buttonElement.parentNode.parentNode);
        return;
    }
}

async function renderUsers() {
    const users = await getUsers();

    users.forEach((user) => {
        const userContainer = userItemCreator(user);
        catalogContainer.appendChild(userContainer);
    });
}

function userItemCreator(user) {
    const userContainer = document.createElement('div');
    const userItem = document.createElement('div');
    const showButton = renderShowButton();
    const userName = document.createElement('div');

    userName.innerText = user.name;
    userContainer.dataset.id = user.id;

    userContainer.className = 'user-container';
    userItem.classList.add('user-item');

    userItem.appendChild(showButton);
    userItem.appendChild(userName);
    userContainer.appendChild(userItem);
    
    return userContainer;
}

renderUsers()