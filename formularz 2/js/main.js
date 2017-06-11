'use strict';

var zgodaWszystko = document.getElementById('wszystkie-zgody');
var checkboxes = document.querySelectorAll('input[type=checkbox]');


function checkboxState(state) {

for(var i = 0; i < checkboxes.length -1; i++) {
    checkboxes[i].checked = zgodaWszystko.checked;
    checkboxes[i].disabled = zgodaWszystko.checked;
  }
};

zgodaWszystko.onchange = function() {
    checkboxState(this.checked);
};

var send = document.getElementById('wyslij');

send.addEventListener('click', validateForm);

function validateForm(event) {
    
    var textInputs = document.querySelectorAll('input[type=text]');
    
    for(var i = 0; i < textInputs.length; i++) {
        if(textInputs[i].value == '') {
                event.preventDefault();
            
                if(textInputs[i].nextElementSibling.tagName == 'P') {
                    continue;
                }
            
                createAlert(textInputs[i], i);
        } else if (textInputs[i].nextElementSibling.tagName == 'P')
           { document.getElementById('alert-' + i).remove();
        }
    }
}

function createAlert(element, id) {
    var message = document.createElement('p');
    message.id = 'alert-' + id;
    message.innerHTML = 'To pole jest wymagane';
    element.parentNode.insertBefore(message, element.nextSibling);
}

