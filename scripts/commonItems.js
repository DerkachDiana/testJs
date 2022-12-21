function renderShowButton() {
    const showButton = document.createElement('div');
    showButton.className = 'button-show';
    showButton.classList.add('button-show--show')

    return showButton;
}

function favorietsButtonClickHandler(button) {
    button.classList.toggle('favoriets-button--empty');
    button.classList.toggle('favoriets-button--active');
}

