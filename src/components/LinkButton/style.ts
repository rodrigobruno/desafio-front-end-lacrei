import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, TRANSITION } from 'styles/variables';

interface Props {
    variant?: 'primary' | 'outlined';
}

export const StyledLink = styled(Link)<Props>`
    border: 2px solid ${COLORS.green};
    border-radius: 8px;
    background-color: ${({ variant }) =>
        variant === 'outlined' ? COLORS.white : COLORS.green};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: ${({ variant }) =>
        variant === 'outlined' ? COLORS.green : COLORS.white};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 135%;
    padding-block: 0.625rem;
    padding-inline: 2rem;
    text-align: center;
    text-decoration: none;
    transition: ${TRANSITION.default};

    &:hover {
        opacity: 0.7;
    }

    &:active {
        box-shadow: none;
    }
`;
