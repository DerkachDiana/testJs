function renderShowButton() {
    const showButton = document.createElement('div');
    showButton.className = 'button-show';
    showButton.classList.add('button-show--more')

    return showButton;
}

function setShowLessButton(buttonElement) {
    buttonElement.classList.toggle('button-show--more');
    buttonElement.classList.toggle('button-show--less');
}