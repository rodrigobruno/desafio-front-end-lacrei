import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from 'styles/global';
import DefaultPage from 'components/DefaultPage';

export default function AppRouter() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    {/* <Route path='pessoa-usuaria' element={<PessoaUsuaria />} /> */}
                    {/* <Route path='profissional' element={<Profissional />} /> */}
                </Route>
                {/* <Route path='*' element={<Notfound />} /> */}
            </Routes>
        </Router>
    );
}
