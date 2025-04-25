# 🌐 Portfolio - Aurélien Arnaud

Bienvenue dans le dépôt de mon portfolio, conçu avec des technologies modernes pour valoriser mes compétences, projets et parcours professionnel.

## 🚀 Stack technique

- [Vite] – bundler ultra rapide
- [React] – bibliothèque UI
- [React-Routeur] - routage entre les différente page du site
- [TypeScript] – typage strict et sécurisé
- [TailwindCSS] – framework CSS utilitaire
- [Prettier] – formateur de code
- [Fortawesome] - Affichage d'iconne
- [React-modal] - Création de model 

## 📁 Structure du projet

```bash
src/
│
├── main.tsx
├── App.tsx
├── assets/
├── styles/  
│   └── style.css
│
├── components/  
│   ├── layout/  
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   └── pages/  
│       ├── homePage/  
│       │   ├── HomePage.tsx
│       │   └── sections/
│       │       ├── Banner.tsx
│       │       ├── About.tsx
│       │       └── Skills.tsx
│       │
│       ├── projects/  
│       │   └── Projects.tsx
│       │
│       ├── error/
│       │   └── Error.tsx
│       │
│       └── utility/
│           ├── ScrollToAnchor.tsx
│           ├── Cmd.tsx
│           └── Nav.tsx
└── ...            
```

## ✅ Étapes déjà réalisées

- Initialisation avec Vite + React + TypeScript
- Suppression des fichiers inutiles
- Création de l’arborescence
- Installation et configuration de TailwindCSS v4
- Mise en place de Prettier + prettier-plugin-tailwindcss
- Initialisation Git, création du dépôt et premier push
- Création du routage entre les différentes pages du site
- Initialisation des premier elements de style utilisable dans style.css
- Création du Header
  - Création du component "ScrollToAnchor" pour naviger d'une page a une ancre situé sur une autre page
  - Modification du lien Projets/Acceuil dynamiquement selon la page visitée
  - En verssion mobil, affichage du menu de navigation dans une modal au clic sur une icone 
- Création de la HomePage
  - Section Banner
    - Création d'un bouton CTA qui navigue vers la page projet
    - Création d'un faux loader qui affiche un questionaire proposant a l'utilisateur de se rediriger vers différente partie du site

## 🔧 Scripts utiles

```bash
npm run dev         # Lancer le serveur de développement
npm run build       # Générer la version de production
npm run lint        # Vérifier la qualité du code avec ESLint
npm run preview     # Prévisualiser du site en mode production.
```