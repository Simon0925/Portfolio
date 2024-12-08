import { FormValues, FormErrors } from '../interface';

const validateForm = (values: FormValues): FormErrors => {
    const validationErrors: FormErrors = {};
    if (!values.email) {
        validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        validationErrors.email = 'Email address is invalid';
    }

    if (!values.password) {
        validationErrors.password = 'Password is required';
    } else if (values.password.length < 8) {
        validationErrors.password = 'Password must be at least 8 characters';
    }

    return validationErrors;
};

export default validateForm;