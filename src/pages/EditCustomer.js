import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography
} from '@material-ui/core';

const EditCustomer = () => {
    const navigate = useNavigate();

    const crearCliente = (usuario) => {
        firebasecrearCliente(usuario.email, usuario.password);
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
                }}
            >
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            email: '',
                            phone: '',
                            firstName: '',
                            lastName: '',
                        }}
                        validationSchema={
                            Yup.object().shape({
                                email: Yup.string().email('Must be valid email').max(255).required('Email is required'),
                                firstName: Yup.string().max(255).required('First name is required'),
                                phone: Yup.string().max(60),
                                lastName: Yup.string().max(255).required('Last name is required')
                            })
                        }
                        onSubmit={(usuario) => {
                            crearCliente(usuario);
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
                                        Crear nuevo Cliente
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
                                    error={Boolean(touched.lastName && errors.lastName)}
                                    fullWidth
                                    helperText={touched.lastName && errors.lastName}
                                    label="Last name"
                                    margin="normal"
                                    name="lastName"
                                    onBlur={handleBlur}
                                    onchange={handleChange}
                                    value={values.lastName}
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
                                    value={values.email}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.phone && errors.phone)}
                                    fullWidth
                                    helperText={touched.phone && errors.phone}
                                    label="Phone Number"
                                    margin="normal"
                                    name="phone"
                                    onBlur={handleBlur}
                                    onchange={handleChange}
                                    type="phone"
                                    value={values.phone}
                                    variant="outlined"
                                />
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Crear
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};

export default EditCustomer;