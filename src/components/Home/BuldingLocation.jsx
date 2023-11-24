import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BuldingLocation = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    
    <div className="mx-auto mt-16 max-w-7xl w-full" style={{ height: "50vh", width: "100%" }}>
        <h1 className="text-center font-semibold text-2xl text-slate-500 mb-5">apartment’s location and how to get there.</h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default BuldingLocation;
