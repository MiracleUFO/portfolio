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
        0% {transform: rotate(-10deg) rotateY(10deg) rotateX(-20deg) translateX(-30px) translateY(50px)}
	    25% {transform: rotateX(-10deg) rotateY(-10deg) translateX(-20px) translateY(10px)}
        50% {transform: rotate(-20deg) rotateX(-10deg) rotateY(-10deg) translateX(-50px) translateY(30px)}
        75% {transform: rotateX(-10deg) rotateY(10deg) translateX(10px) translateY(50px) perspective(9cm)}
        100% {transform: rotate(-10deg) rotateY(10deg) rotateX(-20deg) translateX(-30px) translateY(50px)}
    }
`;

const LogoName = styled.h1`
    font-family: 'Nunito', serif;
    letter-spacing: 1.5px;
    position: relative;
    left: -5px;
    top: -3vh;
    z-index: 20;
    animation: glitch 4.5s linear infinite reverse, glitch 0.5s linear infinite;

    @keyframes glitch {
        from {perspective(6cm); opacity: 0.8}
        to {perspective(0); opacity: 0.5}
    }

    @media (min-width: 800px) {
        top: -5vh;
        text-shadow: 0px 4px 2px #b2a98f, 0px 8px 10px rgba(0,0,0,0.5);
    }
`;

export { Logo, LogoName };