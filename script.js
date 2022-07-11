const inputContainer = document.querySelector('#btn-change');

const rootElement = document.documentElement

const lightTheme = {
    '--background-color': '#fff',
    '--title-btn-color' : '#170C22',
    '--input-color' : '#fff',
    '--text-color' : '#000000',
    '--btn-color' : '#fff',
    '--box-color' : '#dddddd'
}


const darkTheme = {
    '--background-color': '#170C22',
    '--title-btn-color' : '#00F879',
    '--input-color' : '#58446C',
    '--text-color' : '#fff',
    '--btn-color' : '#170C22',
    '--box-color' : '#58446C'
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked;
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
})

function changeTheme(theme) {
    for (let prop in theme){
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property, value);
}


////////////////// login verification length /////////////

const [inputEmail, inputPassword] = document.querySelectorAll('input');

const btnLogin = document.querySelector('button')

function checkPassword(){
    if(inputEmail.value.length > 1 && inputPassword.value.length >= 8){
        btnLogin.removeAttribute('disabled');
        btnLogin.style.cursor = 'pointer';
    }else{
        btnLogin.setAttribute('disabled', 'disabled');
        btnLogin.style.cursor = "auto";
    }
}

inputPassword.addEventListener('input', checkPassword)