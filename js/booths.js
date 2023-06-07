window.onload = function() {
    var elements = document.getElementsByName('ClickableElement');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', showDetails);
    }

    var closeButtons = document.getElementsByClassName('close');
    for (var j = 0; j < closeButtons.length; j++) {
      closeButtons[j].addEventListener('click', closeDetails);
    }
};

function showDetails() {
var details = this.nextElementSibling;
details.style.display = 'block';
}

function closeDetails() {
var modal = this.parentElement.parentElement;
modal.style.display = 'none';
}
