import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavItem from '.';

describe('NavItem component', () => {
    it('label of link is showing', () => {
        render(
            <Router>
                <NavItem to='/'>label</NavItem>
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
                <NavItem to='/'>label</NavItem>
            </Router>
        );

        const label = screen.getByRole('link', {
            name: /label/i,
        });

        expect(label).toHaveAttribute('href', '/');
    });
});
