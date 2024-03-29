import { useState } from "react";

export function useForm(initialFValues, validateOnChange = false, validate) {
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});
    const [errorsEnable, setErrorsEnable] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        if (validateOnChange) validate({ [name]: value });
    };

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({});
        setErrorsEnable({});
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        errorsEnable,
        setErrorsEnable,
        handleInputChange,
        resetForm,
    };
}

export function Form(props) {
    const { children, ...others } = props;
    return (
        <form autoComplete="off" {...others}>
            {children}
        </form>
    );
}
