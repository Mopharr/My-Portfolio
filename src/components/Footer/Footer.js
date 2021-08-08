import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href = "tel:08082698893">08082698893</LinkItem>
      </LinkColumn>
       <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href = "mailto:olamiquadri1@gmail.com">olamiquadri1@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating One problem at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href = 'https://github.com/Mopharr'>
        <AiFillGithub size = '3rem'>
          
        </AiFillGithub>
      </SocialIcons>
      <SocialIcons href = 'https://www.linkedin.com/in/quadri-olamilekan-salawudeen-78a56a1a4'>
        <AiFillLinkedin size = '3rem'>
          
        </AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href = 'https://twitter.com/Mophar2?s=08'>
        <AiFillTwitterCircle size = "3rem">

        </AiFillTwitterCircle>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
