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
    });

    // Supprime la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="h-60 md:h-full w-full" />;
}

export default Map;
