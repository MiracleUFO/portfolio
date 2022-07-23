import styled from 'styled-components';

const ModalWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0,0,0,0.5);
    font-weight: 900;
    z-index: 999;
`;

const ModalContainer = styled.div`
    position: relative;
    display: none;
    max-height: 90vh;
    align-items: center;
    justify-content: space-between;
    border-radius: ${props => props.type === 'file' ? 0 : '12px'};
    background: white;
    max-width: max-content;
`;

const ModalContent = styled.div`
    padding: 20px;
    overflow-y: scroll;

    & > section {
        max-height: calc(90vh - 40px);
    }

    & .close-icon {
        position: absolute;
        top: 2vh;
        max-height: max-content;
        z-index: 100;
        font-weight: 400;
    }

    @media (min-width: 800px) {
        & .close-icon {
            display: none;
        }
    }
`;

export {
    ModalWrapper,
    ModalContainer,
    ModalContent
};