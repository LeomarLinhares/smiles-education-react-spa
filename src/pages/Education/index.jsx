import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import HelpBalloon from '../../components/HelpBalloon'

import { 
    Container, 
    Statistics,
    LatestVideo, 
    TopBox, 
    BottomBox,
    Catalog,
    TitleWithHelp
} from './styles';

function Education() {

    const {catalogHelpBalloonCoords, setCatalogHelpBalloonCoords} = useContext(GlobalContext);

  return (
      <Container>
          <TopBox>
            <Statistics>
                <h3>Estatísticas</h3>
                <div className="StatsContainer">
                    <div>
                        <h1>2</h1>
                        <span>Artigos lidos</span>
                    </div>
                    <div>
                        <h1>3</h1>
                        <span>Vídeos assistidos</span>
                    </div>
                </div>
            </Statistics>
          </TopBox>

          <BottomBox>
            <LatestVideo>
                <h3>Mais recente do Te Levo de Milhas</h3>
                <iframe src="https://www.youtube.com/embed/yigzEzqXpsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </LatestVideo>
            <Catalog>
                <TitleWithHelp>
                    <h3>Artigos Vupt! </h3>
                    <img src="icons/help.svg" className='iconHelp' alt="Ajuda" 
                    
                    onMouseEnter={event => {
                        setCatalogHelpBalloonCoords([event.target.offsetLeft, event.target.offsetTop]);
                        document.querySelector('.catalogHelpBalloon').style.visibility = 'visible';
                        document.querySelector('.catalogHelpBalloon').style.opacity = '1';
                        console.log(catalogHelpBalloonCoords);
                    }}

                    onMouseLeave={event => {
                        document.querySelector('.catalogHelpBalloon').style.visibility = 'hidden';
                        document.querySelector('.catalogHelpBalloon').style.opacity = '0';
                    }}
                    
                    />

                    <HelpBalloon 
                        id='catalogHelpBalloon'
                    /> 
                </TitleWithHelp>

                <div
                
                className="CatalogContainer"
                onWheel={event => {
                    if (event.deltaY > 0) {
                        event.target.scrollBy(70, 0)
                    } else {
                        event.target.scrollBy(-70, 0)
                    }
                }}>
                    <div>
                        <h4>Título</h4>
                        <p>Descrição do artigo que fala um pouco Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a asp</p>
                    </div>

                    <div>
                        <h4>Título</h4>
                        <p>Descrição do artigo que fala um pouco Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a asp</p>
                    </div>

                    <div>
                        <h4>Título</h4>
                        <p>Descrição do artigo que fala um pouco Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a asp</p>
                    </div>

                    <div>
                        <h4>Título</h4>
                        <p>Descrição do artigo que fala um pouco Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a asp</p>
                    </div>

                    <div>
                        <h4>Título</h4>
                        <p>Descrição do artigo que fala um pouco Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a asp</p>
                    </div>

                    <div>
                        <h4>Título</h4>
                        <p>Descrição do artigo que fala um pouco Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a asp</p>
                    </div>
                </div>
            </Catalog>
          </BottomBox>
      </Container>
  );
}

export default Education;