import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdorment,
    SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router';

const CustomerListToolbar = (props) => {

    const navigate = useNavigate();

    return <Box {...props}>
        <Box
            sx={{
                display: 'flex',
                justifyCOntent: 'flex-end'
            }}
        >

            <Button
                onCLick={() => {
                    navigate('/app/customer/new', { replace: true });
                }}
                color="primary"
                variant="contained"
            >
                Add customer
            </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
            <Card>
                <CardContent>
                    <Box sx={{ maxWidth: 500 }}>
                        <TextField
                            fullWidth
                            InputProps={{
                                startAdorment: (
                                    <InputAdorment position="start">
                                        <SvgIcon
                                            fontSize="small"
                                            color="action"
                                        >
                                            <SearchIcon />
                                        </SvgIcon>
                                    </InputAdorment>
                                )
                            }}
                            placeholder="Search customer"
                            variant="outlined"
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
};

export default CustomerListToolbar;