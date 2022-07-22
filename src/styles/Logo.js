import styled from 'styled-components';

const Logo = styled.img`
    display: none;
    width: 40%;
    transform: rotate(-5deg);
    position: relative;
    top: 12vh;
    left: 1.5vw;
    z-index: 990;
    animation: float 10s ease-in-out infinite;
    @media (min-width: 800px) {
        display: revert;  
    }

    @keyframes float {
        0% {transform: rotate(15deg) translateX(-10px) translateY(20px)}
        25%   {transform: rotate(15deg) translateX(-20px) translateY(10px)}
        50% {transform: rotate(0) translateX(-20px) translateY(0)}
        75% {transform: rotate(-10deg) translateX(0) translateY(10px)}
        100% {transform: rotate(15deg) translateX(-10px) translateY(20px)}
    }    
`;

const LogoName = styled.h1`
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    letter-spacing: 1.5px;
    position: relative;
    left: -5px;
    top: -3vh;
    z-index: 20;

    @media (min-width: 800px) {
        top: -5vh;
        text-shadow: 0px 4px 2px #b2a98f, 0px 8px 10px rgba(0,0,0,0.5);
    }
`;

export { Logo, LogoName };