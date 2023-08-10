import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}
