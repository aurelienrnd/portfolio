# 👨‍💻 Portfolio - Aurélien Arnaud

Bienvenue dans le dépôt de mon portfolio, conçu avec des technologies modernes pour valoriser mes compétences, projets et parcours professionnel.

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

## 📏 Style

Ce projet utilise TailwindCSS, voici la structure du fichier style.css :

- @import
  @import 'tailwindcss' permet d’inclure toutes les classes utilitaires de base de Tailwind.
  Les polices sont importées via Google Fonts en amont du fichier.

- @theme
  Permet de déclarer les variables CSS personnalisées (couleurs, polices) directement dans le CSS..

- @layer utilities
  Cette couche contient les animations personnalisées et les classes associées (ex. : .slide-in-left, .fake-loader).
  Chaque animation est définie avec @keyframes, puis utilisée via une classe dédiée avec animation:.

- @layer base
  Utilisé pour surcharger ou définir les styles de base HTML comme body, h1, input, etc.

- @layer components
  Cette couche regroupe les composants réutilisables : boutons (.btn), cartes (.card), mises en page (#banner, #skills, etc.).
  L’objectif est de centraliser les styles complexes tout en conservant la logique utilitaire de Tailwind.

## 🔄 Routage de l’application

L’architecture de navigation du site est gérée avec React Router v6, via le composant <BrowserRouter> (alias Router).
Voici les conventions mises en place dans le fichier App.tsx :

### Composants de navigation

< Router / > : encapsule toute l’application et active la gestion des routes.

< Routes / > : contient toutes les routes définies pour l’application.

< Route / > : permet de déclarer chaque chemin de page et le composant associé :

[ / → HomePage.tsx ] : page d’accueil.

[ /project → Project.tsx ] : page des projets réalisés.

[ * → Error.tsx ] : route de secours (404) pour les URL non définies.

### Composants persistants

< Header / > et < Footer / > sont affichés sur toutes les pages pour garantir une navigation cohérente et accessible.

< ScrollToAnchor / > permet de gérer les liens d’ancrage internes, même entre pages (ex. : /#competences).

## 🌐 Composent

### Header

Le composant Header gère l’affichage de l’en-tête du site et s’adapte dynamiquement à la page en cours grâce au hook useLocation de React Router. Le menu de navigation est divisé en deux sous-composants. Le Header est présent sur toutes les pages de l'aplication.

- NavDesktop pour les écrans larges
  Gère l’affichage du menu de navigation principal pour les écrans de grande taille (desktop). Il génère dynamiquement les liens de navigation à partir d’un tableau d’objets (navList) contenant les chemins et les libellés, en utilisant la méthode .map(). Chaque élément est rendu sous forme de lien < Link /> de React Router

- NavMobile pour les mobile
  gère l’affichage du menu de navigation pour les petits écrans. Il utilise la librairie ReactModal pour afficher un menu plein écran qui s’ouvre et se ferme au clic sur une icône hamburger. Comme pour la version desktop, les liens de navigation sont générés dynamiquement à partir du tableau navList à l’aide de .map() puis chaque élément est rendu sous forme de lien < Link / > de React Router.

### Footer

Le composant Footer est affiché sur l’ensemble des pages du site. Il regroupe les informations de bas de page ainsi qu’un formulaire de contact intégré <FormContact>.

- FormContact propose un formulaire simple permettant aux visiteurs d’envoyer un message. Lors de la validation, il génère automatiquement un e-mail prérempli via un lien mailto:

### HomePage

Le composant HomePage constitue la page d’accueil du site. Il regroupe trois sections principales : Banner (accueil et accroche), About (présentation du parcours) et Skills (compétences techniques et humaines). Chacune de ces sections est intégrée sous forme de composant indépendant.

#### Banner.

Le composant Banner constitue l’en-tête visuel de la page d’accueil. Il accueille l’utilisateur avec une présentation dynamique et immersive. Il intègre le composant Cmd, un élément original qui simule un terminal interactif proposant une navigation sous forme de mini-questionnaire.

- Cmd simule un mini terminal de navigation intégré à la section Banner. Il affiche une série de questions grâce à un tableau structuré, et utilise le hook useState pour gérer la progression dans le questionnaire. Lorsqu’un utilisateur répond "oui", il est automatiquement redirigé vers la section correspondante du site ; s’il répond "non", la question suivante s’affiche.

#### About.

Le composent présente le profil du développeur à travers une série de paragraphes récupérés dynamiquement. Chaque paragraphe est affiché à l’aide de .map. La section inclut également le composant ProfilAndMap, qui affiche alternativement une photo de profil ou une carte du monde.

- Le composant ProfilAndMap permet d’afficher dynamiquement soit une photo de profil, soit une carte du monde. Il utilise le hook useState pour gérer l’état d’affichage, et bascule entre les deux visuels en fonction des interactions de l’utilisateur. L’affichage est contrôlé via le composant MapButton

- Le composant MapButton est un bouton animé permettant à l’utilisateur de basculer entre l’affichage de la carte du monde et la photo de profil dans la section About. Il utilise useState pour gérer des effets d’animation lors du survol (hover), et contrôle l’état visibleMap reçu du composant parent (ProfilAndMap)

- Le composant LoadingMap est chargé de façon dynamique grâce aux fonctions lazy et Suspense de React. Lors de son affichage, un composant Loader est temporairement rendu pour indiquer le chargement en cours, garantissant une expérience fluide pour l’utilisateur. Une fois le module Map chargé, la carte du monde est affichée.

- Il utilise l’API de MapTiler pour charger dynamiquement un style de carte personnalisé. Ensuite, il superpose plusieurs couches de données géographiques à partir d’un fichier GeoJSON stocké dans le dossier public.

#### Skill

La section Skills présente l’ensemble des compétences techniques (hard skills) et comportementales (soft skills). Elle récupère dynamiquement les données via des requêtes, puis les affiche à l’aide du composant Skill

- Le composant Skill est utilisé pour représenter individuellement chaque compétence technique.

### Projet

La page Project présente les réalisations du développeur. Elle est structurée en deux sections principales : Banner, qui introduit la page avec un titre ou une accroche, et Cards, qui affiche l’ensemble des projets sous forme de cartes.

#### Banner

Cette bannière permet d’orienter le visiteur dès son arrivée sur la page, en mettant en valeur la démarche, la diversité ou l’objectif des projets sélectionnés.

#### Cards

La section Cards est chargée de l'affichage des différents projets du portfolio. Elle récupère dynamiquement les données via le dossier public, puis génère une carte pour chaque projet à l’aide du composant Card

- Le composant Card permet d’afficher un projet individuel sous forme de carte responsive. Il reçoit ses données via des props (titre, description, stack technique, lien vers le code, etc.) et les organise de manière lisible et attrayante.
