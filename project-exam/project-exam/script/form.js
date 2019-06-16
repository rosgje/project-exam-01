// Contact form validation

var inputName = document.getElementById('input-name');
var inputEmail = document.getElementById('input-email');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form')

function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test(inputEmail.value) && inputMessage.value.trim() !== "") {
        button.style.backgroundColor = "#fff";
        button.style.color = "#333";
        button.disabled = false;
    } else {
        button.style.backgroundColor = "#333";
        button.style.color = "#fff";
        button.disabled = true;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Submitted');
})

// Submit button trigger

function submitTrigger() {
  document.getElementById("submit-text").innerHTML = "Your message has been sent! We will get back to you. ";
}