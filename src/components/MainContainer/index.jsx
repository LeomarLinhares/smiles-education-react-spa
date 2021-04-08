import React from 'react';

import { Container } from './styles';

function MainContainer(props) {
  return (
      <Container>
        <header>
            <div>
                <h2>Olá, Leomar!</h2>
                <span>O que vamos aprender hoje?</span>
            </div>
            <img src="userpic.jpeg" alt="Usuário"/>
        </header>

        <section>
            {props.children}
        </section>

        <footer>
            <span>Designed & Built by <a href="https://github.com/leomarlinhares"><strong>Leomar Linhares</strong></a></span>
        </footer>
      </Container>
  );
}

export default MainContainer;