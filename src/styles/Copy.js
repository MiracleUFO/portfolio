import styled from 'styled-components';

const Copy = styled.p`
    font-family: 'Nunito', sans-serif;
    color: #f7f4f2;
    width: 90%;
    font-size: 0.9em;
    overflow-x: hidden;
    padding-left: 0.5vw;
    line-height: 1.75;

    @media (min-width: 800px) {
        width: 30vw;
    }

    & a {
        font-size: 0.9em;
        color: rgba(101, 74, 78, 0.6);
        text-decoration: none;

        &:hover, &:focus {
            color: #443235;
        }
    }
`;

const CopyImp = styled(Copy)`
    margin-top: 40px;
    color: black;

    @media (width: 800px) {
        margin-top: 20px;
    }
`;

const ActionCopy = styled(CopyImp)`
    cursor: pointer;
    display: block;
    width: max-content;
    color: rgb(101, 74, 78);
    position: relative;

    ::before {
        content: " ";
        border-bottom: 1px solid rgba(101, 74, 78, 0.45);
        border-left: 1px solid rgba(101, 74, 78, 0.45);
        padding-left: 10px;
        top: 2.5px;
        position: absolute;
        width: 20%;
        height: 20px;
        border-radius: 1.5px;
    }

    & > span {
        margin-left: 12px;
        position: relative;
        bottom: 2.5px;
    }
`;

export { Copy, CopyImp, ActionCopy };