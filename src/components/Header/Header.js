import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
        <li>Senior Data Engineer</li>
        <li>Senior Software Engineer</li>
      </Div1>
      <Div3>
        <SocialIcons href="https://www.linkedin.com/in/rubenmukherjee/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://github.com/mukherjeeruben">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
