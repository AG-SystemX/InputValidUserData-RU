const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
        input.classList.remove('text-field__input_valid');
        input.classList.remove('text-field__input_invalid');
        input.nextElementSibling.textContent = '';
        if (input.checkValidity()) {
            input.classList.add('text-field__input_valid');
            input.nextElementSibling.textContent = 'OK';
        } else {
            input.classList.add('text-field__input_invalid');
            input.nextElementSibling.textContent = input.validationMessage;
        }
    });
});