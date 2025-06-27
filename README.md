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
- [Maplibre-gl] – création d'une carte interactive

## 📁 Structure du projet

```bash

public/
│
├── datas/
│   ├── city.geojson
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
│   │   ├── header/
│   │   │   ├── Header.tsx
│   │   │   └── Nav.tsx
│   │   │
│   │   └── footer/
│   │       ├── Footer.tsx
│   │       └── FormContact.tsx
│   │
│   └── pages/
│       ├── homePage/
│       │    ├── HomePage.tsx
│       │    └── sections/
│       │        ├── banner/
│       │        │   ├── Banner.tsx
│       │        │   └── Cmd.tsx
│       │        │
│       │        ├── about/
│       │        │   ├── About.tsx
│       │        │   ├── LoadingMap.tsx
│       │        │   ├── MapButon.tsx
│       │        │   ├── ProfilAndMap.tsx
│       │        │   └── Map.tsx
│       │        │
│       │        └── skills/
│       │            ├── Skills.tsx
│       │            └── Skill.tsx
│       │
│       ├── projects/
│       │   ├── Projects.tsx
│       │   └── section/
│       │       ├── banner-project/
│       │       │   └── Banner-project.tsx
│       │       │
│       │       └── Card/
│       │           ├── Cards.tsx
│       │           └── Card.tsx
│       │
│       ├── error/
│       │   └── Error.tsx
│       │
│       └── utility/
│           ├── ScrollToAnchor.tsx
│           └── Loaoder.tsx
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

- Vérifier la qualité du code avec ESLint

```bash
npm run lint
```

- Prévisualiser du site en mode production.

```bash
npm run preview
```
