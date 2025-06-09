# 🌐 Portfolio - Aurélien Arnaud

Bienvenue dans le dépôt de mon portfolio, conçu avec des technologies modernes pour valoriser mes compétences, projets et parcours professionnel.

## ✅ Objectif
- Initialisation du projet avec Vite, React et TypeScript
- Gestion du style avec TailwindCSS
- Mise en place du routage entre les différentes pages du site
- Modification dynamique du lien Projets/Accueil dans le menu de navigation en fonction de la page visitée
- En version mobile, affichage du menu de navigation dans une modale au clic sur une icône
- Création d’un composant Cmd proposant une navigation interactive avec l’utilisateur
- Affichage dynamique des différents hard-skills et soft-skills depuis des données JSON stockées dans public/datas
- Affichage dynamique des différents projets depuis des données JSON stockées dans public/datas
- Création d’un formulaire de contact générant un email prérempli
- Option de téléchargement du CV au format PDF.

## 🚀 Stack technique

- [Vite] – bundler ultra rapide
- [React] – bibliothèque UI
- [React-Router] – routage entre les différentes pages du site
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

## 🔧 Scripts utiles
- Lancer le serveur de développement
```bash
npm run dev         
```
- Générer la version de production
```bash
npm run build       
```
-  Vérifier la qualité du code avec ESLint
```bash
npm run lint       
```
- Prévisualiser du site en mode production.
```bash
npm run preview     
```