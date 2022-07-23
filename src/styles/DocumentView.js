import styled from 'styled-components';

const DocumentViewContainer = styled.div`
    height: 90vh;

    &  {
        height: 95vh;
    }

    & canvas {
        max-width: 90vw;
        height: auto !important;
    }
`;

export { DocumentViewContainer };