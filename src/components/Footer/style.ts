import styled from 'styled-components';
import { COLORS, MEDIA } from 'styles/variables';

export const FooterContainer = styled.footer``;

export const FooterContent = styled.header`
    border-top: 1px solid ${COLORS.ligtGreen};
    display: flex;
    flex-direction: column;
    font-weight: 400;
    gap: 1.5rem;
    padding-block: 2rem 0.5rem;

    @media (max-width: ${MEDIA.md}) {
        gap: 0.5rem;
        padding-block: 1rem 0.5rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2.5rem;

    @media (max-width: ${MEDIA.md}) {
        flex-direction: column;
        gap: 0.25rem;
    }
`;

export const SocialMedia = styled.ul`
    align-items: center;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
`;

export const Credit = styled.p`
    font-size: 0.75rem;
    margin: 0;
`;
