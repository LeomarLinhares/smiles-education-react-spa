import styled from 'styled-components';

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    background: linear-gradient(177deg, orange, violet);
    border-radius: 3rem 0 0 3rem;
    padding: 3rem;

    width: 20%;
    height: 100%;

    align-items: center;
    justify-content: space-between;

    z-index: 1;

    box-shadow: -2px 2px 10px rgba(0, 0, 0, .4);

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            max-width: 100%;
            width: 14rem;
        }

        span {
            margin-top: .8rem;
            color: #ffffff;
            font-size: 1.5rem;
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        

        a {
            background: rgba(255, 255, 255, .1);
            border-radius: 1rem;
            padding: 1rem 3rem;
            margin: .5rem 0;

            transition: .2s;

            min-width: 17rem;

            img {
                width: 1.4rem;
                margin-right: 1rem;
            }

            span {
                font-size: 1.4rem;
            }
        }

        a:hover {
            background-color: rgba(255, 255, 255, .3);
        }
    }

    div {
        background-color: rgba(229, 229, 229, .35);
        border-radius: 2rem;
        padding: 1rem;

        font-size: 1.2rem;

        min-width: 16rem;
        text-align: center;

        a {
            img {
                width: 2.3rem;
                transition: .2s;
            }

            img:hover {
                filter: brightness(2);
            }
        }



        div {
            display: flex;
            background: none;
            justify-content: space-around;
        }
    }
`;