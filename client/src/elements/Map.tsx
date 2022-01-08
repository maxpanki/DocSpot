import React from "react";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {MapProps} from "../types";

const Map = ({lat, lng}: MapProps) => {

    const containerStyle = {
        width: '1000px',
        height: '400px'
    };

    const center = {
        lat: lat,
        lng: lng
    }

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCMKX8-pAfqZoYvIlUlcTl_Yq_OvkGxT2Y"
        >
            <div className='max-w-full flex'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    zoom={5}
                    center={center}
                >
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </LoadScript>
    )
}

export default React.memo(Map)