import { Button, IconButton, Typography } from "@material-tailwind/react";
import { Form, Formik } from "formik";
import { Container } from "react-bootstrap";
import InputComp from "../components/InputComp";
import { EmailIcon } from "../components/Icons";
import { EyeIcon, EyeSlashIcon, KeyIcon } from "@heroicons/react/24/outline";
import { errorLoginSchema } from "../utils/validationSchemas";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const iconClasses = "size-5 text-gray-900";
  const button = (
    <IconButton
      className="bg-transparent shadow-none"
      onClick={() => setShowPassword((prevState) => !prevState)}
    >
      {!showPassword ? (
        <EyeIcon className={iconClasses} />
      ) : (
        <EyeSlashIcon className={iconClasses} />
      )}
    </IconButton>
  );

  const createUser = (values: LoginUserValues) => {
    console.log(values);
  };

  return (
    <Container className="my-8 flex justify-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => createUser(values)}
        validationSchema={errorLoginSchema}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="formWidth rounded-lg bg-gray-300 p-3"
          >
            <Typography variant="h3" color="black">
              Inicia sesión con tu cuenta
            </Typography>
            <hr className="my-3" />
            <InputComp
              id="createUserEmailId"
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
              id="createUserPasswordId"
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
              <Button variant="gradient" type="submit">
                Iniciar sesión
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
