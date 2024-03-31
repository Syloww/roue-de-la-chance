var texts = [];
var isSpinning = false;
updateTextList()
function rotateRoulette() {
    if (isSpinning) return;

    if (texts.length === 0) {
        alert("La liste de textes est vide. Veuillez ajouter des textes avant de faire tourner la roulette.");
        return;
    }

    var randomAngle = Math.floor(Math.random() * 3600) + 3600; // Pour plusieurs tours
    var roulette = document.getElementById('roulette');
    var resultText = document.getElementById('result');

    roulette.style.transform = 'rotate(' + randomAngle + 'deg)';
    isSpinning = true;

    setTimeout(function () {
        var randomIndex = Math.floor(Math.random() * texts.length);
        var result = texts[randomIndex];
        resultText.textContent = result;
        isSpinning = false;
        alert("Le résultat de la roue est : " + result);
    }, 2000); // ajustez le temps selon votre préférence
}




function addText() {
    var newText = document.getElementById('newText').value;
    if (newText.trim() !== "") {
        texts.push(newText);
        updateTextList();
    }
}

function removeText() {
    var newText = document.getElementById('newText').value;
    var index = texts.indexOf(newText);
    if (index !== -1) {
        texts.splice(index, 1);
        updateTextList();
    }
}

function updateTextList() {
    var textList = document.getElementById('textList');
    textList.innerHTML = '';
    texts.forEach(function (text, index) {
        var li = document.createElement('li');
        li.textContent = text;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = " X";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function () {
            removeTextAtIndex(index);
        };

        li.appendChild(deleteButton);
        textList.appendChild(li);
    });
}
function addText() {
    var newText = document.getElementById('newText').value.trim();
    if (newText === "") {
        alert("Veuillez entrer un texte avant de l'ajouter.");
        return;
    }

    texts.push(newText);
    updateTextList();
}
function removeTextAtIndex(index) {
    texts.splice(index, 1);
    updateTextList();
}

var defaultList = ['Classic','Shorty','Frenzy','Ghost','Sheriff','Stinger','Spectre','Bucky','Judge','Bulldog','Guardian','Phantom','Vandal','Marshal','Operator','Ares','couteau','Odin','aoutlaw'];

function importDefaultList() {
    texts = defaultList.slice(); // Copier la liste pré-définie dans la liste principale
    updateTextList();
}