import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    firstname: yup.string().required('Proszę podać imię'),
    lastname: yup.string().required('Proszę podać nazwisko'),
    email: yup.string().email('Niepoprawny email').required('Proszę podać email'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, "Telefon powinien składać się z samych cyfr")
        .min(9, 'Telefon powinien składać się z 9 cyfr')
        .max(9, 'Telefon powinien składać się z 9 cyfr'),
    password: yup.string().min(6, 'Minimum 6 znaków').required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Hasła muszą być takie same').required('Powtórz hasło')
});

export const logInSchema = yup.object().shape({
    email: yup.string().email('Niepoprawny email').required('Proszę podać email'),
    password: yup.string().min(6, 'Minimum 6 znaków').required()
});

export const contactSchema = yup.object().shape({
    email: yup.string().email('Niepoprawny email').required('Proszę podać email'),
    title: yup.string().max(50).required(),
    message: yup.string().required()
})

export const reservationSchema = yup.object().shape({
    firstname: yup.string().required('Proszę podać imię'),
    lastname: yup.string().required('Proszę podać nazwisko'),
    email: yup.string().email('Niepoprawny email').required('Proszę podać adres email'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, "Telefon powinien składać się z samych cyfr")
        .min(9, 'Telefon powinien składać się z 9 cyfr')
        .max(9, 'Telefon powinien składać się z 9 cyfr'),
    // startDate: yup
    //     .date()
    //     .required('Proszę wybrać datę rozpoczęcia'),
    // endDate: yup
    //     .date()
    //     // .when('startDate', (startDate, schema) => (startDate && schema.min(startDate)))
    //     .required('Należy wybrać datę zakończenia')
})