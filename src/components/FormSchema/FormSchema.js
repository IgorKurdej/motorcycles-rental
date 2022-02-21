import React, {useState} from 'react';
import * as S from './FormSchema.style'
import FormInput from "./FormInput/FormInput";
import Checkout from "./Checkout/Checkout";
import {ModalStatus} from "./Modal/Modal.style";

const FormSchema = ({ title, inputs, button, handleSubmit, message, ...props }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // przekazac cialo modala i status jako props i moze odpalic to w useEffect

    return (
        <S.FormWrapper>
            <S.FormTitle>{ title }</S.FormTitle>
            <S.FormBody onSubmit={handleSubmit}>
                {
                    inputs.map((input, idx) => (
                        <FormInput
                            key={idx}
                            label={input.label}
                            name={input.name}
                            type={input.type}
                            value={input.value}
                            placeholder={input.placeholder}
                            as={input.as}
                            disabled={input.disabled}
                            minDate={input.minDate}
                            maxDate={input.maxDate}
                            onChange={input.onChange}
                            register={input.register}
                        />
                    ))
                }
                {
                    props.secondaryButton && <Checkout
                        startDate={props.startDate}
                        endDate={props.endDate}
                        numberOfDays={props.numberOfDays}
                        price={props.price}
                    />
                }
                <S.Button type="submit">{ button }</S.Button>
            </S.FormBody>
            {/* ZROBIC Z BUTTONOW NAVLINKI */}
            { props.secondaryButton && <S.Button cancel>{ props.secondaryButton }</S.Button>}

            {/*---------------------------MODAL---------------------------------*/}
            {
                isContactModalOpen && (
                    <ModalStatus error>{message}</ModalStatus>
                )
            }
        </S.FormWrapper>
    );
};

export default FormSchema;