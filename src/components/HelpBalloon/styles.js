import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(255, 165, 0, .6);
    width: 30rem;
    height: fit-content;

    clip-path: 
        polygon(
            0% 0%, 
            100% 0%, 
            100% calc(100% - 20px), 
            3rem calc(100% - 20px), 
            1rem 100%, 
            1rem calc(100% - 20px), 
            0% calc(100% - 20px)
        );

    padding: 1.4rem 1.4rem calc(1.4rem + 20px) 1.4rem;

    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
`;

export const ContainerWrap = styled.div`
    /* display: none; */
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, .2));

    position: absolute;

    visibility: hidden;
    opacity: 0;

    top: 10px;
    left: 10px;

    z-index: 10;

    transition: visibility .4s, opacity .2s linear;
`;