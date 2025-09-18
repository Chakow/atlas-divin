document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu-logo");
  const nav = document.querySelector(".nav-header");

  burger.addEventListener("click", () => {
    nav.classList.toggle("is-active");
  });
});

// Associer les boutons aux classes des cartes
const filters = {
  "pantheon-grec": "card-grec",
  "pantheon-romain": "card-romain",
  "pantheon-nordique": "card-nordique",
  "pantheon-egyptien": "card-egyptien",
};

const filterButtons = document.querySelectorAll(".filter-section button");
const cards = document.querySelectorAll(".card");

let activeFilter = null; // pour mémoriser le filtre actif

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pantheonClass = Array.from(button.classList).find(
      (cls) => filters[cls]
    );
    console.log("pantheonClass", pantheonClass);
    if (!pantheonClass) return;

    const cardClass = filters[pantheonClass];

    // Si on clique sur le même filtre → reset (toggle off)
    if (activeFilter === cardClass) {
      activeFilter = null;
      cards.forEach((card) => {
        console.log("card", card, card.parentElement);
        card.parentElement.classList.remove("is-not-active");
      });
      return;
    }

    // Sinon → appliquer le nouveau filtre
    activeFilter = cardClass;

    // Étape 1 : reset toutes les cartes
    cards.forEach((card) => {
      console.log("card", card, card.parentElement);
      card.parentElement.classList.remove("is-not-active");
    });

    // Étape 2 : appliquer le filtre (is-not-active aux autres)
    cards.forEach((card) => {
      if (!card.classList.contains(cardClass)) {
        card.parentElement.classList.add("is-not-active");
        console.log("card", card, card.parentElement);
      }
    });
  });
});

//DARKMODE

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".toggle-mode-button");
  const sun = document.querySelector(".toggle-mode-button-sun");
  const moon = document.querySelector(".toggle-mode-button-moon");
  const body = document.body;

  if (!btn || !sun || !moon) {
    console.warn(
      "Element manquant : vérifie les classes .toggle-mode-button, .toggle-mode-button-sun, .toggle-mode-button-moon"
    );
    return;
  }

  btn.addEventListener("click", () => {
    // nouvel état voulu : true = activer dark-mode / classes sur sun & moon
    const wantActive = !sun.classList.contains("is-active");

    // forcer les classes dans l'état voulu (évite les conflits)
    sun.classList.toggle("is-active", wantActive);
    moon.classList.toggle("is-not-active", wantActive);
    body.classList.toggle("dark-mode", wantActive);

    // debug (supprime si tout fonctionne)
    console.log(
      "État -> sun:",
      sun.className,
      "moon:",
      moon.className,
      "body:",
      body.className
    );
  });
});
