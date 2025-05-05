export const validateSignIn = (data) => {
    const { email, password } = data;
    const errors = {};

    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
}
export const validateSignUp = (data) => {
    const { email, password, username } = data;
    const errors = {};

    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    if (!username) {
        errors.username = 'Username is required';
    } else if (username.length < 3) {
        errors.username = 'Username must be at least 3 characters long';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
}