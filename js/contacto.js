const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('correo');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();


    if (usernameValue === '') {
        setErrorFor(username, 'El nombre del usuario no puede estar en blanco');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'El correo no puede estar en blanco');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Correo no válido');
    } else {
        setSuccessFor(email);
    }


}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-controles error';
    small.innerText = message;
}

contador = 0;

function setSuccessFor(input) {
    contador++;
    const formControl = input.parentElement;
    formControl.className = 'form-controles success';
    if (contador == 4) {
        alert("¡Campos Validados Correctamente!");
        console.log("Contador: ", contador);
    }

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});