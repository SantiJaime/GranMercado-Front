import { Button, IconButton, Typography } from "@material-tailwind/react";
import { Form, Formik } from "formik";
import { Col, Container, Image, Row } from "react-bootstrap";
import { InputComp } from "../components/InputComp";
import { EmailIcon } from "../components/Icons";
import {
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { errorRegisterSchema } from "../utils/validationSchemas";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HIDE_PASSWORD_ICON_CLASSES } from "../constants/classes";
import { toast } from "sonner";
import { createNewUser } from "../helpers/usersQueries";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeatPassword: false,
  });

  const showPasswordButton = (
    <IconButton
      className="bg-transparent shadow-none"
      onClick={() =>
        setShowPassword((prevState) => ({
          ...prevState,
          password: !prevState.password,
        }))
      }
    >
      {!showPassword.password ? (
        <EyeIcon className={HIDE_PASSWORD_ICON_CLASSES} />
      ) : (
        <EyeSlashIcon className={HIDE_PASSWORD_ICON_CLASSES} />
      )}
    </IconButton>
  );
  const showRepeatPasswordButton = (
    <IconButton
      className="bg-transparent shadow-none"
      onClick={() =>
        setShowPassword((prevState) => ({
          ...prevState,
          repeatPassword: !prevState.repeatPassword,
        }))
      }
    >
      {!showPassword.repeatPassword ? (
        <EyeIcon className={HIDE_PASSWORD_ICON_CLASSES} />
      ) : (
        <EyeSlashIcon className={HIDE_PASSWORD_ICON_CLASSES} />
      )}
    </IconButton>
  );

  const createUser = (values: CreateUserValues) => {
    if (values.password !== values.repeatPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    createNewUser(values)
      .then((res) => {
        toast.success(res.msg, {
          description: "Ya puedes iniciar sesión",
        });
        navigate("/iniciar-sesion");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <Container className="my-8">
      <Row>
        <Col lg={6} sm={12} className="my-3 flex justify-center">
          <Formik
            initialValues={{
              email: "",
              fullName: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => createUser(values)}
            validationSchema={errorRegisterSchema}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                className="w-full rounded-lg bg-light-blue-300/40 p-3"
              >
                <Typography variant="h3" color="black">
                  Crea una cuenta
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
                  id="createUserNameId"
                  name="fullName"
                  placeholder="Ej: Juan Pérez"
                  type="text"
                  onChange={handleChange}
                  label="Nombre completo"
                  icon={<UserCircleIcon className="size-5" />}
                  value={values.fullName}
                  errors={errors.fullName}
                  touched={touched.fullName}
                />
                <InputComp
                  id="createUserPasswordId"
                  name="password"
                  placeholder="************"
                  type={showPassword.password ? "text" : "password"}
                  onChange={handleChange}
                  label="Contraseña"
                  icon={<KeyIcon className="size-5" />}
                  value={values.password}
                  errors={errors.password}
                  touched={touched.password}
                  showPassButton={showPasswordButton}
                />
                <InputComp
                  id="createUserRepeatPasswordId"
                  name="repeatPassword"
                  placeholder="************"
                  type={showPassword.repeatPassword ? "text" : "password"}
                  onChange={handleChange}
                  label="Repetir contraseña"
                  icon={<KeyIcon className="size-5" />}
                  value={values.repeatPassword}
                  errors={errors.repeatPassword}
                  touched={touched.repeatPassword}
                  showRepeatPassButton={showRepeatPasswordButton}
                />
                <div className="flex justify-end">
                  <Button
                    variant="gradient"
                    type="submit"
                    color="light-blue"
                    size="sm"
                  >
                    Registrarse
                  </Button>
                </div>
                <hr className="my-3" />
                <div className="flex justify-center">
                  <Typography variant="paragraph">
                    <span>¿Ya estás registrado? </span>
                    <Link
                      to="/iniciar-sesion"
                      className="font-bold hover:underline"
                    >
                      Inicia sesión aquí
                    </Link>
                  </Typography>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
        <Col lg={6} sm={12} className="my-3 flex justify-center">
          <Image
            src="/GranMercadoLogo2.png"
            alt="Gran Mercado Logo"
            className="rounded-lg"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
