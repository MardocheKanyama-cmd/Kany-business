// Sélection des boutons "Ajouter au panier"
const buttons = document.querySelectorAll('.product button');

// Tableau pour le panier
let panier = [];

// Fonction pour ajouter un produit au panier
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const produit = {
      nom: `Produit ${index + 1}`,
      quantite: 1,
      prix: 10.00
    };

    panier.push(produit);
    alert(`${produit.nom} a été ajouté à votre panier !`);
    console.log(panier);
  });
});
