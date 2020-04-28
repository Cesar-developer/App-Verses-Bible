class BibleVerse {
    constructor(userName, quote, verse) {
        this.userName = userName;
        this.quote = quote;
        this.verse = verse;
    }
}

class UI {
    addBibleVerse(bibleVerse) {
        const verseList = document.getElementById('verses-list');
        const element = document.createElement('div');

        element.innerHTML =
            `<div class="card">
                <div class="card-row">
                    <strong>User Name</strong>: ${bibleVerse.userName} 
                    <strong>Biblical Quote</strong>: ${bibleVerse.quote} 
                    <strong>Biblical Verse</strong>: ${bibleVerse.verse}
                    <button class="btn btn-delete" name="delete">Delete</button>
                </div>
             </div>
            `;
        
        verseList.appendChild(element);
        this.resetForm();
    }

    resetForm() {
        document.getElementById('bible-form').reset();
    }

    deleteBibleVerse(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
        } else {
            return null;
        }
    }

    showMessage() {

    }
}

// DOM events

document.getElementById('bible-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const quote = document.getElementById('quote').value;
    const verse = document.getElementById('verse').value;

    const verses = new BibleVerse(name, quote, verse);

    const ui = new UI();

    ui.addBibleVerse(verses);

    e.preventDefault();
});

document.getElementById('verses-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteBibleVerse(e.target);
});