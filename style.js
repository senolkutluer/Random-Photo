 var random= document.getElementById("random");



for ( let i = 0; i<24; i++) {

    random.innerHTML += `<img src="https://source.unsplash.com/random/${i + 1}" alt="photo">`;

    }


var refresh= document.getElementById("refresh")

refresh.addEventListener("click", function() {
    location.reload();
})

 