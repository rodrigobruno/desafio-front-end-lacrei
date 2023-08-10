import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/global';
import DefaultPage from 'components/DefaultPage';
import Home from './pages/Home';
import PessoaUsuaria from 'pages/PessoaUsuaria';
import Profissional from 'pages/Profissional';
import ScrollToTop from 'components/ScrollToTop';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='pessoa-usuaria' element={<PessoaUsuaria />} />
                    <Route path='profissional' element={<Profissional />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}
