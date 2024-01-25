pwInput = document.querySelector('.form-control input#password');
pwConfirmInput = document.querySelector('.form-control input#password-confirm');



function checkPasswordMatch(e){
    if (pwInput.value!==pwConfirmInput.value){
        pwConfirmInput.classList.add('unmatched');
        pwConfirmInput.setCustomValidity("Passwords do not match!");
    }
    else{
        pwConfirmInput.classList.remove('unmatched');
        pwConfirmInput.setCustomValidity("");
    }
}

pwInput.addEventListener('input',checkPasswordMatch);
pwConfirmInput.addEventListener('input',checkPasswordMatch);
