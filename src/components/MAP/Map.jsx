// src/components/MAP/Map.jsx

import "./Map.css";

import { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function Mapp() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
 
    if (typeof window === "undefined") return;
    if (mapRef.current) return; // prevent double init

    if (!mapContainer.current) {
      console.error("mapContainer ref is null");
      return;
    }

    // Use new maplibregl.Map(...) — avoids named-import interop issues
    const map = new maplibregl.Map({
      container: mapContainer.current,
      center: [25.281773, 54.686633],
      zoom: 12,
      hash: false,
      pitch: 100,      // 0-85 degrees (tilt up/down)
      bearing: -10 ,
      maxBounds:[
        [24.896393, 54.511117], // Southwest coordinates
        [25.574799,54.921618] // Northeast coordinates
    ],
   
      style: 'dark.json',
      attributionControl: false
    });

    mapRef.current = map;

    const color = [ 'case',
    ['==', ['get', 'fee'], 'yes'],   '#ff0000',
    ['==', ['get', 'fee'], 'no'],    '#00ff00',
                                     '#aaaaaa'  
];

    map.on("load", () => {console.log("Map loaded successfully")
    map.addSource('pol', { 
      type: 'geojson',
      data: '/bett.json',
      
      
    });
    map.addSource('zones', { 
      type: 'geojson',
      data: '/zonos.geojson'
    });

    map.addLayer({
      id : 'polygons',
      type: 'fill',
      source: 'pol',
      layout: {},
      paint: {
      'fill-color': color,
      'fill-opacity' : 0.5
      }
    })

    map.addLayer({
      'id' : 'outline',
      'type': 'line',
      'source': 'pol',
      'layout': {},
      'paint': {
        'line-color': color,
        'line-width' : 2
      }
    });

    map.addLayer({
      id : 'zone',
      type: 'fill',
      source: 'zones',
      layout: {},
      paint: {
        'fill-color': [ 'case',
    ['==', ['get', 'Zona'], 'Mėlynoji zona'],  '#0c63fa',
    ['==', ['get', 'Zona'], 'Geltonoji zona'], '#effb00',
    ['==', ['get', 'Zona'], 'Raudonoji zona'], '#ff0909',
    ['==', ['get', 'Zona'], 'Žalioji zona'],   '#01ca04',
    '#d2d1d1' 
                                     
],
        'fill-opacity': 0.1
      }
    },
      'polygons');

       map.on ( 'click', 'polygons', (e) => {
         map.flyTo({
                center: e.lngLat
            });

    new maplibregl.Popup().setLngLat(e.lngLat).setHTML(` <div class="popzone"> <p> Access: ${e.features[0].properties.access ?? 'unknown'} </p>
                                                      <p> Fee: ${e.features[0].properties.fee ?? 'unknown'} </p> </div>`).addTo(map);
    console.log(e.features)
    
    } );

    map.on('mouseenter', 'polygons', () => {
            map.getCanvas().style.cursor = 'pointer';
        });
    map.on('mouseleave', 'polygons', () => {
            map.getCanvas().style.cursor = '';
        });
    }
  );
    
    map.on("error", (e) => console.error("MapLibre error:", e));

   
    
    return () => {
      map.remove();
      mapRef.current = null;
    };

  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "500px",
        height: "500px",
        minHeight: "500px",
        border: "1px solid rgba(0,0,0,0.06)",
        borderRadius: "15px",
        background: "#eee"
      }}
    />
  );
}

export default Mapp;