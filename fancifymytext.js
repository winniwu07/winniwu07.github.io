var textArea = document.getElementById("textBox");

// bigger button
function makeBigger() {
    alert("Hello, world!");
    textArea.style.fontSize = "24pt";
}

document.getElementById("biggerBtn").onclick = makeBigger;

// radio buttons
var fancyRadio = document.getElementById("fancyRadio");
var boringRadio = document.getElementById("boringRadio");

function setFancy() {
    alert("Radio button changed!");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function setBoring() {
    alert("Radio button changed!");
    
    if (boringRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

fancyRadio.onchange = setFancy;
boringRadio.onchange = setBoring;

// moo button
function mooText() {
    var text = textArea.value;

    text = text.toUpperCase();

    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();

        if (sentence.length > 0) {
            var words = sentence.split(" ");

            var lastWordIndex = words.length - 1;
            words[lastWordIndex] = words[lastWordIndex] + "-MOO";
            
            sentences[i] = words.join(" ");
        }
    }

    text = sentences.join(".");
    textArea.value = text;
}

document.getElementById("mooBtn").onclick = mooText;