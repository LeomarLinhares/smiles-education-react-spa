import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f0f8ff;
    width: 100%;
    
    border-radius: 0 3rem 3rem 0;
    padding: 1rem 1rem 1rem 1rem;
    
    justify-content: space-between;
    font-size: 1.2rem;
    
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .4);
    
    header {
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        padding: 1rem;

        img {
            width: 7rem;
            
            border-radius: 1rem;
        }

        div {
            display: flex;
            flex-direction: column;

            line-height: .75rem;

            span {
                color: #707070;
            }
        }
    }

    section {
        display: flex;
        height: 100%;
        overflow-y: auto;
    }

    footer {
        position: relative;
        margin-top: 1.5rem;
        display: flex;
        width: 100%;
        justify-content: center;
    }
`;
