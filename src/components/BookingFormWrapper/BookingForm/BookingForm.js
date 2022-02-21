import React, {useEffect, useState} from 'react';
import FormSchema from "../../FormSchema/FormSchema";
import axios from "axios";

const BookingForm = ({ motorcycle, price }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numberOfDays, setNumberOfDays] = useState(1);

    useEffect(() => {
        setNumberOfDays((new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24));
    }, [startDate, endDate])

    const convertDateToInputDate = date => date.toLocaleString().split(',').shift().split('.').reverse().join('-');

    const inputs = [
        {
            name: 'email',
            value: 'igor31@o2.pl',
            label: 'Twój email',
            disabled: true,
        },
        {
            name: 'startDate',
            type: 'date',
            label: "Data rozpoczęcia",
            value: startDate,
            minDate: convertDateToInputDate(new Date()),
            maxDate: endDate,
            onChange: ((e) => setStartDate(e.target.value))
        },
        {
            name: 'startDate',
            type: 'date',
            label: "Data zakończenia",
            value: endDate,
            minDate: startDate || convertDateToInputDate(new Date()),
            onChange: ((e) => setEndDate(e.target.value))
        }
    ];

    const handleSubmit = e => {
        e.preventDefault();

        const bookingValues = {
            startDate: startDate,
            endDate: endDate,
            price: numberOfDays * price,
            userId: 21,
            motorcycleId: motorcycle
        };

        // axios
        //     .post('https://motorcycle-rental.herokuapp.com/booking', bookingValues)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }

    return (
        <div>
            <FormSchema
                title='Rezerwacja'
                inputs={inputs}
                button='Zarezerwuj'
                secondaryButton='Anuluj'
                handleSubmit={handleSubmit}
                startDate={startDate}
                endDate={endDate}
                numberOfDays={numberOfDays}
                price={price}
            />
        </div>
    );
};

export default BookingForm;