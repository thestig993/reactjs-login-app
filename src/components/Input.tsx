import { useField, ErrorMessage } from "formik";
import classes from "./Input.module.scss";

const Input = ({ ...props }: { [x: string]: any; name: string }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <input
        className={`form-control shadow-none ${
          (meta.touched && meta.error) || props.hasError ? "is-invalid" : ""
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        className={`${classes.error}`}
        name={field.name}
      />
    </div>
  );
};

export default Input;
