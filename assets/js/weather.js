var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=a5a6311f3c65b49daf9357f3eda67505')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            main.innerHTML = nameValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Current Temp is - " + tempValue;
            input.value = "";

        })

    .catch(err => alert("You Have to Enter a City Name!"));
})

//for cards

// var button = document.querySelector('.submit');

// if (button) {
//     document.getElementsByClassName('cards').style.background = 'red';
// } else {
//     document.getElementsByClassName('cards').style.background = '#1f567c';
// }

// codes for the web weidgets

! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');