import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Container,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
import { firebaseIniciarSesion } from '../utils/FirebaseUtil';

const Login = () => {
    const navigate = useNavigate();

    const iniciarSesion = async credenciales => {
        let sesionIniciada = await firebaseIniciarSesion(credenciales.email, credenciales.password);

        if (sesionIniciada) {
            navigate('/app/dashboard', { replace: true });
        } else {
            alert ('Las credenciales no son correctas');
        }
    }

    return (
        <>
            <Helmet>
                <title>Login | Material kit</title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center'
                }}
            >
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            email: 'demo@devias.io',
                            password: 'Password123'
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'), password: Yup.string().max(255).required('Password is required')
                        })}
                        onSubmit={iniciarSesion}
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
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ mb: 3 }}>
                                    <Typography
                                        color="textPrimary"
                                        variant="h2"
                                    >
                                        Sign in
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >
                                        Sign in on the internal platform
                                    </Typography>
                                </Box>

                                <TextField
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    onBLur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    onBLur={handleBlur}
                                    onChange={handleChange}
                                    type="password"
                                    value={values.password}
                                    variant="outlined"
                                />
                                <Box
                                    sx={{ py: 2 }}>
                                    <Checkbox
                                        checked={values.policy}
                                        name="policy"
                                        onChange={handleChange}
                                    />
                                    <Typography
                                        color="textSecondary"
                                        variant="body1"
                                    >
                                        I have read the
                                        {''}
                                        <Link
                                            color="primary"
                                            component={RouterLink}
                                            to="#"
                                            underline="always"
                                            variant="h6"
                                        >
                                            Sign up
                                        </Link>
                                    </Typography>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    )
};

export default Login;
