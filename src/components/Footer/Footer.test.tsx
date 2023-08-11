import { render, screen } from '@testing-library/react';
import Footer from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer component', () => {
    it('link home is showing', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );

        const linkHome = screen.getByRole('link', {
            name: /home/i,
        });

        expect(linkHome).toBeInTheDocument();
    });

    it('link pessoa usuária is showing', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );

        const linkPessoaUsuaria = screen.getByRole('link', {
            name: /pessoa usuária/i,
        });

        expect(linkPessoaUsuaria).toBeInTheDocument();
    });

    it('link profissional is showing', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );

        const linkProfissional = screen.getByRole('link', {
            name: /profissional/i,
        });

        expect(linkProfissional).toBeInTheDocument();
    });

    it('copyright is showing', () => {
        render(
            <Router>
                <Footer />
            </Router>
        );

        const copyright = screen.getByText(/desafio front-end lacrei/i);

        expect(copyright).toBeInTheDocument();
    });
});
