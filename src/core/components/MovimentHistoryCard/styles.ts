import styled, { keyframes } from 'styled-components';


interface ITagProps {
    tagColor: string;
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50% {
        opacity: .3;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    border-radius: 10px;

    animation: ${animate} .2s ease-in-out;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }
    > div span {
        font-weight: bold;
        font-size: 22px;
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    background-color: ${props => props.tagColor};
    position: absolute;
    left: 0;
`;