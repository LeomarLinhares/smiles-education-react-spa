import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;
`;

export const TopBox = styled.div`

    display: flex;
    flex-direction: row;

    justify-content: space-between;

    height: 20rem;
`;

export const Statistics = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;

    .StatsContainer {
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        width: 20rem;

        div {
            display: flex;
            flex-direction: column;

            background: white;
            border-radius: 1rem;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);

            width: 9rem;

            padding: 1.5rem .7rem;

            h1 {
                font-size: 4rem;
                font-weight: 100;
                margin: -.5rem 0 1.5rem 0;
            }
        }
    }
`;

export const BottomBox = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
`;

export const LatestVideo = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    height: 100%;

    iframe {
        border-radius: 1rem;

        width: 355px;
        height: 200px;

        box-shadow: 5px 5px 15px rgba(0, 0, 0, .3)
    }
`;

export const Catalog = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;

    margin: 1rem 2rem 0 0;
    
    .CatalogContainer {
        display: flex;
        flex-direction: row;

        width: 60rem;

        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;

        scroll-behavior: smooth;

        div { // ARTIGO AQUI
            display: flex;
            flex-direction: column;
            background: linear-gradient(45deg, yellow, violet);
            height: 18rem;
            width: 13rem;

            flex: none;

            margin: 1rem;
            padding: 1rem;

            border-radius: 2rem 0 2rem 0;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, .13);

            align-items: center;
            justify-content: center;

            scroll-snap-align: start;

            pointer-events: none;
        }
    }
`;

export const TitleWithHelp = styled.div`
    display: flex;
    flex-direction: row;
    
    img {
        margin-left: 1rem;
    }
`;