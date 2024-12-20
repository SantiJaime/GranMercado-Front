import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import {
  DIV_ICON_CLASSES,
  TURN_INPUT_CLASSES,
  TURN_LABEL_CLASSES,
} from "../constants/classes";

interface Props extends InputAndSelect {
  placeholder: string;
  type: InputType;
  showPassButton?: JSX.Element;
  showRepeatPassButton?: JSX.Element;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const InputComp: React.FC<Props> = ({
  name,
  type,
  placeholder,
  id,
  label,
  icon,
  onChange,
  value,
  errors,
  touched,
  showPassButton,
  showRepeatPassButton,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className={TURN_LABEL_CLASSES}>
        {label}
      </label>
      <div className="relative">
        <div className={`${DIV_ICON_CLASSES} start-0 ps-3.5`}>{icon}</div>
        <input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          className={`${TURN_INPUT_CLASSES} ${
            errors && touched && "!border-red-500"
          }`}
          placeholder={placeholder}
          value={value}
        />
        {name === "password" ? (
          <div className="absolute inset-y-0 end-0 flex items-center pe-0.5">
            {showPassButton}
          </div>
        ) : name === "repeatPassword" ? (
          <div className="absolute inset-y-0 end-0 flex items-center pe-0.5">
            {showRepeatPassButton}
          </div>
        ) : (
          ""
        )}
        {errors && touched && (
          <div
            className={`${DIV_ICON_CLASSES} end-0 ${
              name === "password" || name === "repeatPassword"
                ? "pe-5"
                : "pe-3.5"
            }`}
          >
            <ExclamationCircleIcon className="size-5 text-red-500" />
          </div>
        )}
      </div>
      <small className="text-danger">{errors && touched && errors}</small>
    </div>
  );
};