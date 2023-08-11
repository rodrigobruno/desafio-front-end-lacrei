import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LinkButton from '.';

describe('LinkButton component', () => {
    it('label of link is showing', () => {
        render(
            <Router>
                <LinkButton to='/'>Label</LinkButton>
            </Router>
        );

        const label = screen.getByRole('link', {
            name: /label/i,
        });

        expect(label).toBeInTheDocument();
    });

    it('click on the link', () => {
        render(
            <Router>
                <LinkButton to='/'>Label</LinkButton>
            </Router>
        );

        const label = screen.getByRole('link', {
            name: /label/i,
        });

        expect(label).toHaveAttribute('href', '/');
    });
});
