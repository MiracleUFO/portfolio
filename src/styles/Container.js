import styled  from 'styled-components';

const MainContainer = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    position: relative;
    top: 0;
    background: #e6ddde;
    color: #443235;
    transition: all 0.2s ease;
`;

const CopyContainer = styled.section`
    width: 50vw;
    position: relative;
    padding-left: 10vw;
    height: 100vh;
    border-left: 1px solid rgba(101, 74, 78, 0.2);
    flex-direction: column;
    justify-content: center;
    display: flex;

    &::before {
        content: "";
        position: absolute;
        left: -2.5px;
        top: 39vh;
        width: 30vw;
        height: 12vw;
        border-left: 3px solid #654a4e;
        border-radius: 1.5px;

        @media (min-width: 800px) {
            height: 10vh;
        }
    }

    & h1 {
        font-size: 6.5vw;
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: 1.5px;
        color: black;
        position: relative;
        top: 7vh;

        @media (min-width: 800px) {
            font-size: 4.4vw;
        }
    }
`;

export {
    MainContainer,
    CopyContainer
}