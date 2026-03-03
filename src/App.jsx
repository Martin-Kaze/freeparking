// src/MapComponent.jsx
import React, { useRef, useEffect, useState } from "react";
import Nav from "./components/navbar/Nav.jsx"
import Mapp from "./components/map/Map.jsx"
import Checkbox from "./components/checkbox/Checkbox";
import Range from "./components/Range.jsx";



export default function MapComponent(){
  const [Red, setRed] = useState(true);
  const [Green, setGreen] = useState(true);
  const [Gray, setGray] = useState(true);
  const [Ranges, SetRanges] = useState(50);

  return (
    <>
   <Nav />
   <Mapp red ={Red} green ={Green} gray ={Gray} opacity = {Ranges}/>
   <Checkbox id="Red" name="Show Red" clicked={setRed} checked={Red}/>
   <Checkbox id="Green" name="Show Green" clicked={setGreen} checked={Green}/>
   <Checkbox id="Gray" name="Show Gray" clicked={setGray} checked={Gray}/>
   <Range id ="Zones" name="Zone opacity" clicked={SetRanges} value={Ranges} />
   
    </>
   
  )
  
}