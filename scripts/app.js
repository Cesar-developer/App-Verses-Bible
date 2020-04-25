class BibleVerse {
    constructor(userName, quote, verse) {
        this.userName = userName;
        this.quote = quote;
        this.verse = verse;
    }
}

class UI {
    addBibleVerse() {

    }

    deleteBibleVerse() {

    }

    showMessage() {

    }
}

// DOM events

document.getElementById('bible-form').addEventListener('submit', function () {
    const name = document.getElementById('name').value;
    const quote = document.getElementById('quote').value;
    const verse = document.getElementById('verse').value;

    console.log(name, quote, verse)
})