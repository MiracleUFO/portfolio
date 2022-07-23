import styled from 'styled-components';

const Logo = styled.img`
    display: none;
    width: 40%;
    transform: rotate(-5deg);
    position: absolute;
    left: 35%;
    z-index: 990;
    animation: float 15s ease-in-out infinite;
    @media (min-width: 800px) {
        display: revert;  
    }

    @keyframes float {
        0% {transform: rotate(-10deg) rotateY(10deg) rotateX(-20deg) translateX(-30px) translateY(30px)}
	    25% {transform: rotateX(-10deg) rotateY(-10deg) translateX(-20px) translateY(50px)}
        50% {transform: rotate(-20deg) rotateX(-10deg) rotateY(-10deg) translateX(-50px) translateY(30px)}
        75% {transform: rotateX(-10deg) rotateY(10deg) translateX(10px) translateY(50px) perspective(9cm)}
        100% {transform: rotate(-10deg) rotateY(10deg) rotateX(-20deg) translateX(-30px) translateY(30px)}
    }
`;

const LogoName = styled.h1`
    font-family: 'Nunito', serif;
    font-weight: 300;
    letter-spacing: 1.5px;
    position: relative;
    top: 3vh;
    left: -3px;
    z-index: 20;
    animation: 5s linear 0s infinite reverse none running glitch, 0.25s linear 0s infinite normal none running glitch;

    @keyframes glitch {
        from {perspective(6cm); opacity: 0.8}
        to {perspective(0); opacity: 0.4}
    }

    @media (min-width: 800px) {
        top: 7vh;
        text-shadow: 0px 4px 2px #b2a98f, 0px 8px 10px rgba(0, 0, 0, 0.5);
    }
`;

export { Logo, LogoName };