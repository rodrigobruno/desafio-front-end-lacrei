import styled from 'styled-components';
import { COLORS, MEDIA, TRANSITION } from 'styles/variables';
import { NavLink } from 'react-router-dom';

interface Props {
    $activedColor: 'green' | 'black';
}

export const Item = styled(NavLink)<Props>`
    color: ${COLORS.black};
    font-size: 1rem;
    line-height: 135%;
    text-decoration: none;
    transition: ${TRANSITION.default};

    @media (max-width: ${MEDIA.md}) {
        font-size: 0.875rem;
    }

    &:hover {
        opacity: 0.7;
    }

    &.active {
        color: ${({ $activedColor }) =>
            $activedColor === 'green' ? COLORS.green : COLORS.black};
        font-weight: 700;
        letter-spacing: 0;
    }
`;
