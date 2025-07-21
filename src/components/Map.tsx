"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

type MapProps = {
  latitude: number;
  longitude: number;
};

const mapContainerStyle: React.CSSProperties = {
  height: "20rem",
  width: "100%",
};

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([latitude, longitude], 19);

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add marker
    L.marker([latitude, longitude]).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return <div ref={mapRef} style={mapContainerStyle} />;
};

export default Map;
