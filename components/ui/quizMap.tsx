'use client'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function QuizMap() {
  return (
    <MapContainer
      center={[-2.5, 118]} 
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
      maxBounds={[
        [-11.0, 94.0],
        [6.5, 141.0]
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
      />
    </MapContainer>
  )
}
