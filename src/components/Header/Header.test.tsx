import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '.';

describe('Footer component', () => {
    it('link home is showing', () => {
        render(
            <Router>
                <Header />
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
                <Header />
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
                <Header />
            </Router>
        );

        const linkProfissional = screen.getByRole('link', {
            name: /profissional/i,
        });

        expect(linkProfissional).toBeInTheDocument();
    });

    it('brand is showing', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        const brand = screen.getByRole('link', {
            name: /lacrei/i,
        });

        expect(brand).toBeInTheDocument();
    });
});
