import styled from 'styled-components';
import { MEDIA } from 'styles/variables';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${MEDIA.lg}) {
        align-items: center;
        flex-direction: column;
        gap: 3rem;
    }
`;
