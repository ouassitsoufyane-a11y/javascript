let clients = [
  {
    id: 1,
    nom: "Bennani",
    prenom: "Sara",
    ville: "Settat",
    commandes: [
      {
        id: 101,
        date: "2026-04-10",
        produits: [
          { id: 1, libelle: "Clavier", prix: 120, quantite: 2 },
          { id: 2, libelle: "Souris", prix: 80, quantite: 1 }
        ],
        payee: true
      },
      {
        id: 102,
        date: "2026-04-15",
        produits: [
          { id: 3, libelle: "Ecran", prix: 950, quantite: 1 }
        ],
        payee: false
      }
    ]
  },
  {
    id: 2,
    nom: "Radi",
    prenom: "Hamza",
    ville: "Casablanca",
    commandes: [
      {
        id: 103,
        date: "2026-04-11",
        produits: [
          { id: 4, libelle: "Casque", prix: 200, quantite: 1 },
          { id: 5, libelle: "Webcam", prix: 300, quantite: 1 }
        ],
        payee: true
      }
    ]
  },
  {
    id: 3,
    nom: "Khalidi",
    prenom: "Khadija",
    ville: "Rabat",
    commandes: [
      {
        id: 104,
        date: "2026-04-09",
        produits: [
          { id: 6, libelle: "Imprimante", prix: 1200, quantite: 1 }
        ],
        payee: false
      }
    ]
  }
];

function  afficherClients() {
  clients.forEach(cl => {
    console.log(`Client: ${cl.prenom} ${cl.nom}, Ville: ${cl.ville}`);
  });
}

function afficherCommandes(clientId) {
  const client = clients.find(cl => cl.id === clientId);
  return client ;
}

function afficherProduits(commandId) {
  for (const client of clients) {
    const commande = client.commandes.find(cmd => cmd.id === commandId);
    if (commande) {
      return commande.produits;
    }
  }
}

function chercherClient(id) {
  return clients.find(cl => cl.id === id);
}

function afficherCommandesNonPayees() {
  const commandesNonPayees = [];
  clients.forEach(client => {
    client.commandes.forEach(commande => {
      if (commande.payee === false) {
        commandesNonPayees.push(commande);
      }
    });
  });
  return commandesNonPayees;
}

function ajouterCommande(idClient, nouvelleCommande) {
  const client = clients.find(cl => cl.id === idClient);
  if (client) {
    client.commandes.push(nouvelleCommande);
  }
}

function modifierQuantite(idCommande, idProduit, nouvelleQuantite) {
  for (const client of clients) {
    const commande = client.commandes.find(cmd => cmd.id === idCommande);
    if (commande) {
      const produit = commande.produits.find(prod => prod.id === idProduit);
      if (produit) {
        produit.quantite = nouvelleQuantite;
        return;
      }
    }
  }
}

function supprimerCommande(idCommande) {
  clients.forEach(client => {
    client.commandes = client.commandes.filter(cmd => cmd.id !== idCommande);
  })};

function validerCommande(idCommande){
  let expreg = /^[A-Z]{3}-\d{4}-\d{3}$/;
  if(expreg.test(idCommande)) {
    console.log("ID de commande valide.");
  } else {
    console.log("ID de commande invalide.");
  }

}