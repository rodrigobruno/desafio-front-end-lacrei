import styled from 'styled-components';
import { COLORS, MEDIA } from 'styles/variables';

interface Props {
    $quote?: boolean;
}

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    ${({ $quote }) => ($quote ? 'max-width: 560px;' : 'max-width: 455px;')};

    @media (max-width: ${MEDIA.lg}) {
        max-width: max-content;
    }
`;

export const Content = styled.div``;

export const Title = styled.h1`
    color: ${COLORS.black};
    font-size: 3rem;
    font-weight: 700;
    line-height: 135%;
    margin: 0 0 2rem 0;
    padding: 0;

    @media (max-width: ${MEDIA.lg}) {
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    @media (max-width: ${MEDIA.md}) {
        font-size: 1.5rem;
    }
`;

export const Lead = styled.p<Props>`
    ${({ $quote }) =>
        $quote ? `border-left: 5px solid ${COLORS.green}` : `none`};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 135%;
    margin: 0;
    ${({ $quote }) => ($quote ? 'padding: 0 0 0 2rem;' : 'padding: 0;')};

    @media (max-width: ${MEDIA.lg}) {
        font-size: 1rem;
        ${({ $quote }) => ($quote ? 'padding: 0 0 0 1rem;' : 'padding: 0;')};
    }

    @media (max-width: ${MEDIA.md}) {
        font-size: 0.875rem;
        ${({ $quote }) => ($quote ? 'padding: 0 0 0 0.5rem;' : 'padding: 0;')};
    }
`;
