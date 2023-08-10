import styled, { keyframes } from 'styled-components';

const SlideUp = keyframes`
  0% {
        transform: translateY(0)
	}

	100% {
		transform: translateY(-10px)
	}
`;

const SlideLeft = keyframes`
  0% {
        transform: translateX(0)
	}

	100% {
		transform: translateX(-30px)
	}
`;

const SlideRight = keyframes`
  0% {
        transform: translateX(0)
	}

	100% {
		transform: translateX(30px)
	}
`;

export const Svg = styled.svg`
    & #smarthphone {
        animation: ${SlideUp} 5s ease-in-out 0s infinite alternate forwards;
    }

    & #cloud-1,
    & #cloud-5 {
        animation: ${SlideRight} 10s ease-in-out 0s infinite alternate forwards;
    }

    & #cloud-3 {
        animation: ${SlideUp} 10s ease-in-out 0s infinite alternate forwards;
    }

    & #cloud-2,
    & #cloud-4 {
        animation: ${SlideLeft} 10s ease-in-out 0s infinite alternate forwards;
    }
`;
