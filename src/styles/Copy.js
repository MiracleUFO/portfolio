import styled from 'styled-components';

const Copy = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
    color: rgb(247, 244, 242);
    width: 90%;
    font-size: 0.9em;
    overflow-x: hidden;
    padding-left: 0.5vw;
    line-height: 1.75;

    @media (min-width: 800px) {
        width: 30vw;
    }

    & b {
        font-weight: 500;
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
    margin-top: 20px;

    @media (min-width: 800px) {
        margin-top: 40px;
    }

    &:hover {
        ::before {
            border-bottom: 1px solid rgba(101, 74, 78, 0.7);
            border-left: 1px solid rgba(101, 74, 78, 0.7);
        }
    }

    ::before {
        content: '';
        border-bottom: 1px solid rgba(101, 74, 78, 0.5);
        border-left: 1px solid rgba(101, 74, 78, 0.5);
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

        &:hover {
            color: rgba(0, 0, 0, 0.9);
        }
    }
`;

export { Copy, CopyImp, ActionCopy };