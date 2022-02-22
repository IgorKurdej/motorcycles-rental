import React from 'react';
import {useLocation} from "react-router";
import FormBookingWrapper from "../components/FormBookingWrapper/FormBookingWrapper";

const Booking = () => {
    //TODO moze zamiast useLocation pobrac konkretny motocykl z bazy danych
    let location = useLocation();
    const motorcycle = location.state.motorcycle;

    return (
        <div>
            <FormBookingWrapper motorcycle={motorcycle} />
        </div>
    );
};

export default Booking;