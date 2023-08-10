import styled from 'styled-components';
import { MEDIA } from 'styles/variables';

export const Wrapper = styled.div`
    padding-inline: 4rem;

    @media (max-width: ${MEDIA.lg}) {
        padding-inline: 2rem;
    }

    @media (max-width: ${MEDIA.md}) {
        padding-inline: 1rem;
    }
`;
