import styled, { keyframes } from 'styled-components';

const SlideDown = keyframes`
  0% {
        transform: translateY(0)
	}

	100% {
		transform: translateY(10px)
	}
`;

const SlideUp = keyframes`
  0% {
        transform: translateY(0)
	}

	100% {
		transform: translateY(-10px)
	}
`;

const ScaleDown = keyframes`
  0% {
        transform: scaleX(1)
	}

	100% {
		transform: scaleX(0.95)
	}
`;

export const Svg = styled.svg`
    & #heart,
    & #plus,
    & #message-sent,
    & #message-received {
        animation: ${SlideDown} 5s ease-in-out 0s infinite alternate forwards;
    }

    & #door,
    & #degree,
    & #desk,
    & #floor {
        animation: ${SlideUp} 5s ease-in-out 0s infinite alternate forwards;
    }

    & #shadow {
        animation: ${ScaleDown} 5s ease-in-out 0s infinite alternate forwards;
    }
`;
