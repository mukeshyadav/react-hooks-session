import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [status, setStatus] = useState(navigator.onLine);

  const initialGeoLocationState = {
    latitude: null,
    longitude: null,
    speed: null
  };

  const [{ latitude, longitude, speed }, setGeoLocation] = useState(
    initialGeoLocationState
  );
  let mounted = true;

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    document.title = `I have clicked ${count} times.`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handeOffline);

    navigator.geolocation.getCurrentPosition(handleGeoLocation);
    const watchId = navigator.geolocation.watchPosition(handleGeoLocation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handeOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const handleGeoLocation = event =>
    mounted
      ? setGeoLocation({
          latitude: event.coords.latitude,
          longitude: event.coords.longitude,
          speed: event.coords.speed
        })
      : null;

  const toggleLight = () => setIsOn(prevIsOn => !prevIsOn);

  const handleMouseMove = event =>
    setMousePosition({ x: event.pageX, y: event.pageY });

  const handleOnline = () => setStatus(true);

  const handeOffline = () => setStatus(false);

  return (
    <div className="wrapper">
      <h2>Counter</h2>
      <button onClick={incrementCount}>I clicked {count}</button>
      <hr />
      <h2>Toggle Light</h2>
      <img
        onClick={toggleLight}
        alt="Toggle Light"
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/000"
        }
        style={{ height: "50px", width: "50px", cursor: "pointer" }}
      />
      <hr />
      <h2>Mouse Position</h2>
      <p>
        {JSON.stringify(mousePosition, null, 2)} <br />
      </p>
      <hr />
      <h2>Network Status</h2>
      <p>Status: {status ? "online" : "offline"}</p>
      <hr />
      <h2>GeoLocation</h2>
      <p>
        Latitude: {latitude} <br />
        longitude: {longitude} <br />
        speed: {speed}
      </p>
    </div>
  );
};

export default App;
