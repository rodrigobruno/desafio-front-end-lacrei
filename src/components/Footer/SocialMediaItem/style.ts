import styled from 'styled-components';
import { TRANSITION } from 'styles/variables';

export const Anchor = styled.a`
    width: 2rem;
    height: 2rem;
    transition: ${TRANSITION.default};

    &:hover {
        opacity: 0.7;
    }
`;
