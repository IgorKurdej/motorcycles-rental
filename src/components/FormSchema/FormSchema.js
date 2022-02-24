import React from 'react';
import * as S from './FormSchema.style'
import FormInput from "./FormInput/FormInput";
import Checkout from "./Checkout/Checkout";

const FormSchema = ({ title, inputs, button, handleSubmit, handleButtonClick, message, ...props }) => (
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
                        errMessage={input.errMessage}
                        required={input.required}
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
        { props.secondaryButton && <S.Button cancel>{ props.secondaryButton }</S.Button>}
        {/* TODO ZROBIC Z BUTTONOW NAVLINKI */}
        {/*TODO POMYSLEC MOZE O LEPSZYM ROZWIAZANIU Z MODALEM*/}
    </S.FormWrapper>
);

export default FormSchema;