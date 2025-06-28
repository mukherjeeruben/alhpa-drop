import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {/* Welcome To <br />
          My Personal Portfolio */}
          Ruben Mukherjee
        </SectionTitle>
        <SectionText>
        Product Creator with 7 years of broad-based experience in building data-intensive applications, overcoming complex architectural and scalability issues. Proficient in
        predictive modeling, data processing and data mining algorithms as well as in web and scripting languages such as Python, C# and Javascript. Capable of creating, developing, testing
        and deploying highly adaptive diverse services to translate business and functional qualifications into substantial deliverables.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;