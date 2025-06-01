"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import provinceMarkers from "@/data/provinceMarkers.json"

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
})

export default function TimeTravelMap() {
  return (
    <MapContainer
      center={[-2.5, 118]}
      zoom={5}
      minZoom={5}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      maxBounds={[
        [-11.0, 94.0],
        [6.5, 141.0],
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
      />
      {provinceMarkers.map((prov, i) => (
        <Marker
          key={i}
          position={[prov.latitude, prov.longitude]}
        >
          <Popup>
            <strong>{prov.name}</strong>
            <br />
            {prov.subtitle}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}