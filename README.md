# MOTJAW — Site Web Officiel (Linkin Park Tribute)

Site vitrine officiel du groupe MOTJAW, hommage québécois à Linkin Park. Conçu avec React (Vite), ce projet partage une identité visuelle unifiée avec le portail technique et de réservation /motjawbooking/ (esthétique nu-metal, verre fumé glassmorphism et éclairages d'ambiance néon).

---

## Caractéristiques techniques

* Framework : React 18+ via Vite (build ultra-rapide et Hot Module Replacement).
* Styling : CSS moderne sans framework lourd (src/index.css), intégrant les polices officielles Teko (titres) et Inter (lecture), un cadre central verrouillé à 1126px avec colonnes extérieures et des effets d'éclairage radial fixes.
* Icônes : Lucide React et SVG inline optimisés pour les plateformes sociales.
* Architecture pilotée par les données : Séparation stricte entre l'affichage et les données grâce à bandData.js.

---

## Structure du Projet

motjaw-website/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── Banner.jpg          # Fond d'ambiance statique (scène / foule)
│   │       └── logo.png            # Logo officiel MOTJAW
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation supérieure fixe avec lien booking
│   │   ├── Hero.jsx                # Boîtier central avec logo, titre et CTA
│   │   ├── TourDates.jsx           # Liste des spectacles et bannière booking
│   │   ├── MediaSection.jsx        # Présentation scénique et lecteur YouTube
│   │   └── Footer.jsx              # Pied de page avec réseaux sociaux et contact
│   ├── data/
│   │   └── bandData.js             # SOURCE UNIQUE pour les dates, vidéos et liens
│   ├── App.jsx
│   ├── index.css                   # Feuilles de style globales et thème visuel
│   └── main.jsx
├── package.json
└── vite.config.js

---

## Gestion du contenu (src/data/bandData.js)

Pour modifier le contenu affiché sur le site sans manipuler de code JSX ou CSS, toutes les opérations s'effectuent dans src/data/bandData.js :

1. Vidéo YouTube en vedette :
Remplacez la valeur de featuredVideoId par l'identifiant unique de la vidéo YouTube (la chaîne de caractères située après v= ou après youtu.be/) :

export const SOCIAL_LINKS = {
  // ...
  featuredVideoId: "dQw4w9WgXcQ", 
};

2. Spectacles et dates de tournée :
Ajoutez, modifiez ou retirez des entrées dans le tableau UPCOMING_SHOWS :

export const UPCOMING_SHOWS = [
  {
    id: 1,
    date: "25 Octobre",
    city: "Québec",
    venue: "L'Anti Bar & Spectacles",
    featuring: "Hommage Linkin Park",
    ticketLink: "https://lepointdevente.com/...",
    status: "Billets disponibles"
  },
  // Ajouter d'autres dates ici...
];

3. Coordonnées et réseaux sociaux :
Mettez à jour les URLs de redirection ou le courriel de booking dans l'objet SOCIAL_LINKS :

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/M0TJ4W",
  instagram: "https://www.instagram.com/motjaw_qc",
  tiktok: "https://www.tiktok.com/@motjaw",
  youtube: "https://www.youtube.com/@motjaw",
  email: "motjaw2021@gmail.com",
  bookingPortal: "/motjawbooking/",
};

---

## Démarrage local

1. Installer les dépendances :
   npm install

2. Lancer le serveur de développement :
   npm run dev

L'application sera accessible par défaut à l'adresse : http://localhost:5173.

---

## Déploiement en production

1. Générer le build de production :
   npm run build

Cette commande crée un dossier optimisé et minifié nommé dist/.

2. Mise en ligne :
Transférez le contenu du dossier dist/ à la racine de votre hébergement web (public_html/ ou sous-dossier selon votre configuration Nginx/Apache).
