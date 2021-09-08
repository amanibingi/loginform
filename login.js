let email = document.getElementById('email');
let passward = document.getElementById('passward');
let span = document.getElementsByTagName('span');

email.onkeydown = function() {
    const regx = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-z]){2,8}$/;
    const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-z]){2,3}\.[a-zA-Z]{1,3}$/;
    if (regx.test(email.value) || regexo.test(email.value)) {
        span[0].innerText = "Your email is valid";
        span[0].style.color = 'green';
        span[0].style.fontSize = "0.9375em";
        span[0].style.alignContent = "left";
    } else {
        span[0].innerText = "Your email is Invalid";
        span[0].style.color = 'red';
        span[0].style.fontSize = "0.9375em";
        span[0].style.alignContent = "left";
    }
    passward.onkeydown = function() {
        const regexn = /^[a-z0-9_-]{6,18}$/;
        if (regexn.test(passward.value)) {
            span[1].innerText = "Your passward is valid";
            span[1].style.color = 'green';
            span[1].style.fontSize = "0.9375em";
            span[1].style.alignContent = "left";
        } else {
            span[1].innerText = "Your passward is Invalid";
            span[1].style.color = 'red';
            span[1].style.fontSize = "0.9375em";
            span[1].style.alignContent = "left";
        }
    }

}