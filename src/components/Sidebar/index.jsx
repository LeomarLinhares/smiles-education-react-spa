import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
      <Container>
            <section>
                <img src="smiles-white.svg" alt="Smiles"/>
                <span>Education</span>
            </section>

            <nav>
                
                <Link to='/'><img src="icons/navEducation.svg" alt="Education"/><span>Education</span></Link>
                
                <Link to='/desafios'><img src="icons/navGame.svg" alt="Game"/><span>Desafios</span></Link>
                
                <Link to='/canal'><img src="icons/navAirplane.svg" alt="Game"/><span>FAQ</span></Link>

            </nav>

            <div>
                <div>

                    <a href="https://apps.apple.com/br/app/smiles/id1085931838">
                        <img src="icons/applestore.svg" alt="Apple"/>
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=com.pontomobi.smiles">
                        <img src="icons/playstore.svg" alt="Google Play"/>
                    </a>

                </div>
                <p>Baixe o nosso aplicativo!</p>
            </div>
      </Container>
  );
}

export default Sidebar;