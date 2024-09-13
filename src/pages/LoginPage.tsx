import { Button, IconButton, Typography } from "@material-tailwind/react";
import { Form, Formik } from "formik";
import { Container } from "react-bootstrap";
import { InputComp } from "../components/InputComp";
import { EmailIcon } from "../components/Icons";
import { EyeIcon, EyeSlashIcon, KeyIcon } from "@heroicons/react/24/outline";
import { errorLoginSchema } from "../utils/validationSchemas";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HIDE_PASSWORD_ICON_CLASSES } from "../constants/classes";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const button = (
    <IconButton
      className="bg-transparent shadow-none"
      onClick={() => setShowPassword((prevState) => !prevState)}
    >
      {!showPassword ? (
        <EyeIcon className={HIDE_PASSWORD_ICON_CLASSES} />
      ) : (
        <EyeSlashIcon className={HIDE_PASSWORD_ICON_CLASSES} />
      )}
    </IconButton>
  );

  const loginUser = (values: LoginUserValues) => {
    console.log(values);
  };

  return (
    <Container className="my-8 flex justify-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => loginUser(values)}
        validationSchema={errorLoginSchema}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="formWidth rounded-lg bg-light-blue-300/40 p-3"
          >
            <Typography variant="h3" color="black">
              Inicia sesión con tu cuenta
            </Typography>
            <hr className="my-3" />
            <InputComp
              id="loginUserEmailId"
              name="email"
              placeholder="example@mail.com"
              type="text"
              onChange={handleChange}
              label="Correo electrónico"
              icon={<EmailIcon className="size-5" />}
              value={values.email}
              errors={errors.email}
              touched={touched.email}
            />
            <InputComp
              id="loginUserPasswordId"
              name="password"
              placeholder="************"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              label="Contraseña"
              icon={<KeyIcon className="size-5" />}
              value={values.password}
              errors={errors.password}
              touched={touched.password}
              showPassButton={button}
            />
            <div className="flex justify-end">
              <Button variant="gradient" type="submit" color="light-blue" size="sm">
                Iniciar sesión
              </Button>
            </div>
            <hr className="my-3" />
            <div className="flex justify-center">
              <Typography variant="paragraph">
                <span>¿Aún no tienes una cuenta? </span>
                <Link to="/registrarse" className="font-bold hover:underline">
                  Haz click aquí
                </Link>
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
