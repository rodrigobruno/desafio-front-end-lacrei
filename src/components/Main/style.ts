import styled from 'styled-components';
import { MEDIA } from 'styles/variables';

export const MainContent = styled.div`
    padding-block: 4rem 1rem;

    @media (max-width: ${MEDIA.lg}) {
        padding-block: 2rem 1rem;
    }

    @media (max-width: ${MEDIA.md}) {
        padding-block: 1rem;
    }
`;
