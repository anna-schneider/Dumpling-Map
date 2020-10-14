import React, { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"

import "./Map.css"

mapboxgl.accesstoken=process.env.REACT_APP_MAPBOX_API_KEY

const Map = () => {
  const mapContainerRef = useRef()
  useEffect(() => {
    const mainMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // center: {long, lat},
      zoom: 9,

      
    }) 
  })
   

  return (
    <>
      <div ref={mapContainerRef}>

      </div>
    </>
  )
}

export default Map