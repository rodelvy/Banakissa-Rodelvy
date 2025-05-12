const eleveSelect = document.getElementById("eleve-select");
const noteForm = document.getElementById("noteForm");
const newNoteInput = document.getElementById("newNote");
const notesList = document.getElementById("notesList");

let currentEleve = "";

eleveSelect.addEventListener("change", () => {
  currentEleve = eleveSelect.value;
  afficherNotes(currentEleve);
});

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentEleve) {
    alert("Sélectionnez un élève.");
    return;
  }

  const note = parseFloat(newNoteInput.value);
  if (isNaN(note) || note < 0 || note > 20) return;

  let notes = JSON.parse(localStorage.getItem(`notes_${currentEleve}`)) || [];
  notes.push(note);
  localStorage.setItem(`notes_${currentEleve}`, JSON.stringify(notes));

  newNoteInput.value = "";
  afficherNotes(currentEleve);
});

function afficherNotes(nom) {
  notesList.innerHTML = "";
  if (!nom) return;

  const notes = JSON.parse(localStorage.getItem(`notes_${nom}`)) || [];
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = `Note ${index + 1} : ${note}`;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.className = "delete-btn";
    btn.onclick = () => {
      notes.splice(index, 1);
      localStorage.setItem(`notes_${nom}`, JSON.stringify(notes));
      afficherNotes(nom);
    };

    li.appendChild(btn);
    notesList.appendChild(li);
  });
}
