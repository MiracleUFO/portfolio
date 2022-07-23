import styled from 'styled-components';

const DownloadContainer = styled.a`
    width: 50px;
    height: 50px;
    padding: 0;
    border: none;
    border-radius: 50%;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 0.8em;
    background: white;
    color: rgba(111, 63, 209, 0.6);
    text-decoration: none;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(5, 5, 5, 0.7) 0px 2px 5px;
    
    & .text {
        display: none;
    }

    & .icon {
        padding: 0;
        margin: 0;
        width: 50px;
        height: 50px;       
    }

    @media (min-width: 800px) {
        &:hover, &:focus {
            flex-direction: row-reverse;
            padding: 5px 0.3vw 5px 2.5vw;
            background: rgba(111, 63, 209, 0.7);
            color: white;
            border: none;
            width: 8.2em;
            height: max-content;
            border-radius: 25px;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 10px;

            & .text {
                display: inline;
            }

            & .icon {
                margin-right: revert;
                margin-left: 10%;
                background: white;
                padding: 12%;
                width: 25px;
                height: auto;

                & svg {
                    fill: rgba(111, 63, 209, 0.7);
                }
            }
        }
    }
`;

const IconCircle = styled.span`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10%;
    background: rgba(111, 63, 209, 0.6);

    & svg {
        fill: white;
        transition: .5s;
    }
`;

export {
    DownloadContainer,
    IconCircle
}