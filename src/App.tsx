import { Circle, LatLng } from "leaflet";
import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import AreaCircle from "./components/AreaCircle";
import LocationMarkers from "./components/LocationMarkers";

function App() {
  // const onClick = useCallback(() => {
  //   console.log("click function");
  // }, []);
  // useMapEvent("click", onClick);
  useEffect(() => {
    const from = new LatLng(17.9738, 102.628359);

    const to = new LatLng(17.94976, 102.635382);

    const dis = from.distanceTo(to);
    console.log(dis / 1000);
  }, []);

  return (
    <>
      <div className=" h-screen w-full ">
        <MapContainer
          center={[17.9764733, 102.6304279]}
          zoom={14}
          scrollWheelZoom={true}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarkers />
          <AreaCircle
            lat={17.9764733}
            lng={102.6304279}
            color="#ff4444"
            radius={200}
          />
          <AreaCircle
            lat={17.9764733}
            lng={102.6304279}
            radius={600}
            color="#7091F5"
          />
          <AreaCircle
            lat={17.9764733}
            lng={102.6304279}
            color="#A8DF8E"
            radius={1200}
          />
        </MapContainer>
      </div>
    </>
  );
}

export default App;
