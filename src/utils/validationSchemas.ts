import * as yup from "yup";

export const errorLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formado de correo electrónico inválido"),
  password: yup.string().required("Campo contraseña obligatorio"),
});
