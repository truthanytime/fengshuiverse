import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Image = {
  banner: 'banner.jpg',
  fsv: 'fsv.png',
  enterButton: 'button-enter.png',
}

const Landing = () => {
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
  const banner = allImageSharp.nodes.find(n => n.fluid.originalName === Image.banner).fluid
  const fsv = allImageSharp.nodes.find(n => n.fluid.originalName === Image.fsv).fluid
  const enter = allImageSharp.nodes.find(n => n.fluid.originalName === Image.enterButton).fluid
  const renderEnterButton = () => (
    <button style={{ width: '150px' }}>
      <Link to='/home'>
        <Img fluid={enter} placeholderStyle={{ visibility: 'hidden' }} />
      </Link>
    </button>
  )
  return (
    <>
      <Banner>
        <Img fluid={banner} style={{ maxHeight: '550px' }} placeholderStyle={{ visibility: 'hidden' }} />
      </Banner>
      <Container>
        <TitleWrapper>
            <TitleWrapper1>
              <TitleContent1>
                Welcome
              </TitleContent1>
            </TitleWrapper1>
            <TitleWrapper2>
              <TitleContent2>
                to
              </TitleContent2>
            </TitleWrapper2>
          <FsvTitle>
            <Img fluid={fsv} style={{ maxWidth: '450px' }} placeholderStyle={{ visibility: 'hidden' }} />
          </FsvTitle>
        </TitleWrapper>
        
        <SpaceDivider />

        <HorizontalLine />
        <DescriptionContainer>
          <Description>
            Feng Shui means 'the way of the wind and water', a renowned Chinese art of spatial arrangement to achieve harmony and balance.
            Our aim here is to introduce this practice into the inherently abstract nature of the metaverse,
            inviting positive energy and fortune into the ecosystem to the bearer of FengShuiVerse artefacts.
          </Description>
          <EnterButtonContainer>
            { renderEnterButton() }
          </EnterButtonContainer>
        </DescriptionContainer>
        <EnterButtonMobileContainer>
          { renderEnterButton() }
        </EnterButtonMobileContainer>
        <HorizontalLine />
      </Container>
    </>
  );
}

const Banner = styled.figure`
  width: 100%;
  margin: 0;
`;

const TitleWrapper = styled.h1`
  position: relative;
  top: -145px;
  margin-bottom: -175px;

  @media (max-width: ${props => props.theme.screen.xs}) {
    top: -82px;
    margin-bottom: -130px;
  }
`;

const TitleWrapper1 = styled.div`
  position: relative;
  top: 40px;

  @media (max-width: ${props => props.theme.screen.xs}) {
    top: 30px;
  }
`;

const TitleContent1 = styled.div`
  @media (max-width: ${props => props.theme.screen.xs}) {
    ${props => props.theme.font_size.large};
  }
`;

const TitleWrapper2 = styled.div`
  position: relative;
  top: 16px;
  left: 206px;

  @media (max-width: ${props => props.theme.screen.xs}) {
    top: 10px;
    left: 105px;
  }
`;

const TitleContent2 = styled.div`
  @media (max-width: ${props => props.theme.screen.xs}) {
    ${props => props.theme.font_size.large};
  }
`;

const FsvTitle = styled.figure`
  width: 50%;
  margin: 0 0 0 40px;

  @media (max-width: ${props => props.theme.screen.xs}) {
    position: relative;
    left: -15px;
    width: 75%;
  }
`;

const SpaceDivider = styled.div`
  margin-top: 30px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 50px;
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
`;

const Description = styled.div`
  flex-grow: 1;
  padding-right: 20px;
`;

const EnterButtonContainer = styled.div`
  display: block;
  width: 400px;

  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none;
  }
`

const EnterButtonMobileContainer = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.xs}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const HorizontalLine = styled.hr`
  border: 1px solid ${props => props.theme.color.primary};
`

export default Landing;
