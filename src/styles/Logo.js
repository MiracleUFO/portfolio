import styled, { css, keyframes } from 'styled-components';

const float = keyframes`
    0% {transform: rotate(-10deg) rotateY(10deg) rotateX(-20deg) translateX(-30px) translateY(30px)}
    25% {transform: rotateX(-10deg) rotateY(-10deg) translateX(-20px) translateY(50px)}
    50% {transform: rotate(-20deg) rotateX(-10deg) rotateY(-10deg) translateX(-50px) translateY(30px)}
    75% {transform: rotateX(-10deg) rotateY(10deg) translateX(10px) translateY(50px) perspective(9cm)}
    100% {transform: rotate(-10deg) rotateY(10deg) rotateX(-20deg) translateX(-30px) translateY(30px)}
`;

const glitch = keyframes`
    0% {text-shadow: none}
    50% {
        text-shadow:
            0 -14px 2px rgba(100, 100, 100, 0.55), 
            0 -12px 0.5px rgba(80, 80, 80, 0.5),
            0 -10px 0px rgba(86, 86, 86, 0.45),
            0 -8px 0px rgba(52, 52, 52, 0.5),
            0 -6px 0px rgba(52, 52, 52, 0.55),
            0 2px 0px rgba(52, 52, 52, 0.3),
            0 3px 0px rgba(52, 52, 52, 0.2)
        ;
    }
    100% { text-shadow: none}
`;

const glitchOnPC = keyframes`
    0% {text-shadow: none}
    25% {
        text-shadow: 
            0 -10px 0px rgba(86, 86, 86, 0.45),
            0 -8px 0px rgba(52, 52, 52, 0.5),
            0 -6px 0px rgba(52, 52, 52, 0.55),
        ;
    }
    75% {
        text-shadow: 
            0 -14px 2px rgba(100, 100, 100, 0.55), 
            0 -12px 0.5px rgba(80, 80, 80, 0.5),
            0 -10px 0px rgba(86, 86, 86, 0.45),
            0 -8px 0px rgba(52, 52, 52, 0.4),
            0 -6px 0px rgba(52, 52, 52, 0.35)
        ;
    }
    100% {text-shadow: none}
`;

const Logo = styled.img`
    display: none;
    width: 40%;
    transform: rotate(-5deg);
    position: absolute;
    left: 35%;
    z-index: 990;
    animation: ${float} 15s ease-in-out infinite;
    @media (min-width: 800px) {
        display: revert;  
    }
`;

const LogoName = styled.h1`
    font-family: 'Nunito', serif;
    font-weight: 300;
    letter-spacing: 1.5px;
    position: relative;
    top: calc(3vh + 8px);
    left: -3px;
    z-index: 20;
    color: ${window.innerWidth > 800 ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.1)'};
    opacity: 0.9;
    text-shadow: 
        0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75)
    ;
    animation: ${window.innerWidth > 800 ? css`10s ${glitchOnPC} ease-in-out` : css`5s ${glitch} ease`} 0s infinite none running;

    @media (min-width: 800px) {
        top: calc(7vh + 8px);
    }
`;

export { Logo, LogoName };