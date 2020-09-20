import React from 'react';
import FirstAndSecond from './components/FirstAndSecond';

import GlobalStyled from './styled/global'
import { Main, Section, Sticky } from './styled'


function App() {
  return (
   
    <>
      <GlobalStyled/>

      <Main style = {{ height: '1610vh'}}>
        <Section style={{ height: '72.7%'}}>
         <FirstAndSecond />
        </Section>

        <Section style = {{ height: '9.7%'}}>
          <Sticky className = "third" />
        </Section>

        <Section style = {{ height : '10.1%'}}>
          <Sticky className="fourth"></Sticky>
        </Section>

      </Main>
    
    </>

  );
}

export default App;
