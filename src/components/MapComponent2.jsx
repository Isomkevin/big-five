// MapComponent2.js
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import useLocalStorage from "../hooks/useLocalStorage";
import useGeolocation from "../hooks/useGeolocation";

export default function Map() {
  const mapRef = useRef();
  const userMarkerRef = useRef();

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const [nearbyMarkers, setNearbyMarkers] = useLocalStorage(
    "NEARBY_MARKERS",
    []
  );

  const location = useGeolocation();

  useEffect(() => {
    mapRef.current = leaflet
      .map("map")
      .setView([userPosition.latitude, userPosition.longitude], 13);

    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(mapRef.current);

    nearbyMarkers.forEach(({ latitude, longitude }) => {
      leaflet
        .marker([latitude, longitude])
        .addTo(mapRef.current)
        .bindPopup(
          `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
        );
    });

    mapRef.current.on("click", (e) => {
      const { lat: latitude, lng: longitude } = e.latlng;
      leaflet
        .marker([latitude, longitude])
        .addTo(mapRef.current)
        .bindPopup(
          `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
        );

      setNearbyMarkers((prevMarkers) => [
        ...prevMarkers,
        { latitude, longitude },
      ]);
    });
  }, [nearbyMarkers, setNearbyMarkers, userPosition.latitude, userPosition.longitude]);

  useEffect(() => {
    if (!location.latitude || !location.longitude) return;

    setUserPosition({ latitude: location.latitude, longitude: location.longitude });

    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
    }

    userMarkerRef.current = leaflet
      .marker([location.latitude, location.longitude])
      .addTo(mapRef.current)
      .bindPopup("User");

    const el = userMarkerRef.current.getElement();
    if (el) {
      el.style.filter = "hue-rotate(120deg)";
    }

    mapRef.current.setView([location.latitude, location.longitude]);
  }, [location, setUserPosition]);

  return <div id="map" style={{ height: "100vh" }}></div>;
}
