'use client'

import { useState } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

function ClickHandler({ setMarker }: { setMarker: (latlng: L.LatLng) => void }) {
  useMapEvents({
    click(e) {
      setMarker(e.latlng)
    },
  })
  return null
}

export default function QuizMap() {
  const [marker, setMarker] = useState<L.LatLng | null>(null)

  return (
    <MapContainer
      center={[-2.5, 118]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
      maxBounds={[
        [-11.0, 94.0],
        [6.5, 141.0],
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
      />

      <ClickHandler setMarker={setMarker} />

      {marker && <Marker position={marker} />}
    </MapContainer>
  )
}
