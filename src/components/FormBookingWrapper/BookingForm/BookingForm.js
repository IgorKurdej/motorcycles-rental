import React, {useEffect, useState} from 'react';
import FormSchema from "../../FormSchema/FormSchema";
import axios from "axios";
import Modal from "../../Modal/Modal";

const BookingForm = ({ motorcycle, price }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numberOfDays, setNumberOfDays] = useState(1);

    const [toggleModal, setToggleModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        setNumberOfDays((new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24));
    }, [startDate, endDate]);

    useEffect(() => {
        toggleModal && setTimeout(() => setToggleModal(false), 3000);
    }, [toggleModal]);

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
            onChange: ((e) => setStartDate(e.target.value)),
            required: true
        },
        {
            name: 'startDate',
            type: 'date',
            label: "Data zakończenia",
            value: endDate,
            minDate: startDate || convertDateToInputDate(new Date()),
            onChange: ((e) => setEndDate(e.target.value)),
            required: true
        }
    ];

    const handleSubmit = e => {
        e.preventDefault();

        const bookingValues = {
            startDate: startDate,
            endDate: endDate,
            price: numberOfDays * price,
            userId: 51,
            motorcycleId: motorcycle
        };

        axios
            .post('https://motorcycle-rental.herokuapp.com/booking', bookingValues)
            .then(res => {
                setStartDate('');
                setEndDate('');
                setNumberOfDays(1);
                setToggleModal(true);
                setModalMessage(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {
                toggleModal && <Modal>{modalMessage}</Modal>
            }
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