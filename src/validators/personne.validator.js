import * as yup from 'yup'

const personneSchema = yup.object().shape({
    nom: yup
        .string()
        .required()
        .matches(/^[A-Z]{1}.{2,29}$/),
    prenom: yup
        .string()
        .required()
        .matches(/^[A-Z]{1}.{2,29}$/),
    age: yup
        .number()
        .required()
        .min(18)
        .max(150)
})

export default personneSchema