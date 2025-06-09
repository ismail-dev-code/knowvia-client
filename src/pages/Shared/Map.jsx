import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CiLocationOn } from "react-icons/ci";
const Map = () => {
  const [leafletError, setLeafletError] = useState(false);
  const officeLatLng = [22.8236, 91.0973]; 

  const handleGetDirections = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${officeLatLng[0]},${officeLatLng[1]}`;
        window.open(directionsUrl, "_blank", "noopener,noreferrer");
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  useEffect(() => {
    try {
      const existingMap = L.DomUtil.get("map");
      if (existingMap !== null) {
        existingMap._leaflet_id = null;
      }

      const map = L.map("map").setView(officeLatLng, 15);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: "/logo.png",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      const marker = L.marker(officeLatLng, { icon: customIcon }).addTo(map);
      marker
        .bindPopup(
          `
        <strong>Knowvia Office</strong><br/>
        172 Knowledge Rd,<br/>
        Maijdee, Noakhali, Bangladesh
      `
        )
        .openPopup();
    } catch (err) {
      console.error("Leaflet map error:", err);
      setLeafletError(true);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="md:text-2xl text-xl font-bold mb-4">Visit the Knowvia Office</h2>
          <p className="text-gray-500 text-sm mb-3">
            Our office is located at the heart of Maijdee in Noakhali. Whether
            you're seeking collaboration, knowledge-sharing opportunities, or
            simply want to meet the team behind Knowvia — you're always welcome!
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Address: 172 Knowledge Rd, Maijdee Town, <br /> Noakhali, Bangladesh
          </p>
          <button
            onClick={handleGetDirections}
            className=" cursor-pointer btn-secondary btn px-4 py-2 rounded text-sm hover:scale-105 transition-all"
          >
            <CiLocationOn size={25} /> Get Directions
          </button>
        </div>

        <div className="overflow-hidden opacity-90">
          {leafletError ? (
            <iframe
              title="Knowvia Office Location"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=172+Knowledge+Rd,+Maijdee,+Noakhali,+Bangladesh"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          ) : (
            <div id="map" style={{ height: "400px", width: "100%" }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
