import styled from 'styled-components';
import { COLORS, MEDIA } from 'styles/variables';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    background-color: ${COLORS.ligthGrey};
`;

export const HeaderContent = styled.div`
    align-items: center;
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    padding-block: 1rem;

    @media (max-width: ${MEDIA.md}) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const Brand = styled(Link)`
    color: ${COLORS.green};
    font-size: 2rem;
    line-height: 85%;
    text-decoration: none;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2.5rem;

    @media (max-width: ${MEDIA.md}) {
        gap: 1rem;
    }
`;
