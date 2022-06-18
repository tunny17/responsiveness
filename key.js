let button = document.getElementById('button');

button.onclick = function() {
    if(document.thisForm.firstName.value == "" ) {
        const el = document.querySelector('label');
        el.style.backgroundColor = 'red';
        // document.thisForm.firstname.focus();
        return false;
    }
    if(document.thisForm.lastName.value == "" ) {
        alert("please provide your Last Name" );
        document.thisForm.lastName.focus();
        return false;
    }
    if(document.thisForm.email.value == "" ) {
        alert("please provide your Email" );
        document.thisForm.email.focus();
        return false;
    }
    if(document.thisForm.password.value == "" ) {
        alert("please provide your password" );
        document.thisForm.password.focus();
        return false;
    }


    return( true );
}