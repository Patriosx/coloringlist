import axios from "axios";
import React, { useState, useEffect } from "react";

const GeoLoc = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [myLocation, setMyLocation] = useState(null);
  const [reverseGeo, setReverseGeo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const KEY = "AIzaSyBOPLRuthysBtMVa11F2WsGnWZ2S15u5sE";

  const getGeolocationApi = () => {
    navigator.geolocation.getCurrentPosition((pos) => setCurrentLocation(pos));
  };
  const geoCoding = async () => {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${KEY}`;
    try {
      const { data } = await axios.get(URL);
      //   console.log(data.results[0]);
      setMyLocation({
        ...data.results[0].geometry.location,
        address: data.results[0].formatted_address,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const reverseGeocoding = async () => {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${myLocation.lat},${myLocation.lng}&key=${KEY}`;
    const { data } = await axios.get(URL);

    console.log(data);
  };
  /*
  function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
*/
  useEffect(() => {
    getGeolocationApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    geoCoding();
    console.log("myLocation", myLocation);
  };
  return (
    <section>
      <ul>
        <h3>Navigator Geolocation API</h3>
        <li>Latitude: {currentLocation?.coords.latitude}</li>
        <li>Longitude: {currentLocation?.coords.longitude}</li>
      </ul>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Location"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Get Location</button>
      </form>
      {myLocation && (
        <ul>
          <h3>Google Geocoding API</h3>
          <li>
            <b>{myLocation.address}</b>
          </li>
          <li>Latitude: {myLocation.lat}</li>
          <li>Longitude: {myLocation.lng}</li>
        </ul>
      )}
      <hr />
      <button disabled={!myLocation} onClick={reverseGeocoding}>
        Reverse Geocoding
      </button>
    </section>
  );
};

export default GeoLoc;
