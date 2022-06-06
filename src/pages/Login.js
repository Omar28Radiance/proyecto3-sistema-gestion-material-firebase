import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box, 
    Button, 
    Container,
    Grid,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
import FacebookIcon from '../icons/Facebook';
import GoogleIcon from '../icons/Google'; 

const Login = () => {
    const navigate = useNavigate();

    return (
        <>
        <Helmet>
            <title>Register | Material kit</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyCOntent: 'center'
            }}
        >
            <Container maxWidth="sm">
                <Formik
                    initialValuer={{
                        email: 'demo@devias.io',
                        password: 'Password123'
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'), password: Yup.string().max(255).required('Password is required')
                    })}
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
                    }) => {}}
                ></Formik>
            </Container>
        </Box>
        </>
    )
}






