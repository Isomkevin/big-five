import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import useLocalStorage from "../hooks/useLocalStorage";
import useGeolocation from "../hooks/useGeolocation";

export default function Map() {
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);
  // Icon options
  const iconOptions = {
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    iconSize: [36, 36]
  }

  // Creating a custom icon
  var customIcon = leaflet.icon(iconOptions);

  const markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
    icon: customIcon
 }


  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const [nearbyMarkers, setNearbyMarkers] = useLocalStorage("NEARBY_MARKERS", []);
  const location = useGeolocation();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = leaflet.map("map").setView([userPosition.latitude, userPosition.longitude], 13);

      leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);

      mapRef.current.on("click", (e) => {
        const { lat: latitude, lng: longitude } = e.latlng;
        leaflet.marker([latitude, longitude], markerOptions)
          .addTo(mapRef.current)
          .bindPopup(`lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`);

        setNearbyMarkers((prevMarkers) => [
          ...prevMarkers,
          { latitude, longitude },
        ]);
      });
    }
  }, [setNearbyMarkers, userPosition.latitude, userPosition.longitude]);

  useEffect(() => {
    nearbyMarkers.forEach(({ latitude, longitude }) => {
      leaflet.marker([latitude, longitude], markerOptions)
        .addTo(mapRef.current)
        .bindPopup(`lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`);
    });
  }, [nearbyMarkers]);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setUserPosition({ latitude: location.latitude, longitude: location.longitude });

      if (userMarkerRef.current) {
        mapRef.current.removeLayer(userMarkerRef.current);
      }

      userMarkerRef.current = leaflet.marker([location.latitude, location.longitude])
        .addTo(mapRef.current)
        .bindPopup("User");

      const el = userMarkerRef.current.getElement();
      if (el) {
        el.style.filter = "hue-rotate(120deg)";
      }

      mapRef.current.setView([location.latitude, location.longitude]);
    }
  }, [location, setUserPosition]);

  return <div id="map" style={{ height: "100vh" }}></div>;
}
