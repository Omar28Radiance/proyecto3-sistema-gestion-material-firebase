import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from '../components/settings/SettingsNotifications';
import SettingPassword from '../components/settings/SettingPassword';

const SettingsView = () => (
    <>
        <Helmet>
            <title>Settings | Material kit</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
            }}
        >
            <Container maxWidth="lg">
                <SettingsNotifications />
                <Box sx={{ pt: 3 }}>
                    <SettingPassword />
                </Box>
            </Container>
        </Box>
    </>
);

export default SettingsView;