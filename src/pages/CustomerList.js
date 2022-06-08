import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from '../components/customer/CustomerListResults';
import CustomerListToolbar from '../components/customer/CustomerListToolbar';
import { firebaseBuscar } from '../utils/FirebaseUtil';
import { useEffect } from 'react';

const CustomerList = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        buscarClientes();
    }, [])

    const buscarClientes = () => {
        let resultado = await firebaseBuscar('clientes');
        setClientes(resultado)
    }

    return <>
        <Helmet>
            <title>Customers | Material kit</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
            }}
        >
            <Container maxWidth={false}>
                <CustomerListToolbar />
                <Box sx={{ pt: 3 }}>
                    <CustomerListResults customers={customers} />
                </Box>
            </Container>
        </Box>
    </>;
}

export default CustomerList;