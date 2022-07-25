import styled from 'styled-components';

const DocumentViewContainer = styled.div`
    height: 90vh;
    overflow-x: hidden;

    &  {
        height: 95vh;
    }
    
    & canvas {
        max-width: 90vw;
        height: auto !important;
    }

    & .download-container {
        position: fixed;
        left: 75%;
        z-index: 20;
        top: 70vh;
        background: white;
        border-radius: 50%;

        @media (min-width: 800px) {
            border-radius: 25px;
            left: 65%;
        }

        @media (min-width: 800px) and (min-height: 700px) {
            top: 85vh;
        }
    }
`;

export { DocumentViewContainer };