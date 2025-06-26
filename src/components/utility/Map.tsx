import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'; // css de la map

function Map(): React.JSX.Element {
  // Référence vers la div qui contiendra la map
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Vérifie que la div existe avant d'initialiser la carte
    if (!mapContainerRef.current) return;

    // Création et initialisation de la carte avec MapLibre
    const map = new maplibregl.Map({
      container: mapContainerRef.current, // Élément DOM cible
      style:
        'https://api.maptiler.com/maps/019752a4-5291-79d7-8919-3cb31452e26d/style.json?key=' +
        import.meta.env.VITE_MAPTILER_KEY, // Style de carte personnalisé au format JSON
      center: [2.35, 48.85], // Coordonnées de centrage initial (ici Paris)
      zoom: 1, // Niveau de zoom initial
      attributionControl: false, // désactive l'attribution par défaut
    });

    map.on('load', () => {
      // Ajout de la source GeoJSON des villes
      map.addSource('city', {
        type: 'geojson',
        data: '/datas/city.geojson', // Chemin vers le fichier GeoJSON contenant les villes
      });

      // Ajout du style pour afficher les villes en tant que cercles
      map.addLayer({
        id: 'points-localisation',
        type: 'circle',
        source: 'city', //nom de la donnée ou apliquer ce style
        paint: {
          'circle-radius': 4,
          'circle-color': '#10b981',
          'circle-stroke-color': '#263143',
          'circle-stroke-width': 1,
        },
      });

      map.addLayer({
        id: 'points-labels',
        type: 'symbol',
        source: 'city', // même source que les cercles
        minzoom: 2, // les noms apparaîtront à partir du zoom 2
        layout: {
          'text-field': ['get', 'name'], // propriété du GeoJSON contenant les noms
          'text-size': 12,
          'text-offset': [0, 1.2],
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#10b981',
          'text-halo-color': '#263143',
          'text-halo-width': 1,
        },
      });
    });

    // Supprime la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="h-60 md:h-full w-full" />; //NOTE -  prevoir observer pour charger la carte seulement quand elle entre dans le viewport ci le charge et trop long en production
}

export default Map;
