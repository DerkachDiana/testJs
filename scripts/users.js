function setShowLessButton(buttonElement) {
    buttonElement.classList.toggle('button-show--more');
    buttonElement.classList.toggle('button-show--less');
}

function usersContainerHandler(elements) {
    if(!elements.closest('.button-show')) {
        return;
    }
    const userContainer = elements.closest('.user-container');

    setShowLessButton(elements.closest('.button-show')); 
    renderAlbums(userContainer);
    
}

async function renderUsers() {
    const users = await getUsers();
    const usersContainer = document.getElementById('users-container');

    users.forEach((user) => {
        const userContainer = document.createElement('div');
        const userItem = document.createElement('div');
        const showButton = document.createElement('div');
        const userName = document.createElement('div');

        userContainer.id = user.id;

        userContainer.className = 'user-container';
        userItem.className = 'user-item';
        showButton.className = 'button-show';
        showButton.classList.add('button-show--more');

        userName.innerHTML = user.name;

        userItem.appendChild(showButton);
        userItem.appendChild(userName);
        userContainer.appendChild(userItem);
        usersContainer.appendChild(userContainer);
    });

    usersContainer.addEventListener('click', (e) => usersContainerHandler(e.target))
}

renderUsers()