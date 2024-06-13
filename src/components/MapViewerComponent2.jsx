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

  const customIcon2 = leaflet.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
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
    icon: customIcon2,
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

      // Add custom buttons
      const customControl = leaflet.Control.extend({
        options: {
          position: 'topright' // position of the control
        },
        onAdd: function () {
          const container = leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
          container.style.backgroundColor = 'white';
          container.style.width = '30px';
          container.style.height = '30px';
          container.style.cursor = 'pointer';
          container.title = 'Custom Button';

          container.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/25/25694.png" style="width: 20px; height: 20px; margin-top: 5px;"/>';

          container.onclick = function () {
            alert('Button clicked!');
          };

          return container;
        },
        onRemove: function () {
          // Nothing to do here
        }
      });

      // Add the custom control to the map
      map.addControl(new customControl());

      // You can add more controls if needed
      const anotherControl = leaflet.Control.extend({
        options: {
          position: 'topright'
        },
        onAdd: function () {
          const container = leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
          container.style.backgroundColor = 'white';
          container.style.width = '30px';
          container.style.height = '30px';
          container.style.cursor = 'pointer';
          container.title = 'Another Button';

          container.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/61/61112.png" style="width: 20px; height: 20px; margin-top: 5px;"/>';

          container.onclick = function () {
            alert('Another button clicked!');
          };

          return container;
        },
        onRemove: function () {
          // Nothing to do here
        }
      });

      map.addControl(new anotherControl());
    }
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

  return <div id="map" style={{ height: "100vh" }}></div>;
}
