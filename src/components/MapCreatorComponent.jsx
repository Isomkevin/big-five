import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import useLocalStorage from "../hooks/useLocalStorage";
import useGeolocation from "../hooks/useGeolocation";

export default function Map() {
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);
  // Custom Icon options
  const customIcon1 = leaflet.icon({
    // iconUrl: 'https://cdn-icons-png.flaticon.com/128/15615/15615194.png',
    // iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2702/2702604.png',
    iconSize: [36, 36],
  });

  const customIcon2 = leaflet.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    iconSize: [34, 34],
  });

  const markerOptions1 = {
    title: "CurrentLocation",
    clickable: true,
    draggable: true,
    icon: customIcon1,
  };

  const markerOptions2 = {
    title: "OtherLocation",
    clickable: true,
    draggable: true,
    icon: customIcon2,
  };

  const [userPosition, setUserPosition, clearLocalStorage, clearItem] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const [nearbyMarkers, setNearbyMarkers] = useLocalStorage("NEARBY_MARKERS", []);
  const location = useGeolocation();

  useEffect(() => {
    if (!mapRef.current) {
      const map = leaflet.map("map").setView([userPosition.latitude, userPosition.longitude], 13);
      mapRef.current = map;

      leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const handleMapClick = (e) => {
        const { lat: latitude, lng: longitude } = e.latlng;
        const marker = leaflet.marker([latitude, longitude], markerOptions2)
          .addTo(map)
          .bindPopup(`lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`);

        setNearbyMarkers((prevMarkers) => [
          ...prevMarkers,
          { latitude, longitude },
        ]);

        marker.on('click', () => {
          map.removeLayer(marker);
          setNearbyMarkers((prevMarkers) =>
            prevMarkers.filter((m) => m.latitude !== latitude && m.longitude !== longitude)
          );
        });
      };

      map.on("click", handleMapClick);

      return () => {
        map.off("click", handleMapClick);
      };
    }
  }, [setNearbyMarkers, userPosition.latitude, userPosition.longitude]);

  useEffect(() => {
    nearbyMarkers.forEach(({ latitude, longitude }) => {
      const marker = leaflet.marker([latitude, longitude], markerOptions2)
        .addTo(mapRef.current)
        .bindPopup(`lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`);

      marker.on('click', () => {
        mapRef.current.removeLayer(marker);
        setNearbyMarkers((prevMarkers) =>
          prevMarkers.filter((m) => m.latitude !== latitude && m.longitude !== longitude)
        );
      });
    });
  }, [nearbyMarkers]);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setUserPosition({ latitude: location.latitude, longitude: location.longitude });

      if (userMarkerRef.current) {
        mapRef.current.removeLayer(userMarkerRef.current);
      }

      userMarkerRef.current = leaflet.marker([location.latitude, location.longitude], markerOptions1)
        .addTo(mapRef.current)
        .bindPopup("Your Current location");

      const el = userMarkerRef.current.getElement();
      if (el) {
        el.style.filter = "hue-rotate(120deg)";
      }

      mapRef.current.setView([location.latitude, location.longitude]);
    }
  }, [location, setUserPosition]);

  const handleClearAllMarkers = () => {
    nearbyMarkers.forEach(({ latitude, longitude }) => {
      const marker = leaflet.marker([latitude, longitude], markerOptions2);
      mapRef.current.removeLayer(marker);
    });
    setNearbyMarkers([]);
    clearItem("NEARBY_MARKERS");
  };

  const handleClearUserMarker = () => {
    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
      userMarkerRef.current = null;
      setUserPosition({ latitude: 0, longitude: 0 });
      clearItem("USER_MARKER");
    }
  };

  return (
    <div>
      <div id="map" style={{ height: "100vh" }}></div>
      <button onClick={handleClearAllMarkers}>Clear All Markers</button>
      <button onClick={handleClearUserMarker}>Clear User Marker</button>
    </div>
  );
}
