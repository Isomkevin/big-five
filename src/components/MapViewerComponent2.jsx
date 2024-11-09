import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import useLocalStorage from "../hooks/useLocalStorage";
import useGeolocation from "../hooks/useGeolocation";

export default function Map({ markerData }) {
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);

  // Custom Icon options
  const customIcon1 = leaflet.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2702/2702604.png',
    iconSize: [36, 36],
  });

  const customIcon_lion = leaflet.icon({
    // iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    iconUrl: 'https://img.icons8.com/?size=48&id=33035&format=png',
    iconSize: [34, 34],
  });

  const markerOptions1 = {
    title: "CurrentLocation",
    clickable: true,
    draggable: false,
    icon: customIcon1,
  };

  const markerOptions2 = {
    title: "OtherLocation",
    clickable: true,
    draggable: false,
    icon: customIcon_lion,
  };

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
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

      addCustomControl(map, 'topright', 'Home Button', 'https://cdn-icons-png.flaticon.com/128/25/25694.png', () => {
        alert('Home Button clicked!');
      });

      addCustomControl(map, 'topright', 'Clear Markers', 'https://cdn-icons-png.flaticon.com/128/4931/4931455.png', () => {
        alert('Clear Markers button clicked!');
      });
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [userPosition.latitude, userPosition.longitude]);

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

  useEffect(() => {
    markerData.forEach(({ geocode, popUp }) => {
      leaflet.marker(geocode, markerOptions2)
        .addTo(mapRef.current)
        .bindPopup(popUp);
    });
  }, [markerData]);

  const addCustomControl = (map, position, title, iconUrl, onClick) => {
    const CustomControl = leaflet.Control.extend({
      options: {
        position: position
      },
      onAdd: function () {
        const container = leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.style.backgroundColor = 'white';
        container.style.width = '40px';
        container.style.height = '40px';
        container.style.cursor = 'pointer';
        container.title = title;

        container.innerHTML = `<img src="${iconUrl}" style="width: 28px; height: 28px; margin: 5px;"/>`;

        container.onclick = onClick;

        return container;
      },
      onRemove: function () {
        // Nothing to do here
      }
    });

    map.addControl(new CustomControl());
  };

  return <div id="map" style={{ height: "100vh" }}></div>;
}
