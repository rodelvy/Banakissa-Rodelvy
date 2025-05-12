// Récupérer les éléments du DOM
const ajouterEleveBtn = document.getElementById('ajouterEleveBtn');
const formulaireEleve = document.getElementById('formulaireEleve');
const nomEleve = document.getElementById('nomEleve');
const comportementEleve = document.getElementById('comportementEleve');
const listeEleves = document.getElementById('listeEleves');
const ajouterEleve = document.getElementById('ajouterEleve');
const annulerAjout = document.getElementById('annulerAjout');

// Fonction pour afficher le formulaire
ajouterEleveBtn.addEventListener('click', () => {
  formulaireEleve.style.display = 'block'; // Afficher le formulaire
});

// Fonction pour annuler l'ajout
annulerAjout.addEventListener('click', () => {
  formulaireEleve.style.display = 'none'; // Cacher le formulaire
});

// Ajouter un élève
ajouterEleve.addEventListener('click', () => {
  const nom = nomEleve.value;
  const comportement = comportementEleve.value;

  if (nom && comportement) {
    const li = document.createElement('li');
    li.textContent = `${nom} - Comportement: ${comportement}`;
    listeEleves.appendChild(li);

    // Vider les champs du formulaire et cacher
    nomEleve.value = '';
    comportementEleve.value = '';
    formulaireEleve.style.display = 'none';
  } else {
    alert('Veuillez remplir tous les champs');
  }
});


