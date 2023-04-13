
typing_effect(['Hello World'], ['black']);


function typing_effect(words) {


    var cursor = document.getElementById('cursor'); //cursor
    var text = document.getElementById('text') //text

    var blink = true;
    var wait = false;
    var letters_count = 1;
    var temp = 1;

    text.style.color = 'black'
    window.setInterval(function () { //wait between words when it starts writting
        if (wait === false) { //write words                    
            text.innerHTML = words[0].substr(0, letters_count)
            letters_count += temp;
        }
    }, 120)
    window.setInterval(function () {
        if (blink) {
            cursor.style.opacity = "0";
            blink = false;
        } else {
            cursor.style.opacity = "1";
            blink = true;
        }
    }, 400)
}