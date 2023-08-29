import React, { useEffect, useRef } from "react";
import { Circle } from "react-leaflet";
type Props = {
  lat: number;
  lng: number;
  radius: number;
  color?: string;
};
function AreaCircle({ lat, lng, color, radius }: Props) {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef) {
      console.log(circleRef);
    }
  }, [circleRef]);
  return (
    <Circle center={[lat, lng]} radius={radius} color={color} ref={circleRef} />
  );
}

export default AreaCircle;
