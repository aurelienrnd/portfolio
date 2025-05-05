# 🌐 Portfolio - Aurélien Arnaud

Bienvenue dans le dépôt de mon portfolio, conçu avec des technologies modernes pour mettre en valeur mes compétences, projets et parcours professionnel.

## 🚀 Stack technique

- [Vite] – bundler ultra rapide
- [React] – bibliothèque UI
- [React Router] – routage entre les différentes pages du site
- [TypeScript] – typage strict et sécurisé
- [TailwindCSS] – framework CSS utilitaire
- [Prettier] – formateur de code
- [FontAwesome] – affichage d’icônes
- [React-modal] – création de modale


## 📁 Structure du projet

```bash

public/
│
├── datas/
│   ├── hard-skills.json
│   ├── soft-skills.json
│   └── project.json
│
├── fav-icon/
│   └── ...
│
├── images/
│    └── ...
│   
└── ..

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
│       │   ├── Projects.tsx
│       │   └── section/
│       │       ├── Banner-project.tsx
│       │       └── Cards.tsx
│       │       
│       ├── error/
│       │   └── Error.tsx
│       │
│       └── utility/
│           ├── ScrollToAnchor.tsx
│           ├── Cmd.tsx
│           ├── Nav.tsx
│           ├── Skill.tsx
│           ├── Card.tsx
│           └── Skill.tsx
└── ...            
```

## ✅ Étapes déjà réalisées

- Initialisation avec Vite + React + TypeScript
- Suppression des fichiers inutiles
- Création de l’arborescence
- Installation et configuration de TailwindCSS v4
- Mise en place de Prettier + prettier-plugin-tailwindcss
- Initialisation Git, création du dépôt et premier push
- Mise en place du routage entre les différentes pages du site
- Initialisation des premiers éléments de style dans style.css
- Création du Header :
  - Ajout du composant ScrollToAnchor pour naviguer d’une page à une ancre située sur une autre page
  - Modification dynamique du lien Projets/Accueil selon la page visitée
  - En version mobile, affichage du menu de navigation dans une modale au clic sur une icône
- Création de la HomePage :
  - Section Banner
    - Bouton CTA redirigeant vers la page projet
    - Faux loader affichant un questionnaire pour rediriger l’utilisateur vers différentes sections du site
  - Section About
    - Ajout de texte et d’une photo
    - Adaptation au responsive via Media Queries
  - Section Skills
    - Affichage dynamique des différentes compétences avec animation au scroll
    - Responsive via Media Queries
- Création de la page Project :
  - Section Banner
    - Contient un texte d’introduction
  - Section Cards
    - Liste de projets sous forme de cartes
    - Responsive
- Création du Footer :
  - Contient un formulaire de contact et divers liens externes



## 🔧 Scripts utiles

```bash
npm run dev         # Lancer le serveur de développement
npm run build       # Générer la version de production
npm run lint        # Vérifier la qualité du code avec ESLint
npm run preview     # Prévisualiser du site en mode production.
```