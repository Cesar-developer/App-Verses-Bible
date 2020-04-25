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
    alert('Sending form')
})