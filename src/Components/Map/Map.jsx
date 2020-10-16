import React, { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"

import "./Map.css"

mapboxgl.accessToken="pk.eyJ1IjoiYm5hbiIsImEiOiJja2c5bjZjbzIwOXJkMnJxZDA5eGY4eDA1In0.v4-4SGcs4DRis32p0bBuIA"

const Map = ({map}) => {
  const mapContainerRef = useRef()
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [40.60924, -74.237],
      zoom: 9,
    }) 
  },[])
   

  return (
    <>
      <div className="map-container" ref={mapContainerRef}>
{map}
      </div>
    </>
  )
}

export default Map