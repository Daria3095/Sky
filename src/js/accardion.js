const accordion = document.getElementsByClassName ('contentBx');
for (i = 0; accordion.length; i++){
    accordion [i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}





