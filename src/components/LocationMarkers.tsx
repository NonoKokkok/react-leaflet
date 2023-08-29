import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";

function LocationMarkers() {
  const initialMarkers: LatLng[] = [
    new LatLng(17.9738, 102.628359),
    new LatLng(17.94976, 102.635382),
  ];
  const [markers, setMarkers] = useState(initialMarkers);

  useMapEvents({
    click(e) {
      markers.push(e.latlng);
      setMarkers((prevValue) => [...prevValue, e.latlng]);
    },
  });

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  return (
    <>
      {markers.map((marker, i) => (
        <Marker position={marker} key={i}></Marker>
      ))}
    </>
  );
}

export default LocationMarkers;
