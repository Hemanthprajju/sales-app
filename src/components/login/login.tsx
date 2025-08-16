import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField, Snackbar, Alert } from '@mui/material';
import exampleImage from '../../assets/logo/logo-color.svg';
import './login.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../apis/api';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (email:any, password:any) => {
        try {
            const response = await login(email, password);

            if (response.message === 'Login successfully') {
                localStorage.setItem('token', response.info.token);
                navigate('/dashboard');
            } else {
                console.error('Error message:', response.message);
                setErrorMessage(response.message || 'Login failed');
                setOpen(true);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Now TypeScript knows this is an AxiosError
                if (error.response && error.response.data && error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('An error occurred during login. Please try again later.');
                }
            } else {
                setErrorMessage('An unexpected error occurred. Please try again later.');
            }

            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='bg-color'>
            <div className='container'>
                <div className='login-box'>
                    <div>
                        <img src={exampleImage} height={200} width={200} alt='hemanthprajju' />
                    </div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={(values) => {
                            const errors: any = {};
                            if (!values.email) {
                                errors.email = 'Email is Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.password) {
                                errors.password = 'Password is required';
                            } else if (values.password.length < 6) {
                                errors.password = 'Password must be at least 6 characters long';
                            }
                            return errors;
                        }}
                        onSubmit={(values) => { handleLogin(values.email, values.password) }}
                    >
                        <Form>
                            <div className='mb-4 w-100'>
                                <div>
                                    <Field
                                        as={TextField}
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                    />
                                    <ErrorMessage className='err-msg' name="email" component="div" />
                                </div>
                            </div>
                            <div>
                                <Field
                                    as={TextField}
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                />
                                <ErrorMessage className='err-msg' name="password" component="div" />
                            </div>
                            <div className='text-center mt-4'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }} >
                            {errorMessage}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    );
};

export default Login;
