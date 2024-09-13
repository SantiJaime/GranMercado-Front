import * as yup from "yup";

export const errorRegisterSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formado de correo electrónico inválido"),
  fullName: yup.string().required("Campo nombre completo obligatorio"),
  password: yup
    .string()
    .required("Campo contraseña obligatorio")
    .min(8, "Contraseña de mínimo 8 caracteres"),
  repeatPassword: yup
    .string()
    .required("Campo repetición de contraseña obligatorio")
    .min(8, "Contraseña de mínimo 8 caracteres"),
});
export const errorLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo correo electrónico obligatorio")
    .email("Formado de correo electrónico inválido"),
  password: yup.string().required("Campo contraseña obligatorio"),
});
