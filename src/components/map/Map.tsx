import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Leaflet from 'leaflet'
import LeafletFullScreen from 'leaflet.fullscreen'
import 'leaflet/dist/leaflet.css'
import 'leaflet.fullscreen/Control.FullScreen.css'

export interface MapPinDetails {
  popup: string
  location: {
    lat: number
    long: number
  }
}

interface MapProps {
  pins: MapPinDetails[]
}

import FSIcon2s from 'leaflet.fullscreen/icon-fullscreen.png'

const MapContainer = styled.div<{ ref: any }>`
  width: 100%;
  height: 600px;
  // .fullscreen-icon {
  //   background-image: url(${FSIcon2s});
  //   background-size: 26px 26px;
  // }
`

import MapPinIcon from './map-pin.png'

const Map: React.FunctionComponent<MapProps> = ({ pins }) => {
  const mapRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (mapRef.current && window) {
      // Initialize map.
      const map = Leaflet.map(mapRef.current, {
        center: [51.505, -0.09],
        zoom: 13,
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: 'topleft',
        },
      })

      // Add tile layer.
      Leaflet.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            'pk.eyJ1IjoiYW5kcmV3LWZ1bHRvbiIsImEiOiJjazh3ZDE1a2owbTNtM21wa2F6Zm5tc2tsIn0.2XhpZTQhmkZ7zrLitCK_CA',
        }
      ).addTo(map)
      // Initialise a pin icon
      const icon = Leaflet.icon({
        iconUrl: MapPinIcon,
        iconSize: [20, 28],
        iconAnchor: [13, 28],
        popupAnchor: [-3, -30],
      })
      // Add all the pins
      const pinLocations: Leaflet.LatLngBoundsExpression = pins.map((p) => {
        const marker = Leaflet.marker([p.location.lat, p.location.long], {
          icon,
        })
          .addTo(map)
          .bindPopup(p.popup)
        return [p.location.lat, p.location.long]
      })

      map.fitBounds(pinLocations)

      return () => {
        map.remove()
      }
    }
  }, [mapRef, pins])

  return <MapContainer ref={mapRef} />
}

export default Map
