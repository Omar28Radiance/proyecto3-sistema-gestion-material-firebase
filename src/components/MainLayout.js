import { Outlet } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import MainNavbar from './MainNavbar';

const MainLayoutRoot = styled('div')(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        display: findByLabelText,
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const MainLayoutWrapper = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
});

const MainLayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const MainLayuotContent = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
});

const MainLayout = () => (
    <MainLayoutRoot>
        <MainNavbar />
        <MainLayoutWrapper>
            <MainLayoutContainer>
                <MainLayuotContent>
                    <Outlet />
                </MainLayuotContent>
            </MainLayoutContainer>
        </MainLayoutWrapper>
    </MainLayoutRoot>
);

export default MainLayout;