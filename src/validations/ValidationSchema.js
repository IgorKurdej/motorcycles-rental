import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().test('len', 'Musi być dokładnie 9 cyfr', val => val && val.toString().length === 9 ),
    password: yup.string().min(6).required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null])
});

export const logInSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
});

export const contactSchema = yup.object().shape({
    // email: yup.string().email().required(),
    // title: yup.string().max(50).required(),
    // message: yup.string().required()
    email: yup.string().email(),
    title: yup.string().max(50),
    message: yup.string()
})

export const reservationSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().length(9),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
})