import { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    TextField
} from '@material-ui/core';

const SettingsPassword = (props) => {
    const [values, setValues] = useState({
        password: '',
        confirm: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form {...props}>
            <Card>
                <CardHeader
                    subheader="Update password" 
                />
                <Divider />
                <CardContent>
                    <TextField
                        fullWidth
                        label="Password"
                        margin="normal"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={values.password}
                        variant="outlined" 
                    />
                    <TextField
                        fullWidth
                        label="Confirm password"
                        margin="normal"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={values.confirm}
                        variant="outlined" 
                    />
                </CardContent>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <Button
                        color="primary"
                        varinat="contained"
                    >
                        Update
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

export default SettingsPassword;