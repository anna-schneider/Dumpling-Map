import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"

import "./Map.css"

mapboxgl.accessToken="pk.eyJ1IjoiYm5hbiIsImEiOiJja2c5bjZjbzIwOXJkMnJxZDA5eGY4eDA1In0.v4-4SGcs4DRis32p0bBuIA"

export default function MapDetail() {
  const mapContainerRef = useRef(null)

  const [lng, setlng] = useState(5)
  const [lat, setLat] = useState(34)
  const [zoom, setZoom] = useState(2)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/bnan/ckg9o2hi702bc19kw4lsy82ip",
      center: [lng, lat],
      zoom: zoom,
    })
    
  })
  
  
   

  return (
    <>
      <div className="map-container" ref={mapContainerRef}>

      </div>
    </>
  )
}

