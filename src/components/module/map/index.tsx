"use client"
import L from "leaflet" 
import React, { useEffect } from "react"
import ReactDOMServer from "react-dom/server"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch"

import "leaflet/dist/leaflet.css"
import "leaflet-geosearch/dist/geosearch.css"

function GeoSearchCustomControl() {
  const map = useMap()

  useEffect(() => {
    // const provider = new OpenStreetMapProvider()
    // const searchControl = new GeoSearchControl({
    //   provider,
    //   style: "bar",
    // })

    // const searchIcon = L.control({
    //   position: "topleft",
    // })

    // searchIcon.onAdd = function () {
    //   const container = L.DomUtil.create("div", "custom-search-icon")
    //   container.innerHTML = ReactDOMServer.renderToString(<MagnifyingGlassIcon />)
    //   return container
    // }

    // searchIcon.addTo(map)

    // map.addControl(searchControl)

    // return () => {
    //   map.removeControl(searchControl)
    // }
  }, [])

  return null
}

function Map() {
  return (
    <MapContainer className="h-32" center={[35.690997236, 51.420498318]} zoom={13} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoSearchCustomControl />
    </MapContainer>
  )
}

export default Map
