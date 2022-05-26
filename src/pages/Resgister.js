import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography
} from '@material-ui/core';

const Register = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Register | Material Kit</title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center'
                }}>
                <Container maxWidth="sm">
                    <Formik
                    initialValues={{
                        email: '',
                        firstName: '',
                        lastName: '',
                        password: '',
                        policy: false
                    }}
                    validationSchema={
                        Yup.object().shape({
                            email: Yup.string().email('Must be valid email').max(255).required('Email is required'),
                            firstName: Yup.string().max(255).required('First name is required'),
                            lastName: Yup.string().max(255).required('Last name is required'),
                            password: Yup.string().max(255).required('password is required'),
                            policy: Yup.boolean().oneOf([true], 'This field is checked')
                        })
                    }
                    onSubmit={() => {
                        navigate('/app/dashboard', { replace: true });
                    }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values
                        }) => (
                            <form></form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    )
}