let pwInput = document.querySelector('.form-control input#password');
let pwConfirmInput = document.querySelector('.form-control input#password-confirm');
let pwRuleLength = document.querySelector('.pw-rules .pw-length');
let pwUppercaseLength = document.querySelector('.pw-rules .pw-uppercase');
let pwLowercaseLength = document.querySelector('.pw-rules .pw-lowercase');
let pwNumberLength = document.querySelector('.pw-rules .pw-number');
let pwSpecialLength = document.querySelector('.pw-rules .pw-special');


function checkPassword(e){
    let ruleLengthRegex = /^.{8,30}$/;
    let ruleUppercaseRegex = /[A-Z]/;
    let ruleLowercaseRegex = /[a-z]/;
    let ruleNumberRegex = /[0-9]/;
    let ruleSpecialRegex = /[\W_]/;

    if (!ruleLengthRegex.test(pwInput.value)){
        pwRuleLength.classList.add('invalid');
    }
    else{
        pwRuleLength.classList.remove('invalid');
    }

    if (!ruleUppercaseRegex.test(pwInput.value)){
        pwUppercaseLength.classList.add('invalid');
    }
    else{
        pwUppercaseLength.classList.remove('invalid');
    }

    if (!ruleLowercaseRegex.test(pwInput.value)){
        pwLowercaseLength.classList.add('invalid');
    }
    else{
        pwLowercaseLength.classList.remove('invalid');
    }

    if (!ruleNumberRegex.test(pwInput.value)){
        pwNumberLength.classList.add('invalid');
    }
    else{
        pwNumberLength.classList.remove('invalid');
    }

    if (!ruleSpecialRegex.test(pwInput.value)){
        pwSpecialLength.classList.add('invalid');
    }
    else{
        pwSpecialLength.classList.remove('invalid');
    }
}

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

pwInput.addEventListener('input',checkPassword);
pwInput.addEventListener('input',checkPasswordMatch);
pwConfirmInput.addEventListener('input',checkPasswordMatch);
