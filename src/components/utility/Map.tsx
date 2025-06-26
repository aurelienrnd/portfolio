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
      style: '/datas/map.json', // Style de carte personnalisé au format JSON
      center: [2.35, 48.85], // Coordonnées de centrage initial (ici Paris)
      zoom: 1, // Niveau de zoom initial
    });

    // Supprime la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="h-60 md:h-full w-full" />;
}

export default Map;
