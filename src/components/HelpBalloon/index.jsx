import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import { 
    Container,
    ContainerWrap 
} from './styles';

function HelpBalloon(props) {
  let {catalogHelpBalloonCoords} = useContext(GlobalContext);

  useEffect(() => {
    let balloon = document.querySelector(`.${props.id}`)

    balloon.style.top = `${catalogHelpBalloonCoords[1] - balloon.offsetHeight}px`;
    balloon.style.left = `${catalogHelpBalloonCoords[0]}px`;

  }, [catalogHelpBalloonCoords])

  return (
      <ContainerWrap 
      className={props.id}
      >
        <Container>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam deserunt incidunt distinctio vitae consequuntur architecto praesentium quibusdam accusamus quisquam aperiam nam aliquam deleniti eum, iure dignissimos quia. Accusamus, quod dolores!
        </Container>
      </ContainerWrap>

  );
}
export default HelpBalloon;















