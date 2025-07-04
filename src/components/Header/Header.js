import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        {/* <a style={{ display: 'flex', alignItems: 'center', color:"white" }}> */}
          {/* <DiCode size="3rem" />  */}
          {/* <span>
          <table>
            <tr>
              <td>◉ Data Engineer</td>
            </tr>
            <tr>
              <td>◉ Data Scientist</td>
            </tr>
            <tr>
              <td>◉ Software Engineer</td>
            </tr>
          </table>  
          </span> */}
          
        {/* </a> */}
      </Link>
    </Div1>
    {/* <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2> */}
      <Div3>
      <table>
            <tr>
              <td><SocialIcons href="https://github.com/mukherjeeruben">
                  <AiFillGithub size="2.6rem" />
                </SocialIcons>
              </td>
              <td>
              <SocialIcons href="https://www.linkedin.com/in/rubenmukherjee/">
                <AiFillLinkedin size="2.6rem" />
              </SocialIcons>
              </td>
            </tr>
          </table> 
        
       
        {/* <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons> */}
      </Div3>
    </Container>
);

export default Header;
