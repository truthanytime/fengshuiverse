import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Image = {
  instagram: 'social-instagram.png',
  discord: 'social-discord.png',
  twitter: 'social-twitter.png',
  copyright: 'copyright.png',
}

const SOCIAL = [
  {
    icon: Image.instagram,
    link: 'https://instagram.com/fengshuiverse?utm_medium=copy_link',
  },
  {
    icon: Image.discord,
    link: 'https://discord.com/invite/3M3EeKGWfs',
  },
  {
    icon: Image.twitter,
    link: 'https://twitter.com/fengshuiverse',
  },
];

const Footer = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const copyrightImage = allImageSharp.nodes.find(n => n.fluid.originalName === Image.copyright).fluid
  return (
    <React.Fragment>
      <FooterWrapper>
        <StyledContainer>
          <SocialContainer>
            <h3>Subscribe to us!</h3>
            <SocialIcons>
              {
                SOCIAL.map(({ icon, link }) => {
                  const iconImage = allImageSharp.nodes.find(n => n.fluid.originalName === icon).fluid
                  return (
                    <ExternalLink key={link} href={link}>
                      <SocialIcon>
                        <Img fluid={iconImage} placeholderStyle={{ visibility: 'hidden' }} />
                      </SocialIcon>
                    </ExternalLink>
                  )
                })
              }
            </SocialIcons>
          </SocialContainer>

          <CopyrightContainer>
            <Copyright>
              <Img fluid={copyrightImage} placeholderStyle={{ visibility: 'hidden' }} />
            </Copyright>
            &nbsp; 2021 GLFYLAB
          </CopyrightContainer>
        </StyledContainer>
      </FooterWrapper>
    </React.Fragment>
  )
}

const FooterWrapper = styled.footer`
  padding: 10px 0;
`;

const SocialContainer = styled.div`
  ${props => props.theme.font_size.small};
`

const SocialIcons = styled.div`
  display: flex;
  position: relative;
  top: 5px;
`;

const SocialIcon = styled.div`
  height: 40px;
  width: 22px;
  margin-right: 15px;
`;

const CopyrightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: ${props => props.theme.font.secondary};
  position: relative;
  top: -15px;
`

const Copyright = styled.div`
  width: 10px;
`;

const StyledContainer = styled(Container)`
`;
// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

export default Footer;
