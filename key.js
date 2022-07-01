let button = document.getElementById('button');

button.onclick = function() {
    if(document.thisForm.firstName.value == "" ) {
        document.getElementById("laBel").classList.add('label-class')
        document.getElementById("p-action").classList.add('show')
    }
    if(document.thisForm.lastName.value == "" ) {
        document.getElementById("laBel-2").classList.add('label-class')
        document.getElementById("p-action2").classList.add('show')
    }
    if(document.thisForm.email.value == "" ) {
        document.getElementById("laBel-3").classList.add('label-class')
        document.getElementById("p-action3").classList.add('show')
    }
    if(document.thisForm.password.value == "" ) {
        document.getElementById("laBel-4").classList.add('label-class')
        document.getElementById("p-action4").classList.add('show')
    } else  {}
}
