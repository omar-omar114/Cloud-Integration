import * as React from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import Navbar from './components/Navbar';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="map-container">
        <div className="map-title">
          <h1>My location ! </h1>
        </div>
        <Map mapLib={maplibregl} 
          initialViewState={{
            longitude: 10.199999999,
            latitude: 36.892166,
            zoom: 16
          }}
          style={{width: "50%", height: " calc(100vh - 77px)"}}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=dmYd2aWxcpplF5hi7ibj"
        >
          <NavigationControl position="top-right" />
          <Marker 
            longitude={10.199999999}
            latitude={36.892166}
            color='#0c448d'
          />
        </Map>
      </div>
    </div>
  );
}

export default App;
