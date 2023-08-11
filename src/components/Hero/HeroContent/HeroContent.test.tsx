import { render, screen } from '@testing-library/react';
import HeroContent from '.';

describe('HeroContent component', () => {
    it('title is showing', () => {
        render(<HeroContent title='Título' lead='Lead' />);

        const title = screen.getByRole('heading', {
            name: /título/i,
        });

        expect(title).toBeInTheDocument();
    });

    it('lead is showing', () => {
        render(<HeroContent title='Título' lead='Lead' />);

        const lead = screen.getByText(/lead/i);
        expect(lead).toBeInTheDocument();
    });

    it('children is showing', () => {
        render(
            <HeroContent title='Título' lead='Lead'>
                children
            </HeroContent>
        );

        const lead = screen.getByText(/children/i);
        expect(lead).toBeInTheDocument();
    });
});
