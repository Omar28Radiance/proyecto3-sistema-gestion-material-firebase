import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { firebaseRegistrarUsuario } from '../utils/FirebaseUtil';
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

const EditCustomer = () => {
    const navigate = useNavigate();

    const registrarUsuario = (usuario) => {
        firebaseRegistrarUsuario(usuario.email, usuario.password);
        alert("El usuario se registró con éxito.")
        navigate('/login', { replace: true });
    }
 
    return (
        <>
            <Helmet>
                <title>Modificar cliente</title>
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
                        onSubmit={(usuario) => {
                            registrarUsuario(usuario);
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
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ mb: 3 }}>
                                    <Typography
                                        color="textPrimary"
                                        variant="h2"
                                    >
                                        Create new account
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >
                                        Use your email to create new account
                                    </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    fullWidth
                                    helperText={touched.firstName && errors.firstName}
                                    label="First name"
                                    margin="normal"
                                    name="firstName"
                                    onBlur={handleBlur}
                                    onchange={handleChange}
                                    value={values.firstName}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.password && errors.lastName)}
                                    fullWidth
                                    helperText={touched.firstName && errors.lastName}
                                    label="Last name"
                                    margin="normal"
                                    name="lastName"
                                    onBlur={handleBlur}
                                    onchange={handleChange}
                                    value={values.firstName}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onchange={handleChange}
                                    type="email"
                                    value={values.firstName}
                                    variant="outlined"
                                />
                                {Boolean(touched.policy && errors.policy) && (
                                    <FormHelperText error>
                                        {errors.policy}
                                    </FormHelperText>
                                )}
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Sign up now
                                    </Button>
                                </Box>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                >
                                    Have an account?
                                    {''}
                                    <Link component={RouterLink} to="/login" underline="hover">
                                        Sign in
                                    </Link>
                                </Typography>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};

export default EditCustomer;