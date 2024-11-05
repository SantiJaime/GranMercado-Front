import { PencilIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Label, Select, TextInput } from "flowbite-react";
import { PersonGearIcon } from "./Icons";
import { updateUserFullName, updateUserRole } from "../helpers/usersQueries";
import { toast } from "sonner";

type User = Pick<UserResponse, "email" | "fullName" | "role" | "id">;

interface Props {
  fullName: string;
  role: string;
  id: number;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const EditModalComp: React.FC<Props> = ({ fullName, role, id, setUsers }) => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName,
    role,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    role: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    if (formValues.fullName.length < 3 || formValues.fullName.length > 100) {
      setErrors({
        ...errors,
        fullName:
          "El nombre debe tener un mínimo de 3 caracteres y un máximo de 100",
      });
      return;
    }
    setErrors({ ...errors, [name]: "" });
  };

  const changeUserFullName = () => {
    if (formValues.fullName.length < 3 || formValues.fullName.length > 100) {
      setErrors({
        ...errors,
        fullName:
          "El nombre debe tener un mínimo de 3 caracteres y un máximo de 100",
      });
      return;
    }
    updateUserFullName(formValues.fullName, id)
      .then((res) => {
        toast.success(res.msg);
        setUsers((users) => {
          return users.map((user) =>
            user.id === id ? { ...user, fullName: formValues.fullName } : user
          );
        });
        handleClose();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const changeUserRole = () => {
    const id_role = formValues.role === "Usuario" ? 1 : 2;

    updateUserRole(id_role, id)
      .then((res) => {
        toast.success(res.msg);
        setUsers((users) => {
          return users.map((user) =>
            user.id === id ? { ...user, role: formValues.role } : user
          );
        });
        handleClose();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Tooltip
        content="Editar usuario"
        className="bg-gray-100 text-gray-900"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <IconButton variant="filled" color="light-blue" onClick={handleShow}>
          <PencilIcon className="size-5" />
        </IconButton>
      </Tooltip>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar este usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <div className="mb-2 block">
                <Label
                  htmlFor="update-user-fullname-id"
                  value="Nombre completo"
                />
              </div>
              <TextInput
                id="update-user-fullname-id"
                type="text"
                name="fullName"
                placeholder="Ej: Juan Pérez"
                value={formValues.fullName}
                icon={
                  UserCircleIcon as React.FunctionComponent<
                    React.SVGProps<SVGSVGElement>
                  >
                }
                onChange={(ev) => handleChange(ev)}
                shadow
              />
              {errors.fullName && (
                <small className="text-red-600">{errors.fullName}</small>
              )}
              <Button
                className="mt-3"
                fullWidth
                variant="gradient"
                onClick={changeUserFullName}
              >
                Guardar cambio de nombre
              </Button>
            </div>
            <div className="mb-3">
              <div className="mb-2 block">
                <Label htmlFor="update-user-role-id" value="Your email" />
              </div>
              <Select
                id="update-user-role-id"
                icon={
                  PersonGearIcon as React.FunctionComponent<
                    React.SVGProps<SVGSVGElement>
                  >
                }
                name="role"
                value={formValues.role}
                onChange={(ev) => handleChange(ev)}
              >
                <option value="Administrador">Administador</option>
                <option value="Usuario">Usuario</option>
              </Select>
              <Button
                className="mt-3"
                fullWidth
                variant="gradient"
                onClick={changeUserRole}
              >
                Guardar cambio de rol
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModalComp;
