const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const errorMessage = document.querySelector("#error-message");

let notes = [];

function render() {
    notesList.textContent = "";

    notes.forEach(function (note) {
        const listItem = document.createElement("li");
        listItem.classList.add("note-card");

        const categoryClass =
            "category-" + note.category.toLowerCase();

        listItem.classList.add(categoryClass);

        const noteText = document.createElement("p");
        noteText.textContent = note.text;

        const categoryLabel = document.createElement("small");
        categoryLabel.textContent = note.category;

        const date = document.createElement("small");
        date.textContent = note.createdAt;

        listItem.appendChild(noteText);
        listItem.appendChild(categoryLabel);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(date);

        notesList.appendChild(listItem);
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = noteInput.value.trim();
    const category = noteCategory.value;

    const newNote = {
        id: Date.now(),
        text: text,
        category: category,
        createdAt: new Date().toLocaleString()
    };

    notes.push(newNote);

    render();

    noteInput.value = "";
});