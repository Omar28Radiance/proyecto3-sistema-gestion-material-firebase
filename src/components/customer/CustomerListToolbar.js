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

const CustomerListToolbar = (props) => (
    <Box {...props}>
        <Box
            sx={{
                display: 'flex',
                justifyCOntent: 'flex-end'
            }}
        >

            <Button
                onCLick={() => {}}
                color="primary"
                variant="contained"
            >
                Add customer
            </Button>
        </Box>
        <Box sx={{ maxWidth: 500 }}>
            <TextField
                fullWidth
                InputProps={{
                    startAdorment: (
                        <InputAdorment position="start">
                            <SvgIcon></SvgIcon>
                        </InputAdorment>
                    )
                }}
            ></TextField>
        </Box>
    </Box>
)