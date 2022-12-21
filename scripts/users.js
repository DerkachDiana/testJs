function removeRouter(buttonElement) {
    const parentContainer = buttonElement.parentNode;

    if(parentContainer.classList.contains('user-item')) {
        removeAlbums(parentContainer.parentNode);
    }
    if(parentContainer.classList.contains('album-item')) {
        removePhotos(parentContainer.parentNode);
    }
}

function insertRouter(buttonElement) {
    const parentContainer = buttonElement.parentNode;

    if(parentContainer.classList.contains('user-item')) {
        insertAlbums(parentContainer.parentNode);
    }
    if(parentContainer.classList.contains('album-item')) {
        insertPhotos(parentContainer.parentNode);
    }
}

function containerClickHandler(element) {
    if(!element.classList.contains('button-show')) {
        return;
    }

    if(element.classList.contains('button-show--show')) {
        insertRouter(element);
        element.classList.toggle('button-show--show');
        element.classList.toggle('button-show--hide');
        return;
    }

    if(element.classList.contains('button-show--hide')) {
        removeRouter(element);
        element.classList.toggle('button-show--hide');
        element.classList.toggle('button-show--show');
        return;
    }
}

async function renderUsers() {
    const users = await getUsers();
    const container = document.getElementById('container');

    users.forEach((user) => {
        const userContainer = userItemCreator(user);
        container.appendChild(userContainer);
    });

    container.addEventListener('click', (e) => {
        containerClickHandler(e.target);
    })
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