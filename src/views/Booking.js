import React from 'react';
import {useLocation, useParams} from "react-router";
import BookingFormWrapper from "../components/BookingFormWrapper/BookingFormWrapper";

const Booking = () => {
    let location = useLocation();
    const motorcycle = location.state.motorcycle;

    return (
        <div>
            <BookingFormWrapper motorcycle={motorcycle} />
        </div>
    );
};

export default Booking;