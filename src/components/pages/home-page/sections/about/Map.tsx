// Hooks
import { useEffect, useRef } from 'react';
// Libraries
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'; // css de la map

/** Affiche une carte du tour du monde avec des villes marquées.
 * @description - Effectue une requête à l’API MapTiler pour récupérer le style de la carte,
 * puis y ajoute plusieurs couches à partir d’un fichier GeoJSON situé dans le dossier public.
 * @returns {JSX.Element} - Une carte interactive.
 */
function Map(): React.JSX.Element {
  // Référence à la div qui contiendra la carte
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

    // Ajout de la source GeoJSON pour les villes
    map.on('load', () => {
      map.addSource('city', {
        type: 'geojson',
        data: '/datas/city.geojson', // Chemin vers le fichier GeoJSON contenant les villes
      });

      // Ajout du style pour afficher les emplacements de chaque ville
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

      // Ajout du style pour afficher les nom de chaque ville
      map.addLayer({
        id: 'points-labels',
        type: 'symbol',
        source: 'city', //nom de la donnée ou apliquer ce style
        minzoom: 2, // les noms apparaissent à partir du zoom 2
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

  return <div ref={mapContainerRef} className="h-60 md:h-full w-full" />;
}

export default Map;
