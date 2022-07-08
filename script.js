const form = document.querySelector('#form');
const gmail = document.querySelector('#gmail');
const inputContainer = document.querySelector('#input-container');
const inputField = document.querySelector('#input-field');
const input = document.querySelector('#input');

form.addEventListener('submit', e => {
    e.preventDefault();

    const test = /^([\w]+)@[\w]+\.([\w]{2,3})$/.test(input.value);
    
    if(test) {
        e.currentTarget.submit();
    } else {
        inputContainer.classList.add('error-message');
        inputField.classList.add('md:border-red');
        inputField.classList.add('border-red');
        inputField.classList.remove('md:border-gray');
        inputField.classList.remove('border-gray');
    }
});

input.addEventListener('input', () => {
    const test = /^([\w]+)@[\w]+\.([\w]{2,3})$/.test(input.value);

    if(test) {
        inputContainer.classList.remove('error-message');
        inputField.classList.remove('md:border-red');
        inputField.classList.remove('border-red');
        inputField.classList.add('md:border-gray');
        inputField.classList.add('border-gray');
    }
    
});