var info = document.querySelectorAll('.info');

function getData(array) {
    for(var i=0; i<array.length; i++) {
        info[i].innerHTML = array[i];
    }
}

window.addEventListener('load', function() {

    const closebtn = document.querySelector('.closebtn');

    closebtn.addEventListener('click', function() {
        mta.triggerEvent("closePanel");
    })  

})

