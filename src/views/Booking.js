import React from 'react';
import {useLocation} from "react-router";
import BookingForm from "../components/BookingForm/BookingForm";

const Booking = () => {
    let location = useLocation();
    const motorcycle = location.state.motorcycle;

    return (
        <div>
            <BookingForm motorcycle={motorcycle} />
        </div>
    );
};

export default Booking;