import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    firstname: yup.string().required('Proszę podać imię'),
    lastname: yup.string().required('Proszę podać nazwisko'),
    email: yup.string().email('Niepoprawny email').required('Proszę podać email'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, "Telefon powinien składać się z samych cyfr")
        .min(9, 'Telefon powinien składać się z 9 cyfr')
        .max(9, 'Telefon powinien składać się z 9 cyfr')
        .required(),
    password: yup.string().min(6, 'Minimum 6 znaków').required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Hasła muszą być takie same').required('Powtórz hasło')
});

export const logInSchema = yup.object().shape({
    email: yup.string().email('Niepoprawny email').required('Proszę podać email'),
    password: yup.string().min(6, 'Minimum 6 znaków').required()
});

export const motorcycleSchema = yup.object().shape({
    brand: yup.string().required('Podaj marke'),
    model: yup.string().required('Podaj model'),
    // pojemność: yup.number().require('Podaj pojemność silnika'),
    // moc: yup.number().require('Podaj moc silnika'),
    // rok: yup.number().require('Podaj rok produkcji'),
    // cena: yup.number().require('Podaj cene'),
    // img: yup.string().require('Podaj link do zdjęcia')
});