import styled from 'styled-components';
import { MEDIA } from 'styles/variables';

export const Container = styled.div`
    margin-bottom: 2.6rem;
`;

export const CallToAction = styled.div`
    align-items: center;
    justify-content: center;
    display: grid;
    gap: 3.875rem;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: ${MEDIA.md}) {
        gap: 1rem;
        grid-template-columns: 196px;
    }
`;
